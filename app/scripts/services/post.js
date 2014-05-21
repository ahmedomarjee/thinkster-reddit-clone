'use strict';

app.factory('Post', function($resource){
  return $resource("https://blinding-fire-5206.firebaseIO.com/posts/:id.json");
});