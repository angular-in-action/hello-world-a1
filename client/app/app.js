angular.module('app').directive('app', function () {
	return {
		templateUrl: 'client/app/app.html',
		controller: AppController,
		controllerAs: 'app',
		bindToController: true
	}
});

function AppController () {
	
}

