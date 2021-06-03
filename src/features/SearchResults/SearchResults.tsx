import { IconButton } from "@chakra-ui/button";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, VStack } from "@chakra-ui/layout";

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchItem } from "../../app/types";
import { closeResults } from "../SearchBox/searchSlice";
import Result from "./Result";

const SearchResults: FC = () => {
  const openValue = useAppSelector((state) => state.search.open);

  const results = useAppSelector((state) => state.search.response);

  let resultArray = null;

  if (results) {
    resultArray = results.data.items.map((item: searchItem) => (
      <Result item={item} id={item.id.videoId} />
    ));
  }

  const { isOpen, onClose } = useDisclosure({
    defaultIsOpen: false,
    isOpen: openValue,
  });

  console.log("3", results);

  // let transformation: string = isOpen
  //   ? "translateX(60vw)"
  //   : "translateX(200vw)";

  const dispatch = useAppDispatch();
  const closeResultsHandler = () => {
    dispatch(closeResults());
  };

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="lg">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <IconButton
            aria-label="close search"
            icon={<CloseIcon />}
            boxShadow="sm"
            onClick={closeResultsHandler}
            marginRight="20px"
          />
          Search Results
        </DrawerHeader>
        <DrawerBody>
          <VStack spacing="20px">{resultArray}</VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchResults;

/*
<Box
      h="95vh"
      w="40vw"
      bg="gray.200"
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
          boxShadow="sm"
          position="absolute"
          onClick={closeResultsHandler}
        />
        {resultArray}
      </VStack>
    </Box>
*/
