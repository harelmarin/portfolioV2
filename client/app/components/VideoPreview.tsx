import React from 'react';
import Image from 'next/image';

interface VideoPreviewProps {
  src: string;
  title: string;
  poster?: string; 
  alt?: string;
}

const VideoPreview = ({ src, title, poster, alt }: VideoPreviewProps) => {
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
        tempVideo.currentTime = Math.min(0.1, tempVideo.duration || 0.1);
      } catch {
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
      }
    };
    tempVideo.addEventListener('loadedmetadata', handleLoaded);
    tempVideo.addEventListener('seeked', handleSeeked);

    tempVideo.load();

    return () => {
      revoked = true;
      tempVideo.removeEventListener('loadedmetadata', handleLoaded);
      tempVideo.removeEventListener('seeked', handleSeeked);
    };
  }, [isTouchDevice, src]);

  React.useEffect(() => {
    if (isTouchDevice) return; 
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
    const resolvedPoster = generatedPoster || poster;
    const resolvedAlt = alt || `Aperçu du projet ${title}`;
    const isLogo = resolvedPoster?.toLowerCase().includes('logo');
    return (
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {resolvedPoster ? (
          <Image
            src={resolvedPoster}
            alt={resolvedAlt}
            fill
            className={`${isLogo ? 'object-contain p-4 md:p-6' : 'object-cover'} will-change-transform`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center" aria-label={`Média pour ${title}`}>
            <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">{src ? 'Video Preview' : 'Image'}</div>
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
