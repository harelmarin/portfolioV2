'use client';
import React from 'react';

interface VideoPreviewProps {
  src: string;
  title: string;
}

const VideoPreview = ({ src, title }: VideoPreviewProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = React.useState(false);

  React.useEffect(() => {
    if (videoRef.current) {
      if (hovered) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [hovered]);

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
        className={`object-cover w-full h-full rounded-3xl transition-all duration-500 filter brightness-95 contrast-110 ${
          hovered ? 'brightness-100 saturate-125 shadow-xl' : ''
        }`}
        title={title}
      />
    </div>
  );
};

export default VideoPreview;
