import Link from 'next/link';
export default function NotFound() { return <section className="page-heading"><p className="eyebrow">404</p><h1>Let’s get you back.</h1><p className="lead">We couldn’t find that page.</p><Link className="button" href="/">Back to home →</Link></section>; }
