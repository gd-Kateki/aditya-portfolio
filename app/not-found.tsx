import Link from 'next/link';
export default function NotFound() {
  return <main id="main-content" className="section-shell not-found"><p className="eyebrow accent-text">404 / Outside the map</p><h1>This path ends here.</h1><p>Let’s get you back to the work.</p><Link prefetch={false} className="button primary" href="/#work">Return to the portfolio</Link></main>;
}
