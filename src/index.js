'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module(
    'hrsBlog',
    ['ngRoute'],
    function($routeProvider) {
        $routeProvider.when('/', {
        	controller: 'homeController',
        	templateUrl: 'home.html'
        });
        $routeProvider.when('/post', {
        	controller: 'postController',
        	templateUrl: 'post.html'
        });
        $routeProvider.otherwise({redirectTo: '/'});
    }
);

app.service('Posts', require('./post_service.js'));

app.controller('homeController', require('./home.js'));
app.controller('postController', require('./post.js'));