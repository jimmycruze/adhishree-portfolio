'use client';

import { useState, useEffect } from 'react';

function MasonryItem({ image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ position: 'relative', overflow: 'hidden', marginBottom: '5px', breakInside: 'avoid' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image.src}
        alt={image.project || ''}
        loading="lazy"
        style={{
          width: '100%',
          display: 'block',
          filter: hovered ? 'grayscale(100%)' : 'grayscale(0%)',
          transition: 'filter 200ms ease',
        }}
      />

      {/* Hover overlay */}
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
        {image.project && (
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px',
            color: 'white',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            lineHeight: 1.4,
          }}>
            {image.project}
          </p>
        )}
        {image.photographer && (
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.06em',
            marginTop: '3px',
          }}>
            {image.photographer}
          </p>
        )}
      </div>
    </div>
  );
}

export default function MasonryGrid({ images }) {
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

  // Distribute images into columns
  const cols = Array.from({ length: columns }, () => []);
  images.forEach((img, i) => cols[i % columns].push(img));

  return (
    <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-start' }}>
      {cols.map((col, colIdx) => (
        <div key={colIdx} style={{ flex: 1 }}>
          {col.map((image) => (
            <MasonryItem key={image.src} image={image} />
          ))}
        </div>
      ))}
    </div>
  );
}
