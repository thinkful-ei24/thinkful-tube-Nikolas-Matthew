'use strict';

const API = (function(){
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const API_KEY = 'AIzaSyDsr7FpwwmHP-LYRnuYhRJ8HZ0eEjhWTlc';
  const our_url = BASE_URL + '?part=snippet&key=' +  API_KEY + '&q=';


  const fetchVideos = function(searchTerm, callback) {
    const searchUrl = our_url + searchTerm;
    $.getJSON(searchUrl, (response) => {
      callback(response);
    });
  
  };
  return {
    fetchVideos,
  };

}());