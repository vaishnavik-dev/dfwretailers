import Link from 'next/link';
import PageHeading from '../../components/page-heading';
import site from '../../data/site.json';
export const metadata = { title: 'Upcoming Events', description: 'Join the First Retailers Meeting on October 24, 2026, from 9:30 AM to noon in Frisco. Breakfast is provided.' };
export default function Events() {
 const whatsappUrl = site.whatsappUrl && /^https:\/\/(chat\.whatsapp\.com|wa\.me)\//.test(site.whatsappUrl) ? site.whatsappUrl : null;
 return <><PageHeading label="UPCOMING EVENTS" title="Let’s meet, DFW." description="Step away from the storefront and connect with your local retail community." />
 <section className="events-list" aria-label="Upcoming meetings"><article className="meeting-card"><div className="meeting-date"><span>OCTOBER</span><strong>24</strong><span>2026</span></div><div className="meeting-content"><p className="eyebrow">YOU’RE INVITED</p><h2>First Retailers Meeting</h2><p>Come together with fellow DFW retailers for a morning of conversation and connection.</p><dl className="meeting-details"><div><dt>When</dt><dd><time dateTime="2026-10-24T09:30:00-05:00">Saturday, October 24, 2026</time><br />9:30 AM–12:00 PM · Central Time</dd></div><div><dt>Where</dt><dd><a href="https://www.google.com/maps/search/?api=1&query=7700%20Preston%20Rd%20%23701%2C%20Frisco%2C%20TX%2075034" target="_blank" rel="noopener noreferrer">7700 Preston Rd #701<br />Frisco, TX 75034 ↗</a></dd></div></dl><span className="breakfast-badge">Breakfast provided</span></div></article></section>
 <section className="join-banner events-updates"><div><p className="eyebrow">KEEP THE CONVERSATION GOING</p><h2>There’s more to come.</h2><p>Join our WhatsApp community for future event updates.</p></div>{whatsappUrl ? <a className="button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Stay updated for future events ↗</a> : <Link className="button" href="/membership/">Stay updated for future events ↗</Link>}</section></>;
}
