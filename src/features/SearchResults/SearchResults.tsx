import { IconButton } from "@chakra-ui/button";
import { CloseIcon } from "@chakra-ui/icons";
import { VStack } from "@chakra-ui/layout";

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
