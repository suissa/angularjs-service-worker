'use strict';

angular.module('myApp.serviceWorker', [])
.service('serviceWorkerService', ['$http',
  function($http) {
    this.checkServiceWorker = function () {
      if ('serviceWorker' in navigator) {
        //navigator.serviceWorker.register('/service-worker.js');
        return true;
      }
      return false;
    };

    this.registerWorker = function (worker) {
      console.log(worker);
      if(this.checkServiceWorker()){
        navigator.serviceWorker.register(worker);
      }
    }
  }
]);