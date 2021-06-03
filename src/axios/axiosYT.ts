import axios from "axios";

const YTSearch = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: "AIzaSyBNRM91uZP0G9M215rFamRnyfMSUGlejkc",
  },
});

export default YTSearch;
