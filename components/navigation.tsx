'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
export default function Navigation() {
 const path = usePathname(); const [open, setOpen] = useState(false);
 const links = [['/', 'Home'], ['/about/', 'About'], ['/directory/', 'Directory'], ['/events/', 'Upcoming events']];
 return <><button className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>{open ? 'Close ✕' : 'Menu ☰'}</button><nav id="primary-nav" className={open ? 'navigation open' : 'navigation'} aria-label="Main navigation">{links.map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={path.replace(/\/$/,'') === href.replace(/\/$/,'') ? 'page' : undefined}>{label}</Link>)}<Link href="/membership/" className="button small" onClick={() => setOpen(false)} aria-current={path.startsWith('/membership') ? 'page' : undefined}>Become a member <span aria-hidden="true">↗</span></Link></nav></>;
}
