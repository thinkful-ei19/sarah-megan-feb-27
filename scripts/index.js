
/*global api, store, VideoList $*/

// const API_KEY = 'AIzaSyCClYXh2mFYDkbX8OmiaZi7E2woFr9nfV8';

// const store = {
//   videos: []
// };

// TASK: Add the Youtube Search Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
// const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
// const fetchVideos = function(searchTerm, callback) {
//   const query = {
//     part : 'snippet',
//     key : API_KEY,
//     q : searchTerm,
//   };
//   $.getJSON(BASE_URL, query, callback);
//   console.log('fetchVideos working');
// };

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
// const decorateResponse = function(response) {
//   //console.log(response.items);
//   //store.videos = 
//   return response.items.map(item => {
//     return {
//       id: item.id.videoId, 
//       title: item.snippet.title, 
//       thumbnail: item.snippet.thumbnails.default.url};
//   });
//   // render();
// };

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
// const generateVideoItemHtml = function(video) {
//   return `<li>
//   <span>${video.id}</span>
//   <span>${video.title}</span>
//   <img src = '${video.thumbnail}' alt = 'search result 1'>
//   </li>`;
// };

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
// const addVideosToStore = function(videos) {

//   store.videos = videos;
  

// };


// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
// const render = function() {
//   const videoElements = store.videos.map(video => generateVideoItemHtml(video));
//   $('.results').html(videoElements);
// };

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
// const handleFormSubmit = function() {
//   $('form').submit(event=>{
//     event.preventDefault();
//     const searchInput = $('#search-term').val();
//     $('#search-term').val('');
//     fetchVideos(searchInput, response =>{
//     //   // response => { const videos = decorateResponse(response); 
//     //   //   console.log(videos);
//     //   //   // addVideosToStore(videos); render();}
//       let decorated = decorateResponse(response);
//       console.log(decorated);
//       addVideosToStore(decorated);
//       render();
//     });
//   });
// };


$(VideoList.handleFormSubmit());
