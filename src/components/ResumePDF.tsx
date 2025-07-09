import React, { forwardRef } from 'react';
import { heroData } from './Hero';
import { aboutData } from './About';
import { experiencesData } from './Experience';
import { certificationsData } from './Certifications';
import { skillsData } from './Skills';

const sectionTitle = (title: string) => (
  <h3 style={{
    fontSize: 20,
    color: '#6d28d9',
    margin: '0 0 12px 0',
    letterSpacing: 1,
    borderBottom: '2px solid #a78bfa',
    paddingBottom: 4,
    fontWeight: 700,
    textTransform: 'uppercase',
  }}>{title}</h3>
);

const ResumePDF = forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    style={{
      fontFamily: 'Inter, Arial, sans-serif',
      background: '#fff',
      color: '#18181b',
      padding: 36,
      width: 800,
      margin: '0 auto',
      borderRadius: 16,
      boxShadow: '0 4px 32px #e0e7ef44',
      boxSizing: 'border-box',
    }}
  >
    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 32 }}>
      <img
        src={heroData.profileImage}
        alt="Profile"
        style={{
          width: 110,
          height: 110,
          borderRadius: '50%',
          border: '3px solid #a78bfa',
          objectFit: 'cover',
          boxShadow: '0 2px 12px #a78bfa33',
        }}
      />
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, margin: 0, color: '#6d28d9', letterSpacing: 1 }}>{heroData.name}</h1>
        <h2 style={{ fontSize: 18, fontWeight: 500, margin: '8px 0 0 0', color: '#334155' }}>{heroData.title}</h2>
        <a
          href={heroData.linkedIn}
          style={{ color: '#2563eb', fontSize: 15, textDecoration: 'underline', marginTop: 8, display: 'inline-block' }}
        >
          LinkedIn
        </a>
      </div>
    </div>
    {/* About */}
    <section style={{ marginBottom: 24 }}>
      {sectionTitle('About Me')}
      {aboutData.paragraphs.map((p: string, i: number) => (
        <p key={i} style={{ fontSize: 15, margin: '8px 0', color: '#334155', lineHeight: 1.6 }}>{p}</p>
      ))}
    </section>
    {/* Skills */}
    <section style={{ marginBottom: 24 }}>
      {sectionTitle('Skills')}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {skillsData.map((cat: any) => (
          <div
            key={cat.title}
            style={{
              background: '#f1f5f9',
              borderRadius: 8,
              padding: '8px 14px',
              minWidth: 120,
              marginBottom: 6,
              fontSize: 14,
              color: '#334155',
              fontWeight: 500,
              boxShadow: '0 1px 4px #a78bfa11',
            }}
          >
            <div style={{ fontWeight: 700, color: '#6d28d9', marginBottom: 2 }}>{cat.title}</div>
            <div>{cat.skills.join(', ')}</div>
          </div>
        ))}
      </div>
    </section>
    {/* Experience */}
    <section style={{ marginBottom: 24 }}>
      {sectionTitle('Experience')}
      {experiencesData.map((exp: any, i: number) => (
        <div key={i} style={{ marginBottom: 18, paddingBottom: 10, borderBottom: '1px solid #e0e7ef' }}>
          <div style={{ fontWeight: 700, fontSize: 16, color: '#18181b' }}>{exp.role} <span style={{ color: '#6d28d9' }}>@ {exp.company}</span></div>
          <div style={{ fontSize: 13, color: '#64748b', marginBottom: 4 }}>{exp.location} | {exp.duration}</div>
          <ul style={{ margin: '8px 0 0 20px', fontSize: 14, color: '#334155', lineHeight: 1.5 }}>
            {exp.description.map((d: string, j: number) => (
              <li key={j}>{d}</li>
            ))}
          </ul>
          <div style={{ fontSize: 13, color: '#a78bfa', marginTop: 4 }}>{exp.technologies.join(', ')}</div>
        </div>
      ))}
    </section>
    {/* Certifications */}
    <section>
      {sectionTitle('Certifications')}
      <ul style={{ fontSize: 14, margin: 0, padding: 0, listStyle: 'none', color: '#334155' }}>
        {certificationsData.map((cert: any, i: number) => (
          <li key={i} style={{ marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid #e0e7ef' }}>
            <span style={{ fontWeight: 700, color: '#6d28d9' }}>{cert.title}</span> - <span style={{ color: '#2563eb' }}>{cert.issuer}</span> ({cert.date})
          </li>
        ))}
      </ul>
    </section>
  </div>
));

export default ResumePDF; 