import { IconButton } from "@chakra-ui/button";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, VStack } from "@chakra-ui/layout";
// import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchItem } from "../../app/types";
import { closeResults } from "../SearchBox/searchBoxSlice";
import Result from "./Result";

const SearchResults: FC = () => {
  //   const results = [Result, Result, Result];
  const isOpen = useAppSelector((state) => state.searchBox.open);

  const results = useAppSelector((state) => state.searchBox.response);

  let resultArray = null;

  if (results) {
    resultArray = results.data.items.map((item: searchItem) => (
      <Result item={item} id={item.id.videoId} />
    ));
  }

  console.log("3", results);

  let transformation: string = isOpen
    ? "translateX(60vw)"
    : "translateX(200vw)";

  const dispatch = useAppDispatch();
  const closeResultsHandler = () => {
    dispatch(closeResults());
  };

  return (
    <Box
      h="90vh"
      w="40vw"
      bg="gray.100"
      transform={transformation}
      zIndex="500"
      position="absolute"
    >
      <VStack paddingTop="15px" spacing="20px">
        <IconButton
          aria-label="close search"
          icon={<CloseIcon />}
          alignSelf="flex-end"
          zIndex="600"
          position="absolute"
          onClick={closeResultsHandler}
        />
        {resultArray}
      </VStack>
    </Box>
  );
};

export default SearchResults;
