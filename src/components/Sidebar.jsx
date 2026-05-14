'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about', label: 'about' },
  { href: '/commercial', label: 'commercial' },
  { href: '/creative', label: 'creative' },
  { href: '/showreel', label: 'showreel' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        style={{
          width: 'var(--sidebar-width)',
          borderRight: '1px solid var(--sidebar-border)',
          background: 'var(--bg)',
        }}
        className="fixed top-0 left-0 h-screen flex-col hidden lg:flex z-40"
      >
        <div className="flex flex-col h-full px-8 py-10">
          {/* Site name */}
          <Link
            href="/"
            className="font-display mb-10 tracking-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: '17px',
              color: pathname === '/' ? 'var(--accent)' : 'var(--text-primary)',
            }}
          >
            adhishree.
          </Link>

          {/* Nav links */}
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '14px',
                  letterSpacing: '0.04em',
                  color: pathname === href ? 'var(--accent)' : 'var(--text-primary)',
                  transition: 'color 150ms ease',
                }}
                onMouseEnter={e => {
                  if (pathname !== href) e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={e => {
                  if (pathname !== href) e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <a
              href="mailto:adhishreemakeupartist@gmail.com"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '12px',
                color: 'var(--text-secondary)',
                letterSpacing: '0.04em',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              email ↗
            </a>
            <a
              href="https://www.instagram.com/adhishree_mua/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '12px',
                color: 'var(--text-secondary)',
                letterSpacing: '0.04em',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              instagram ↗
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile: Hamburger button */}
      <button
        className="lg:hidden fixed top-6 left-6 z-50 flex flex-col gap-1.5"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--text-primary)' }} />
        <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--text-primary)' }} />
        <span style={{ display: 'block', width: '14px', height: '1px', background: 'var(--text-primary)' }} />
      </button>

      {/* Mobile: Full-screen overlay nav */}
      {menuOpen && (
        <div
          style={{ background: 'var(--bg)', zIndex: 100 }}
          className="fixed inset-0 flex flex-col items-center justify-center"
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'DM Mono', monospace",
              fontSize: '13px',
              color: 'var(--text-secondary)',
            }}
          >
            close
          </button>

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '48px',
              color: 'var(--text-primary)',
              marginBottom: '48px',
            }}
          >
            adhishree.
          </Link>

          <nav className="flex flex-col items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '16px',
                  letterSpacing: '0.08em',
                  color: pathname === href ? 'var(--accent)' : 'var(--text-primary)',
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-6 mt-12">
            <a
              href="mailto:adhishreemakeupartist@gmail.com"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '12px',
                color: 'var(--text-secondary)',
              }}
            >
              email ↗
            </a>
            <a
              href="https://www.instagram.com/adhishree_mua/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '12px',
                color: 'var(--text-secondary)',
              }}
            >
              instagram ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
