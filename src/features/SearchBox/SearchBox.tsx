import { IconButton } from "@chakra-ui/button";
import { SearchIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSearchResults, reduceWidth } from "./searchBoxSlice";

// import axiosYT from "../../axios/axiosYT";

const SearchBox: FC = () => {
  const isWidthReduced = useAppSelector(
    (state) => state.searchBox.reducedWidth
  );
  const dispatch = useAppDispatch();

  const [text, setText] = useState("");

  const onSearch = () => {
    dispatch(reduceWidth());
    dispatch(getSearchResults(text));
  };

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <>
      <Input
        placeholder="Enter search query"
        w={isWidthReduced ? 200 : 400}
        value={text}
        onChange={changeHandler}
      />
      <IconButton
        aria-label="Search"
        icon={<SearchIcon />}
        type="submit"
        onClick={onSearch}
      />
    </>
  );
};

export default SearchBox;
