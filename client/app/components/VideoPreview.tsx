'use client';
import React from 'react';

interface VideoPreviewProps {
  src: string;
  title: string;
  poster?: string; // vignette optionnelle
}

const VideoPreview = ({ src, title, poster }: VideoPreviewProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);
  const [generatedPoster, setGeneratedPoster] = React.useState<string | null>(null);

  React.useEffect(() => {
    const touch = typeof window !== 'undefined' && (
      'ontouchstart' in window ||
      (navigator as any)?.maxTouchPoints > 0 ||
      window.matchMedia?.('(hover: none)').matches === true
    );
    setIsTouchDevice(Boolean(touch));
  }, []);

  // Génération d'une vignette depuis la première frame (mobile/tactile)
  React.useEffect(() => {
    if (!isTouchDevice) return;
    let revoked = false;
    const tempVideo = document.createElement('video');
    tempVideo.src = src;
    tempVideo.muted = true;
    tempVideo.playsInline = true as any;
    tempVideo.preload = 'auto';
    const handleLoaded = () => {
      try {
        // Aller légèrement après 0 pour éviter frame noire
        tempVideo.currentTime = Math.min(0.1, tempVideo.duration || 0.1);
      } catch {
        // ignore
      }
    };
    const handleSeeked = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = tempVideo.videoWidth || 640;
        canvas.height = tempVideo.videoHeight || 360;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
          if (!revoked) setGeneratedPoster(dataUrl);
        }
      } catch {
        // ignore
      }
    };
    tempVideo.addEventListener('loadedmetadata', handleLoaded);
    tempVideo.addEventListener('seeked', handleSeeked);
    // Déclenche le chargement
    tempVideo.load();

    return () => {
      revoked = true;
      tempVideo.removeEventListener('loadedmetadata', handleLoaded);
      tempVideo.removeEventListener('seeked', handleSeeked);
    };
  }, [isTouchDevice, src]);

  React.useEffect(() => {
    if (isTouchDevice) return; // mobile: pas d'autoplay ici
    const video = videoRef.current;
    if (!video) return;
    if (hovered) {
      video.currentTime = 0;
      video.play().catch(() => { });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [hovered, isTouchDevice]);

  if (isTouchDevice || !src) {
    // Sur mobile/tactile ou si pas de vidéo: afficher l'image générée (ou poster fourni), sinon fond noir
    const resolvedPoster = generatedPoster || poster;
    return (
      <div className="absolute inset-0 w-full h-full" tabIndex={-1} style={{ zIndex: 1 }}>
        {resolvedPoster ? (
          <img
            src={resolvedPoster}
            alt={title}
            className="object-cover w-full h-full will-change-transform"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'translateZ(0)' }}
          />
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center" aria-label={title}>
            <div className="text-[#d4af37]/30 text-xs uppercase tracking-wide">{src ? 'Video' : 'Image'}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={-1}
      style={{ zIndex: 1 }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="metadata"
        className={`object-cover w-full h-full transition-all duration-700 group-hover:scale-105 will-change-transform`}
        style={{
          transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
        title={title}
      />
    </div>
  );
};

export default VideoPreview;
