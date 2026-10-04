'use client';
import { useState } from 'react';
import { profile } from '@/data/profile';
import { asset } from '@/lib/paths';
export function Contact() {
  const [status, setStatus] = useState('');
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setStatus('Email address copied.'); }
    catch { setStatus('Copy unavailable. Select the email address below, or use “Send email”.'); }
  }
  return <footer id="contact" className="contact-section"><div className="section-shell">
    <p className="eyebrow">04 / Contact</p><div className="contact-title"><h2>Contact me</h2></div>
    <div className="contact-grid"><p>For project enquiries or design roles,<br />email me or download my résumé.</p><div><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><div className="contact-actions"><a className="button light" href={`mailto:${profile.email}`}>Send email</a><button className="copy-button" onClick={copyEmail}>Copy email</button></div><p className="copy-status" role="status">{status}</p></div></div>
    <div className="footer-bottom"><LinkHome /><span>{profile.location}</span><a href={asset(profile.resume)} download>Download résumé</a><a href="#home">Back to top</a></div>
  </div></footer>;
}
function LinkHome() { return <span className="footer-signature">Aditya Nair <span aria-hidden="true">×</span> Game Design & UI/UX</span>; }
