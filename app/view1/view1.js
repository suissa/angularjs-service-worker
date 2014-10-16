'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'serviceWorkerService', function($scope, serviceWorkerService) {
	var status = serviceWorkerService.checkServiceWorker();
	$scope.serviceWorkerStatus = status;
	console.log('status', status);

	var worker = 'components/service-worker/service-worker.js';
	serviceWorkerService.registerWorker(worker);
}]);