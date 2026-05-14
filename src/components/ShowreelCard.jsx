'use client';

import { useState } from 'react';

export default function ShowreelCard({ video }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  const thumbnailUrl = imgError
    ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'block' }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9', background: '#1a1a1a' }}>
        <img
          src={thumbnailUrl}
          alt={video.title}
          onError={() => setImgError(true)}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            filter: hovered ? 'brightness(1.1)' : 'brightness(1)',
            transition: 'filter 200ms ease',
          }}
        />

        {/* Play icon */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="1.5" strokeOpacity="0.65" />
            <polygon points="20,16 34,24 20,32" fill="white" fillOpacity="0.65" />
          </svg>
        </div>
      </div>

      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '11px',
          color: 'var(--text-secondary)',
          marginTop: '8px',
          letterSpacing: '0.04em',
          lineHeight: 1.5,
        }}
      >
        {video.title.toLowerCase()}
      </p>
    </a>
  );
}
