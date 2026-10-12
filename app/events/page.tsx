import Link from 'next/link';
import PageHeading from '../../components/page-heading';
export const metadata = { title: 'Upcoming Events', description: 'Upcoming opportunities to meet the DFW Retailers community. Coming soon.' };
export default function Events() { return <><PageHeading label="UPCOMING EVENTS" title="Good things are on the way." description="A chance to step away from the storefront and connect with your community."/><section className="event-empty"><div className="event-mark" aria-hidden="true">↗</div><p className="eyebrow">WATCH THIS SPACE</p><h2>Coming soon.</h2><p>We look forward to bringing DFW retailers together.<br/>Upcoming events will be shared here.</p><Link className="text-link" href="/membership/">Get connected with the community →</Link></section></>; }
