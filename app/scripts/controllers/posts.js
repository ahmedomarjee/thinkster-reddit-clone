'use strict';
 
app.controller('PostsCtrl', function ($scope, $location, Post){
  // $scope.posts = Post.get(); // retrieves posts from the DB with the Post $resource service
  $scope.posts = Post.all;
  $scope.post = {url: 'http://', title: ''};

  /* old implementation

  $scope.deletePost = function(postId) {
    Post.delete({id: postId}, function() {
      delete $scope.posts[postId];
    });
  };

  */

  $scope.deletePost = function(postId) {
    Post.delete(postId);
  };
});