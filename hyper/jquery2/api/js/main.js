$(document).ready(function() {

  // Function that is called once the data is returned
  function processImages(data) {
    // The variable "data" represents the information we got back.
    console.log("yay! I got some data!");
    console.log(data);
  }

  // Setup the url for the API
  var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&format=json&tags=hyperisland";

  // Tell jQuery to fetch the data.
  // When it returns the data, it will call our `processImages` function 
  $.getJSON(url, processImages);
  
});


/*

Your task:

Modify the processImages function so that you loop over
each image, and append it to the page. 

*/