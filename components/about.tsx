import { profile } from '@/data/profile';
import { skills, jams } from '@/data/skills';
import { Reveal } from './reveal';
export function About() {
  return <section id="about" className="section-shell section-space about-section">
    <Reveal className="about-grid"><div><p className="eyebrow accent-text">03 / About</p><h2>About me</h2></div><div className="about-copy"><p className="about-lead">{profile.about}</p><p>{profile.background}</p><div className="education"><p className="eyebrow">Education / {profile.education.dates}</p><h3>{profile.education.degree}</h3><p>{profile.education.school}<br />{profile.education.location}</p></div><div className="languages"><p className="eyebrow">Languages</p><p>{profile.languages.join(' · ')}</p></div></div></Reveal>
    <div className="skills-header"><p className="eyebrow accent-text">Skills</p><h3>Tools & disciplines</h3></div>
    <div className="skills-grid">{skills.map(group => <div key={group.title} className="skill-group"><span className="eyebrow">{group.number}</span><h4>{group.title}</h4><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
    <Reveal className="jam-section"><div className="jam-intro"><p className="eyebrow accent-text">Game jams</p><h3>Game jam projects</h3><p>Game jams: limited time, shared decisions, and room to try something different.</p></div><div className="jam-list">{jams.map(jam => <article key={jam.name}><div><span className="eyebrow">{jam.year} / {jam.duration}</span><h4>{jam.name}</h4><p>{jam.roles}</p></div></article>)}</div></Reveal>
  </section>;
}
