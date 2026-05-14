import Sidebar from '@/components/Sidebar';
import ShowreelCard from '@/components/ShowreelCard';
import { showreelVideos } from '@/data/showreelVideos';

export const metadata = {
  title: 'showreel — adhishree',
};

export default function ShowreelPage() {
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
              marginBottom: '40px',
            }}
          >
            showreel
          </p>

          <div
            style={{
              display: 'grid',
              gap: '28px 24px',
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {showreelVideos.map(video => (
              <ShowreelCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
