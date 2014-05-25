'use strict';
 
app.controller('PostsCtrl', function ($scope, $location, Post){
  // $scope.posts = Post.get(); // retrieves posts from the DB with the Post $resource service
  if ($location.path() === '/') {
    $scope.posts = Post.all;
  }
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

  $scope.upVotePost = function (postId, upVoted) {
    if (upVoted) {
      Post.clearVote(postId, upVoted);
    } else {
      Post.upVote(postId);
    }
  };
   
  $scope.downVotePost = function (postId, downVoted) {
    if (downVoted) {
      Post.clearVote(postId, !downVoted);
    } else {
      Post.downVote(postId);
    }
  };
   
  $scope.upVoted = function (post) {
    return Post.upVoted(post);
  };
   
  $scope.downVoted = function (post) {
    return Post.downVoted(post);
  };
});