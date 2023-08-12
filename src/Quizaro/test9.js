import ReactPlayer from "react-player";
import React, { useRef } from "react";
const VIDEO_PATH = "https://drive.google.com/uc?id=1KCIx84YQZvgqH4_fA-9L-OrbcCANBsmc";
function PlayerComponent() {
  const playerRef = useRef(null);
  return (
    <div>
      <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} config={{ file: { attributes: { controlsList: "nodownload" } } }} />
      <iframe title="Test9" src="https://drive.google.com/file/d/1JOZBkMwOllSNg7ameXnAj1dlagusMeux/preview" width="500" height="350" allow="autoplay"></iframe>
    </div>
  );
}
export default PlayerComponent;
