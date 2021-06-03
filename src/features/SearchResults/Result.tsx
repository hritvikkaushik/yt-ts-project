import { Box, HStack } from "@chakra-ui/layout";
// import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";
import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getRelated, selectVideo } from "../VideoAndRec/videoSlice";
import { searchItem } from "../../app/types";
import styles from "./SearchResults.module.css";
import { moveToTop } from "../SearchBox/searchSlice";

type ResultProps = {
  id: string;
  item: searchItem;
};

const Result: FC<ResultProps> = (props) => {
  const dispatch = useAppDispatch();

  const selectVideoHandler = () => {
    console.log("1 selectVideoHandler", props.id);

    dispatch(getRelated(props.id));
    dispatch(moveToTop());
    console.log("2");
    dispatch(selectVideo(props.id));
  };

  return (
    <Box
      borderWidth="1px"
      borderColor="blackAlpha.300"
      boxShadow="md"
      bgColor="white"
      padding="10px"
      overflow="hidden"
      className={styles.VideoCard}
    >
      <HStack>
        <img
          src={props.item.snippet.thumbnails.default.url}
          alt="video thumbnail"
          width="200px"
          height="130px"
        />

        <div>
          <h2 style={{ fontWeight: "bold" }} onClick={selectVideoHandler}>
            {props.item.snippet.title}
          </h2>
          <p style={{ textAlign: "left" }}>{props.item.snippet.description}</p>
        </div>
      </HStack>
    </Box>
  );
};

export default Result;
