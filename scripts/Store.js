'use strict';

const store = (function(){
  let videos = [];
  const addVideosToStore = function(videos) {
    this.videos = videos;
  };
  return {
    videos,
    addVideosToStore
  };
}());