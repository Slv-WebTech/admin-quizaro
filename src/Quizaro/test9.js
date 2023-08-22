import React, { useEffect, useState, useRef } from "react";
import { getData } from "./FetchNodeServices";
import ReactPlayer from "react-player";
import { encrypt, decrypt } from "n-krypta";

const secretKey = "myvideo";

const VIDEO_PATH = encrypt("https://drive.google.com/uc?id=1KCIx84YQZvgqH4_fA-9L-OrbcCANBsmc", secretKey);
console.log("link");
console.log(VIDEO_PATH);
const MVIDEO_PATH = decrypt(VIDEO_PATH, secretKey);
console.log("link");
console.log(MVIDEO_PATH);

function PlayerComponent() {
  const playerRef = useRef(null);

  const [list, setList] = useState([]);

  const fetchVideo = async () => {
    var result = await getData("videos/allvideos");
    // console.log(result);
    setList(result.result);
  };
  useEffect(function () {
    fetchVideo();
  }, []);
  const fillVideos = () => {
    return list.map((item) => {
      return <ReactPlayer ref={playerRef} url={item.url} controls={true} config={{ file: { attributes: { controlsList: "nodownload" } } }} />;
    });
  };

  return (
    <div>
      <ReactPlayer ref={playerRef} url={decrypt(VIDEO_PATH, secretKey)} controls={true} config={{ file: { attributes: { controlsList: "nodownload" } } }} />
      <iframe title="Test9" src="https://drive.google.com/file/d/1JOZBkMwOllSNg7ameXnAj1dlagusMeux/preview" width="500" height="350" allow="autoplay"></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hKB-YGF14SY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      {fillVideos()}
    </div>
  );
}
export default PlayerComponent;
