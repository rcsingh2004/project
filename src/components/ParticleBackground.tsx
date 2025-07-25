import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  radius: number;
  glow: boolean;
  layer: number;
}

interface Shape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
}

const LAYERS = 3;
const PARTICLES_PER_LAYER = [20, 20, 20]; // total 60
const COLORS = [
  [34, 211, 238], // cyan
  [139, 92, 246], // purple
  [236, 72, 153], // pink
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const shapesRef = useRef<Shape[]>([]);
  const colorShiftRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles with layers and glow
    const initParticles = () => {
      particlesRef.current = [];
      for (let l = 0; l < LAYERS; l++) {
        for (let i = 0; i < PARTICLES_PER_LAYER[l]; i++) {
          particlesRef.current.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * (0.2 + l * 0.2),
            vy: (Math.random() - 0.5) * (0.2 + l * 0.2),
            life: 1,
            decay: Math.random() * 0.01 + 0.005,
            radius: lerp(1, 2.5, l / (LAYERS - 1)),
            glow: Math.random() < 0.3,
            layer: l,
          });
        }
      }
    };

    // Initialize floating shapes
    const initShapes = () => {
      shapesRef.current = [];
      for (let i = 0; i < 3; i++) {
        shapesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05,
          radius: lerp(120, 220, Math.random()),
          opacity: lerp(0.04, 0.09, Math.random()),
          color: `rgba(${COLORS[i][0]},${COLORS[i][1]},${COLORS[i][2]},`,
        });
      }
    };

    initParticles();
    initShapes();

    let lastTimestamp = 0;
    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animate color shift
      colorShiftRef.current += 0.001;
      if (colorShiftRef.current > 1) colorShiftRef.current = 0;
      const t = (Math.sin(colorShiftRef.current * Math.PI * 2) + 1) / 2;
      const colorA = COLORS[0];
      const colorB = COLORS[1];
      const colorC = COLORS[2];
      const mainColor = [
        Math.round(lerp(colorA[0], colorB[0], t)),
        Math.round(lerp(colorA[1], colorB[1], t)),
        Math.round(lerp(colorA[2], colorB[2], t)),
      ];
      const accentColor = [
        Math.round(lerp(colorB[0], colorC[0], t)),
        Math.round(lerp(colorB[1], colorC[1], t)),
        Math.round(lerp(colorB[2], colorC[2], t)),
      ];

      // Draw floating shapes (behind particles)
      shapesRef.current.forEach((shape, i) => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        // Wrap
        if (shape.x < -shape.radius) shape.x = canvas.width + shape.radius;
        if (shape.x > canvas.width + shape.radius) shape.x = -shape.radius;
        if (shape.y < -shape.radius) shape.y = canvas.height + shape.radius;
        if (shape.y > canvas.height + shape.radius) shape.y = -shape.radius;
        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${shape.color}${shape.opacity})`;
        ctx.filter = 'blur(8px)';
        ctx.fill();
        ctx.filter = 'none';
      });

      // Update and draw particles (with parallax and glow)
      particlesRef.current.forEach((particle, index) => {
        // Parallax: slower for lower layers
        particle.x += particle.vx * (0.5 + particle.layer * 0.5);
        particle.y += particle.vy * (0.5 + particle.layer * 0.5);
        particle.life -= particle.decay;
        // Wrap
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 1;
        }
        // Draw particle
        ctx.save();
        if (particle.glow) {
          ctx.shadowColor = `rgba(${mainColor[0]},${mainColor[1]},${mainColor[2]},0.7)`;
          ctx.shadowBlur = 12;
        }
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${mainColor[0]},${mainColor[1]},${mainColor[2]},${0.25 + 0.25 * particle.life})`;
        ctx.fill();
        ctx.restore();
        // Draw connections (only for top layer)
        if (particle.layer === LAYERS - 1) {
          particlesRef.current.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex && otherParticle.layer === LAYERS - 1) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(${accentColor[0]},${accentColor[1]},${accentColor[2]},${(1 - distance / 100) * 0.08})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;