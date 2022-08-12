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
			when('/workout', {
				templateUrl: 'views/workout.html',
				controller: 'WorkoutController'
			}).
			when('/BMI', {
				templateUrl: 'views/BMI.html',
				controller: 'BMIController'
			}). 
			when('/thankyou', {
				templateUrl: 'views/thankyou.html',
				controller: 'TYController'
			}). 
			when('/diet', {
				templateUrl: 'views/diet.html',
				controller: 'DietController'
			}). 
			when('/medicine', {
				templateUrl: 'views/medicine.html',
				controller: 'MedicineController'
			}). 
			when('/doctor', {
				templateUrl: 'views/doctor.html',
				controller: 'DoctorController'
			}). 
			when('/feedback', {
				templateUrl: 'views/feedback.html',
				controller: 'FeedbackController'
			});
		
	}]);