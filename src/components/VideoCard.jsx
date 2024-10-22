// src/components/VideoCard.js
import React from "react";

const VideoCard = ({ url }) => {
  const embedUrl = url.replace("watch?v=", "embed/"); // Embed URL conversion
  return (
    <div className="video-card">
      <iframe
        width="100%"
        height="300"
        src={embedUrl}
        title="Subliminals"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
