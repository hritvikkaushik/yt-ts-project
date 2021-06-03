import { VStack } from "@chakra-ui/layout";
import React from "react";
import "./App.css";
import SearchBox from "./features/SearchBox/SearchBox";
import SearchResults from "./features/SearchResults/SearchResults";
import Recommendations from "./features/VideoAndRec/Recommendations";
import VideoPlayer from "./features/VideoAndRec/Video";

const App: React.FC = () => {
  return (
    <div className="App">
      <SearchResults />
      <VStack>
        <SearchBox />
        <VideoPlayer />
        <Recommendations />
      </VStack>
    </div>
  );
};

export default App;
