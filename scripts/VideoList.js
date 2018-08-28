'use strict';

const videoList = (function(){
  const generateVideoItemHtml = function(video) {
    let generatedHtml = `<li class="${video.id}">
                        <h3>${video.title}</h3>
                        <img src="${video.thumbnail}">
                        </li>`;

    return generatedHtml; 
  };
  const render = function() {
    console.log('render');
    let htmlVideosArray = store.videos.map(item => generateVideoItemHtml(item));
    $('.results').html(htmlVideosArray.join('')); 
  };

  const decorateResponse = function(response) {
    return response.items.map(obj => {
      console.log(obj.snippet.thumbnails.default.url);
      return {
        id: obj.id.videoId,
        title: obj.snippet.title,
        thumbnail: obj.snippet.thumbnails.default.url
      };
    });
  };

  const handleFormSubmit = function() {
    $('#search-form').submit(function(event) {
      event.preventDefault();
      let searchValue = $(this).find('#search-term').val();
      $(this).find('#search-term').val('');
      API.fetchVideos(searchValue, response => {
      
        const decoratedVideos = decorateResponse(response);
        store.addVideosToStore(decoratedVideos);
        render();
        
      });
    });
  };

  return {
    generateVideoItemHtml,
    render,
    decorateResponse,
    handleFormSubmit,
  };
}());