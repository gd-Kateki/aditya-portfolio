import { profile } from '@/data/profile';
import { asset } from '@/lib/paths';
import Link from 'next/link';
export function Hero() {
 return <section id="home" className="hero section-shell">
  <div className="hero-topline"><p className="eyebrow">GAME DESIGNER <span aria-hidden="true">×</span> UI/UX DESIGNER</p><p className="eyebrow">Maharashtra, India</p></div>
  <h1>ADITYA NAIR</h1>
  <div className="hero-grid"><div className="hero-copy"><h2>Game design<br />and UI/UX.</h2><p>{profile.intro}</p><div className="hero-actions"><a className="button primary" href="#work">View projects</a><a className="text-link" href={asset(profile.resume)} download>Download résumé</a></div></div><div className="hero-project-preview"><img src={asset('/images/novelnest/showcase.webp')} alt="NovelNest discovery, home feed, and reading screens" width="1440" height="900" fetchPriority="high" decoding="async"/><div><p className="eyebrow">UI design / NovelNest</p><Link prefetch={false} className="text-link" href="/projects/novelnest/">View project →</Link></div></div></div>
  <div className="hero-footer"><span className="eyebrow">Game mechanics · Level design · Product interfaces</span><p>Based in Maharashtra, India.</p><a href="#work" className="text-link">Selected work</a></div>
 </section>;
}
