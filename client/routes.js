angular.module('app').config(ConfigureRoute);

function ConfigureRoute ($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);
	
	$routeProvider
	.when('/dashboard', {
		controller: 'Dashboard as dashboard',
		templateUrl: 'client/dashboard/dashboard.html'
	})
	.when('/manage', {
		controller: 'Manage as manage',
		templateUrl: 'client/manage/manage.html'
	})
	.otherwise('/dashboard');
}