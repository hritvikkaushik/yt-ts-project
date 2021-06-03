import axios from "axios";

const YTSearch = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  //   baseURL: "https://6554d914-d1c9-4945-94e7-702a85605e86.mock.pstmn.io",
  params: {
    part: "snippet",
    key: "AIzaSyBNRM91uZP0G9M215rFamRnyfMSUGlejkc",
    // maxResults: 10,
  },
});

export default YTSearch;
