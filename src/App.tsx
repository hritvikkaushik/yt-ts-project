import { VStack } from "@chakra-ui/layout";
import React from "react";
import "./App.css";
import { useAppSelector } from "./app/hooks";
import SearchBox from "./features/SearchBox/SearchBox";
import SearchResults from "./features/SearchResults/SearchResults";
import Recommendations from "./features/VideoAndRec/Recommendations";
import VideoPlayer from "./features/VideoAndRec/Video";

const App: React.FC = () => {
  const atTop = useAppSelector((state) => state.search.atTop);

  const style = atTop
    ? { transform: "translateY(0)" }
    : { transform: "translateY(45vh)" };

  return (
    <div className="App">
      <SearchResults />
      <VStack>
        <div style={style}>
          <SearchBox />
        </div>
        <VideoPlayer />
        <Recommendations />
      </VStack>
    </div>
  );
};

export default App;
