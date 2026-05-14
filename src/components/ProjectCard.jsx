'use client';

import { useState } from 'react';

export default function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <div
        style={{
          overflow: 'hidden',
          aspectRatio: '3/4',
          background: '#E8E3DC',
        }}
      >
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: hovered ? 'scale(1.02)' : 'scale(1)',
            transition: 'transform 350ms ease',
          }}
        />
      </div>
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '12px',
          color: 'var(--text-secondary)',
          marginTop: '10px',
          letterSpacing: '0.06em',
        }}
      >
        {project.title.toLowerCase()}
      </p>
    </div>
  );
}
