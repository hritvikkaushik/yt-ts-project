import { Box, HStack } from "@chakra-ui/layout";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchItem } from "../../app/types";
import { getRelated, selectVideo } from "./videoSlice";

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
    <Box width="20vw" height="15vh">
      <img
        alt="related video thumbnail"
        src={props.item.snippet.thumbnails.default.url}
        width="100%"
      />
      <p onClick={clickHandler}>{props.item.snippet.title}</p>
      {/* <p>{props.item.snippet.description}</p> */}
    </Box>
  );
};

const Recommendations: FC = () => {
  const relatedVideos = useAppSelector((state) => state.video.recommendations);

  let relatedVideoArray;

  if (relatedVideos) {
    relatedVideoArray = relatedVideos.data.items.map((item: searchItem) => (
      <RelatedVideo key={item.id.videoId} item={item} />
    ));
  }

  return (
    <Box bg="gray.200" width="80vw" height="35vh">
      <HStack spacing="20px">{relatedVideoArray}</HStack>
    </Box>
  );
};

export default Recommendations;
