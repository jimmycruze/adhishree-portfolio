import Sidebar from '@/components/Sidebar';
import MasonryGrid from '@/components/MasonryGrid';
import { creativeImages } from '@/data/creativeImages';

export const metadata = {
  title: 'creative — adhishree',
};

export default function CreativePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      <Sidebar />

      <main
        style={{ flex: 1, padding: '60px 48px 60px 48px' }}
        className="content-area"
      >
        <div style={{ paddingTop: '40px' }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              color: 'var(--text-secondary)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            creative
          </p>
          <MasonryGrid images={creativeImages} />
        </div>
      </main>
    </div>
  );
}
