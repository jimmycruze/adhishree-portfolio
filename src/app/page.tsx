'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/about', label: 'about' },
  { href: '/commercial', label: 'commercial' },
  { href: '/creative', label: 'creative' },
  { href: '/showreel', label: 'showreel' },
];

export default function LandingPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 'clamp(32px, 8vw, 120px)',
        paddingRight: 'clamp(32px, 6vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '680px' }}>
        {/* Hero name */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: 'clamp(64px, 11vw, 148px)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 400ms ease, transform 400ms ease',
          }}
        >
          adhishree p.
        </h1>

        {/* Descriptor */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '13px',
            color: 'var(--text-secondary)',
            letterSpacing: '0.1em',
            marginTop: '18px',
            opacity: visible ? 1 : 0,
            transition: 'opacity 400ms ease 200ms',
          }}
        >
          makeup artist&nbsp;&nbsp;·&nbsp;&nbsp;mumbai
        </p>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            maxWidth: '320px',
            height: '1px',
            background: 'var(--sidebar-border)',
            margin: '28px 0 24px',
            opacity: visible ? 1 : 0,
            transition: 'opacity 400ms ease 300ms',
          }}
        />

        {/* Nav links */}
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            opacity: visible ? 1 : 0,
            transition: 'opacity 400ms ease 400ms',
          }}
        >
          {navLinks.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} />
          ))}
        </nav>

        {/* Second divider */}
        <div
          style={{
            width: '100%',
            maxWidth: '320px',
            height: '1px',
            background: 'var(--sidebar-border)',
            margin: '28px 0 20px',
            opacity: visible ? 1 : 0,
            transition: 'opacity 400ms ease 500ms',
          }}
        />

        {/* Contact */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            opacity: visible ? 1 : 0,
            transition: 'opacity 400ms ease 550ms',
          }}
        >
          <ContactLink href="mailto:adhishreep20@gmail.com" label="email ↗" />
          <ContactLink
            href="https://www.instagram.com/adhishreep/"
            label="instagram ↗"
            external
          />
        </div>
      </div>
    </main>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '15px',
        letterSpacing: '0.04em',
        color: hovered ? 'var(--accent)' : 'var(--text-primary)',
        transition: 'color 150ms ease',
      }}
    >
      {label}
    </Link>
  );
}

function ContactLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '13px',
        color: hovered ? 'var(--text-primary)' : 'var(--text-secondary)',
        letterSpacing: '0.06em',
        transition: 'color 150ms ease',
      }}
    >
      {label}
    </a>
  );
}
