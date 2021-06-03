import { Box, HStack } from "@chakra-ui/layout";
import React, { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { searchItem } from "../../app/types";
import RelatedVideo from "./RelatedVideo";

const Recommendations: FC = () => {
  const relatedVideos = useAppSelector((state) => state.video.recommendations);

  let relatedVideoArray;

  if (relatedVideos) {
    relatedVideoArray = relatedVideos.data.items.map((item: searchItem) => (
      <RelatedVideo key={item.id.videoId} item={item} />
    ));

    return (
      <Box
        padding="10px"
        borderColor="blackAlpha.300"
        // boxShadow="lg"
        width="90vw"
        height="35vh"
        borderWidth="1px"
      >
        <h1>Related Videos</h1>
        <HStack spacing="20px">{relatedVideoArray}</HStack>
      </Box>
    );
  } else return <div></div>;
};

export default Recommendations;
