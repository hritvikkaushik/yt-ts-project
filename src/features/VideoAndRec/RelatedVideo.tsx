import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { searchItem } from "../../app/types";
import { selectVideo, getRelated } from "./videoSlice";
import styles from "./recommendations.module.css";

interface RelatedVideoProps {
  key: string;
  item: searchItem;
}

const RelatedVideo: FC<RelatedVideoProps> = (props) => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(selectVideo(props.item.id.videoId));
    dispatch(getRelated(props.item.id.videoId));
  };

  return (
    <Box
      width="20vw"
      height="290px"
      onClick={clickHandler}
      borderColor="blackAlpha.300"
      borderWidth="thin"
      boxShadow="md"
      padding="5px"
      className={styles.VideoCard}
    >
      <img
        alt="related video thumbnail"
        src={props.item.snippet.thumbnails.default.url}
        width="100%"
      />
      <p>{props.item.snippet.title}</p>
    </Box>
  );
};

export default RelatedVideo;
