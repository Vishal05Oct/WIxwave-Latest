import React from "react";

const VideoSection = () => {
  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

  return (
    <div className="container mx-auto flex items-center justify-center  px-4">
      <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <video
          src={videoUrl}
          className="w-full h-full object-cover"
          autoPlay
          controls
          muted
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
};

export default VideoSection;
