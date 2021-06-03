import React, { FC } from "react";
import YouTube from "react-youtube";
import { useAppSelector } from "../../app/hooks";

const VideoPlayer: FC = () => {
  const videoId = useAppSelector((state) => state.video.videoId);

  return <YouTube videoId={videoId} />;
};

export default VideoPlayer;
