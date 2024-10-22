// src/components/VideoGrid.js
import React from "react";
import VideoCard from "./VideoCard";

const VideoGrid = ({ videos }) => {
  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <VideoCard key={index} url={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
