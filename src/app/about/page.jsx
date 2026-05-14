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
              Adhishree is a Mumbai-based makeup artist with 9 years of experience
              creating looks that range from soft, skin-forward beauty to bold
              editorial statements.
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '17px',
                lineHeight: 1.75,
                color: 'var(--text-primary)',
              }}
            >
              Her work spans commercial campaigns, editorial shoots, and celebrity
              beauty — with credits across Tira, CeraVe, Levi&apos;s, Amazon Fashion,
              Spotify, Netflix, Natural Diamond Council, WhatsApp, and more.
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '17px',
                lineHeight: 1.75,
                color: 'var(--text-primary)',
              }}
            >
              Adhishree approaches each project as a collaboration — working closely
              with directors, photographers, and talent to find the look that
              serves the story. Whether it&apos;s a skin-first campaign or a
              high-fashion editorial, the intention is always the same: precision,
              presence, and work that holds up on screen.
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
              href="mailto:adhishreemakeupartist@gmail.com"
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
              href="https://www.instagram.com/adhishree_mua/"
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
