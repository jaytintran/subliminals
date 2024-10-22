// src/App.js
import React from "react";
import VideoGrid from "./components/VideoGrid";
import "./App.css";

function App() {
  const videoUrls = [
    "https://www.youtube.com/embed/TsT8Fuuz8JM",
    "https://www.youtube.com/embed/3Sz-olqFgE0",
    "https://www.youtube.com/embed/MRQi_8QlBOA",
    "https://www.youtube.com/embed/GDaGRsVSsng?si=ig3ob6ZsX9hb-0G4",
    "https://www.youtube.com/embed/CORCIUXynaY?si=SDmVcIMOlcp7QukJ",
    "https://www.youtube.com/embed/kwwz88Zcdcc?si=H0ym2fBtWjP2IU4s",
    "https://www.youtube.com/embed/gbTAwwz6mz4?si=5BD0oV16WuLnuY_6",
  ];

  return (
    <div className="App">
      <h1>Subliminals</h1>
      <VideoGrid videos={videoUrls} />
    </div>
  );
}

export default App;
