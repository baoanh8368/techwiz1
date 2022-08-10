var app = angular.module('main-App', ['ngRoute']);
app.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'views/home.html',
				controller: 'IndexController'
			}).
			when('/user', {
				templateUrl: 'views/user.html',
				controller: 'UserController'
			});
		
	}]);