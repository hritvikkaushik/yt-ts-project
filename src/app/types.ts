export type searchItem = {
  // kind: "youtube#searchResult"
  // etag: string,
  id: {
    // kind: "youtube#video",
    videoId: string;
  };
  snippet: {
    // publishedAt: string,
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: 120;
        height: 90;
      };
      medium: {
        url: string;
        width: 320;
        height: 180;
      };
      high: {
        url: string;
        width: 480;
        height: 360;
      };
    };
    channelTitle: string;
    // liveBroadcastContent: "none",
    publishTime: string;
  };
};
