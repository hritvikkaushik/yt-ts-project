import React, { FC } from "react";
import YouTube from "react-youtube";
import { useAppSelector } from "../../app/hooks";

const VideoPlayer: FC = () => {
  const videoId = useAppSelector((state) => state.video.videoId);

  const opts = {
    height: "480px",
    width: "800px",
  };

  if (videoId) return <YouTube opts={opts} videoId={videoId} />;
  else return <div></div>;
};

export default VideoPlayer;
