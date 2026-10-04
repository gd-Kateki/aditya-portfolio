'use client';
import { useState } from 'react';
import { experience } from '@/data/experience';
export function Experience() {
  const [selected, setSelected] = useState(experience[0].id);
  return <section id="experience" className="experience-section section-space">
    <div className="section-shell"><div className="section-heading"><div><p className="eyebrow">02 / Experience</p><h2>Experience</h2></div><p className="section-intro">Design roles across studios, internships, and collaborative teams.</p></div>
    <div className="career-list">{experience.map((job, index) => <div className={`career-item ${selected === job.id ? 'expanded' : ''}`} key={job.id}>
      <h3><button className="career-trigger" aria-expanded={selected === job.id} aria-controls={`career-${job.id}`} id={`career-heading-${job.id}`} onClick={() => setSelected(selected === job.id ? '' : job.id)}><span className="career-number">0{index + 1}</span><span className="career-company">{job.company}<span>{job.role}</span></span><span className="career-dates">{job.dates}</span><span className="career-symbol" aria-hidden="true">{selected === job.id ? '−' : '+'}</span></button></h3>
      <div id={`career-${job.id}`} role="region" aria-labelledby={`career-heading-${job.id}`} hidden={selected !== job.id} className="career-panel"><div><span className={`discipline-tag ${job.discipline === 'UI/UX' ? 'ux-tag' : ''}`}>{job.discipline}</span><p className="career-summary">{job.summary}</p></div><div><h4 className="eyebrow">What I worked on</h4><ul>{job.responsibilities.map(item => <li key={item}>{item}</li>)}</ul><div className="tags">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></div>
    </div>)}</div></div>
  </section>;
}
