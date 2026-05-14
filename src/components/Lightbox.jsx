'use client';

import { useEffect, useCallback } from 'react';

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (currentIndex === null || !images[currentIndex]) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.92)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt=""
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          objectFit: 'contain',
        }}
      />

      {/* Counter */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: "'DM Mono', monospace",
          fontSize: '12px',
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.1em',
          pointerEvents: 'none',
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '24px',
          right: '28px',
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,0.6)',
          cursor: 'pointer',
          fontFamily: "'DM Mono', monospace",
          fontSize: '12px',
          letterSpacing: '0.1em',
        }}
      >
        close
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); onPrev(); }}
          style={{
            position: 'absolute',
            left: '28px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.6)',
            cursor: 'pointer',
            fontSize: '24px',
            lineHeight: 1,
          }}
          aria-label="Previous image"
        >
          ←
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); onNext(); }}
          style={{
            position: 'absolute',
            right: '28px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.6)',
            cursor: 'pointer',
            fontSize: '24px',
            lineHeight: 1,
          }}
          aria-label="Next image"
        >
          →
        </button>
      )}
    </div>
  );
}
