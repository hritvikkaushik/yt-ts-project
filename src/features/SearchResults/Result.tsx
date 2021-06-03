import { Box, HStack } from "@chakra-ui/layout";
// import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";
import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getRelated, selectVideo } from "../VideoAndRec/videoSlice";
import { searchItem } from "../../app/types";

type ResultProps = {
  id: string;
  item: searchItem;
};

const Result: FC<ResultProps> = (props) => {
  const videoDispatch = useAppDispatch();

  const selectVideoHandler = () => {
    console.log("1 selectVideoHandler", props.id);

    videoDispatch(getRelated(props.id));

    console.log("2");
    videoDispatch(selectVideo(props.id));
  };

  return (
    <Box h="120px" w="450px" bg="gray.200" overflow="hidden">
      <HStack>
        <img
          src={props.item.snippet.thumbnails.default.url}
          alt="video thumbnail"
          width="120px"
          height="90px"
        />

        <div>
          <h2 onClick={selectVideoHandler}>{props.item.snippet.title}</h2>
          <p style={{ textAlign: "left" }}>{props.item.snippet.description}</p>
        </div>
      </HStack>
    </Box>
  );
};

export default Result;
