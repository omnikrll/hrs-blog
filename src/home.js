'use strict';

module.exports = function(Posts, $scope) {
	$scope.posts = Posts.getAllPosts();
};