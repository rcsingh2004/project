import React, { forwardRef } from 'react';
import { heroData } from './Hero';
import { aboutData } from './About';
import { experiencesData } from './Experience';
import { skillsData } from './Skills';
import { certificationsData } from './Certifications';

const ResumePDF = forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    className="w-[800px] mx-auto rounded-xl shadow-2xl overflow-hidden font-sans"
    style={{ fontFamily: 'Inter, Arial, sans-serif' }}
  >
    <div className="flex h-full">
      {/* Left Column */}
      <div className="bg-black text-white w-1/3 flex flex-col items-center py-8 px-4 min-h-full">
        <img
          src={heroData.profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white object-cover mb-6 shadow-lg"
        />
        <h1 className="text-2xl font-bold mb-1">{heroData.name}</h1>
        <h2 className="text-lg font-medium mb-6">{heroData.title}</h2>
        {/* Contact */}
        <div className="w-full mb-6">
          <h3 className="text-base font-semibold border-b border-gray-600 pb-1 mb-2">CONTACT</h3>
          <div className="text-sm mb-2">
            <span className="block font-semibold">Email</span>
            <a href={`mailto:${heroData.email}`} className="underline text-blue-400 break-all">{heroData.email}</a>
          </div>
          <div className="text-sm mb-2">
            <span className="block font-semibold">Phone</span>
            <a href={`tel:${heroData.phone}`} className="underline text-blue-400">{heroData.phone}</a>
          </div>
          <div className="text-sm mb-2">
            <span className="block font-semibold">Address</span>
            {heroData.address}
          </div>
          <div className="text-sm mb-2">
            <span className="block font-semibold">LinkedIn</span>
            <a href={heroData.linkedIn} className="underline text-blue-400 break-all" target="_blank" rel="noopener noreferrer">{heroData.linkedIn}</a>
          </div>
          <div className="text-sm">
            <span className="block font-semibold">GitHub</span>
            <a href={heroData.github} className="underline text-blue-400 break-all" target="_blank" rel="noopener noreferrer">{heroData.github}</a>
          </div>
        </div>
        {/* Languages */}
        <div className="w-full mb-6">
          <h3 className="text-base font-semibold border-b border-gray-600 pb-1 mb-2">LANGUAGES</h3>
          <ul className="text-sm list-disc list-inside">
            <li>English: Fluent</li>
            <li>Hindi: Native</li>
          </ul>
        </div>
        {/* Certificates */}
        <div className="w-full">
          <h3 className="text-base font-semibold border-b border-gray-600 pb-1 mb-2">CERTIFICATES</h3>
          <ul className="text-sm list-disc list-inside">
            {certificationsData.map((cert, idx) => (
              <li key={idx}>{cert.title}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Right Column */}
      <div className="bg-white text-black w-2/3 p-10">
        {/* Summary */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">SUMMARY</h3>
          {aboutData.paragraphs.map((p: string, i: number) => (
            <p key={i} className="text-sm leading-relaxed text-gray-800 mb-2">{p}</p>
          ))}
        </div>
        {/* Experience */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">EXPERIENCE</h3>
          {experiencesData.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="font-semibold text-base">
                {exp.role} <span className="text-purple-700">@ {exp.company}</span>
              </div>
              <div className="text-xs text-gray-500 mb-1">{exp.location} | {exp.duration}</div>
              <ul className="text-xs list-disc list-inside mb-1">
                {exp.description.map((d: string, j: number) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
              <div className="text-xs text-purple-500 mb-2">{exp.technologies.join(', ')}</div>
            </div>
          ))}
        </div>
        {/* Skills */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">SKILLS</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {skillsData.map((cat, i) => (
              <div key={i}>
                <div className="font-semibold text-purple-700 mb-1">{cat.title}</div>
                <div>{cat.skills.join(', ')}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Certifications */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">CERTIFICATIONS</h3>
          <ul className="text-sm list-disc list-inside">
            {certificationsData.map((cert, idx) => (
              <li key={idx}>
                <span className="font-semibold text-purple-700">{cert.title}</span> - <span className="text-blue-700">{cert.issuer}</span> ({cert.date})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
));

export default ResumePDF; 