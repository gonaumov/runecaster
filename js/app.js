'use strict';

/* App Module */

var runecasterApp = angular.module('runecasterApp', [
  'ngRoute',
  'runecasterControllers',
  'runecasterFilters'
]);

runecasterApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/spreads', {
        templateUrl: 'partials/spreads.html',
        controller: 'SpreadListCtrl'
      }).
      when('/result/:spreadName', {
        templateUrl: 'partials/result.html',
        controller: 'ResultCtrl'
      }).
      otherwise({
        redirectTo: '/spreads'
      });
  }]);
