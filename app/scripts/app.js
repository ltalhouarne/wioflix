'use strict';

/**
 * @ngdoc overview
 * @name wioflixApp
 * @description
 * # wioflixApp
 *
 * Main module of the application.
 */
angular
  .module('wioflixApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
