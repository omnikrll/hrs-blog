'use strict';

module.exports = function(Posts, $scope) {
	$scope.posts = Posts.getAllPosts();

	$scope.submit = function() {
		var data = {
			date: new Date(),
			title: $scope.title,
			content: $scope.content
		};

		Posts.createNewPost(data);

		// there should be an error handler here

		$scope.title = '';
		$scope.content = '';
	};
};