import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../components/navigation';
import site from '../data/site.json';
import './globals.css';
export const metadata: Metadata = { title: { default: 'DFW Retailers — Local business. Shared ambition.', template: '%s | DFW Retailers' }, description: 'A community for retailers across the Dallas–Fort Worth Metroplex. Connect with local business owners and grow together.' };
export default function Layout({ children }: { children: React.ReactNode }) {
 return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><header className="header"><Link className="brand" href="/" aria-label="DFW Retailers home">{site.logo ? <><img src={site.logo} alt="" /><span className="brand-name">DFW Retailers</span></> : <><span className="brand-top">DFW<span className="brand-dot">.</span></span><span className="brand-bottom">RETAILERS</span></>}</Link><Navigation /></header><main id="main">{children}</main><footer><div className="footer-top"><Link className="footer-brand" href="/">DFW Retailers<span className="brand-dot">.</span></Link><p>Local business. Shared ambition.</p><span>Dallas–Fort Worth, Texas</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} DFW Retailers</span><nav aria-label="Footer"><Link href="/about/">About</Link><Link href="/directory/">Directory</Link><Link href="/membership/">Become a member</Link></nav><span>Built around community.</span></div></footer></body></html>;
}
