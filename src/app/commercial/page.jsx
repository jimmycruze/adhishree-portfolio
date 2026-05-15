'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Lightbox from '@/components/Lightbox';
import { commercialProjects } from '@/data/commercialProjects';

function CommercialMasonryItem({ project, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ position: 'relative', overflow: 'hidden', marginBottom: '5px', breakInside: 'avoid', cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img
        src={project.cover}
        alt={project.title}
        loading="lazy"
        style={{
          width: '100%',
          display: 'block',
          filter: hovered ? 'grayscale(100%)' : 'grayscale(0%)',
          transition: 'filter 200ms ease',
        }}
      />

      {/* Hover overlay with title */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.45)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 200ms ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '14px',
          pointerEvents: 'none',
        }}
      >
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '11px',
          color: 'white',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          lineHeight: 1.4,
        }}>
          {project.title}
        </p>
      </div>
    </div>
  );
}

export default function CommercialPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

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

  // Distribute projects into columns
  const cols = Array.from({ length: columns }, () => []);
  commercialProjects.forEach((project, i) => cols[i % columns].push(project));

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

          <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-start' }}>
            {cols.map((col, colIdx) => (
              <div key={colIdx} style={{ flex: 1 }}>
                {col.map((project) => (
                  <CommercialMasonryItem
                    key={project.id}
                    project={project}
                    onClick={() => openProject(project)}
                  />
                ))}
              </div>
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
