'use strict';
 
app.controller('PostsCtrl', function ($scope, $location, Post){
  // $scope.posts = Post.get(); // retrieves posts from the DB with the Post $resource service
  $scope.posts = Post.all;
  $scope.post = {url: 'http://', title: ''};

  /* old implementation

  $scope.submitPost = function() {
    Post.save($scope.post, function (ref) {
      $scope.posts[ref.name] = $scope.post;
      $scope.post = {url: 'http://', title: ''};
    });
  };

  */

  $scope.submitPost = function() {
    Post.create($scope.post).then(function(ref){
      // $scope.post = {url: 'http://', title: ''};
      $location.path('/posts/' + ref.name());
    });
  };

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