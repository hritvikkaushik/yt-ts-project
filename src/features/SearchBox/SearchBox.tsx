import { IconButton } from "@chakra-ui/button";
import { SearchIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import React, { FC, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getSearchResults } from "./searchSlice";

const SearchBox: FC = () => {
  const dispatch = useAppDispatch();

  const [text, setText] = useState("");

  const onSearch = () => {
    dispatch(getSearchResults(text));
  };

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <HStack>
      <Input
        placeholder="Enter search query"
        w="50vw"
        value={text}
        onChange={changeHandler}
        onKeyPress={handleKeyPress}
      />
      <IconButton
        aria-label="Search"
        icon={<SearchIcon />}
        type="submit"
        onClick={onSearch}
      />
    </HStack>
  );
};

export default SearchBox;
