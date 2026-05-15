import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'about — adhishree',
};

export default function AboutPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      <Sidebar />

      <main
        style={{ flex: 1, padding: '60px 48px 60px 48px' }}
        className="content-area"
      >
        <div style={{ maxWidth: '680px', paddingTop: '40px' }}>
          {/* Section label */}
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              color: 'var(--text-secondary)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '36px',
            }}
          >
            about
          </p>

          {/* About image */}
          <div style={{ marginBottom: '40px' }}>
            <img
              src="/assets/about/adhishree-about.jpg"
              alt="Adhishree"
              style={{
                width: '100%',
                maxWidth: '480px',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '17px',
                lineHeight: 1.75,
                color: 'var(--text-primary)',
              }}
            >
              With a decade-long career in makeup artistry, Adhishree&apos;s makeup kit includes more than just the expected arsenal of beauty products.
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '17px',
                lineHeight: 1.75,
                color: 'var(--text-primary)',
              }}
            >
              With a penchant for lustrous skin that looks untouched, and a knack for colour-play that just pops, she knows how to enhance the natural beauty of those who sit in her makeup chair.
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '17px',
                lineHeight: 1.75,
                color: 'var(--text-primary)',
              }}
            >
              When on set, Adhishree brings with her an infectious creative energy, one that knows when less is more and isn&apos;t afraid to experiment either. Rooted in her lived understanding of Indian beauty and skin, she approaches every face with a fresh perspective that goes beyond convention.
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '17px',
                lineHeight: 1.75,
                color: 'var(--text-primary)',
              }}
            >
              For Adhishree, makeup is never a mask, but a conversation between artistry and identity.
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'var(--sidebar-border)',
              margin: '48px 0',
            }}
          />

          {/* Clients */}
          <div style={{ marginBottom: '40px' }}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
                color: 'var(--text-secondary)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              selected clients
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '14px',
                lineHeight: 2,
                color: 'var(--text-secondary)',
              }}
            >
              Tira · CeraVe · Levi&apos;s · Amazon Fashion · Spotify · Netflix · Natural Diamond Council ·
              WhatsApp · OnePlus · Taj Hotels · Hershey&apos;s · Melorra · Havells · Titan SKINN ·
              Zivame · Rexona · TRESemmé · Pantaloons · Indewild · Pali Beauty
            </p>
          </div>

          {/* Contact */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
            }}
          >
            <a
              href="mailto:adhishreep20@gmail.com"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '13px',
                color: 'var(--text-secondary)',
                letterSpacing: '0.06em',
              }}
            >
              email ↗
            </a>
            <a
              href="https://www.instagram.com/adhishreep/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '13px',
                color: 'var(--text-secondary)',
                letterSpacing: '0.06em',
              }}
            >
              instagram ↗
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
