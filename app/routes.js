var app = angular.module('main-App', ['ngRoute']);
app.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			}).
			when('/form', {
				templateUrl: 'views/form.html',
				controller: 'FormController'
			}).
			when('/form3', {
				templateUrl: 'views/form3.html',
				controller: 'Form3Controller'
			}).
			when('/form2', {
				templateUrl: 'views/form2.html',
				controller: 'Form2Controller'
			});
		
	}]);