'use strict';

module.exports = function($http) {
	var _storage = window.localStorage,
		_posts = !!_storage.getItem('posts') ? JSON.parse(_storage.getItem('posts')) : [];

	this.createNewPost = function(data) {
		$http.post(
			'https://jsonplaceholder.typicode.com/posts',
			data).then(function successCallback(response) {
				_posts.push(data);
				_storage.setItem('posts', JSON.stringify(_posts));
		}, function errorCallback(response) {
			console.log(response);
		});
	};

	this.getAllPosts = function() {
		return _posts;
	};
};