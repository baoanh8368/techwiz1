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
			when('/basic', {
				templateUrl: 'views/basic.html',
				controller: 'BasicController'
			}).
			when('/form3', {
				templateUrl: 'views/form3.html',
				controller: 'Form3Controller'
			}).
			when('/dosage', {
				templateUrl: 'views/dosage.html',
				controller: 'DosageController'
			}).
			when('/schedule', {
				templateUrl: 'views/schedule.html',
				controller: 'ScheduleController'
			}).
			when('/user', {
				templateUrl: 'views/user.html',
				controller: 'UserController'
			}).
			when('/BMI', {
				templateUrl: 'views/BMI.html',
				controller: 'BMIController'
			});
		
	}]);