'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ProjectCard from '@/components/ProjectCard';
import Lightbox from '@/components/Lightbox';
import { commercialProjects } from '@/data/commercialProjects';

export default function CommercialPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openProject = (project) => {
    setActiveProject(project);
    setLightboxIndex(0);
  };

  const closeLightbox = () => {
    setActiveProject(null);
    setLightboxIndex(null);
  };

  const prevImage = () => {
    setLightboxIndex(i => (i - 1 + activeProject.images.length) % activeProject.images.length);
  };

  const nextImage = () => {
    setLightboxIndex(i => (i + 1) % activeProject.images.length);
  };

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
            commercial
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '28px 24px',
            }}
            className="grid-cols-1 sm:grid-cols-2"
          >
            {commercialProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openProject(project)}
              />
            ))}
          </div>
        </div>
      </main>

      {activeProject && lightboxIndex !== null && (
        <Lightbox
          images={activeProject.images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
