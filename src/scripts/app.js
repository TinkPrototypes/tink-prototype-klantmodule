'use strict';

/**
 * @ngdoc overview
 * @name tinkApp
 * @description
 * # tinkApp
 *
 * Main module of the application.
 */
 angular
 .module('tinkApp', [
   'ngAnimate',
   'ngCookies',
   'ngResource',
   'ui.router',
   'ngMessages',
   'ngSanitize',
   'ngTouch',
   'tink.navigation',
   'tink.tinkApi'
   ])
 .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider
    .state('main', {
      url: '/main',
      redirectTo: 'main.uno',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
      .state('main.uno', {
        url: '/main-uno',
        templateUrl: 'views/subviews/uno.html'
      })
      .state('main.due', {
        url: '/main-due',
        templateUrl: 'views/subviews/due.html'
      })

    .state('secondary', {
      url: '/secondary',
      redirectTo: 'secondary.uno',
      templateUrl: 'views/secondary.html',
      controller: 'SecondaryCtrl'
    })
      .state('secondary.uno', {
        url: '/secondary-uno',
        templateUrl: 'views/subviews/uno.html'
      })
      .state('secondary.due', {
        url: '/secondary-due',
        templateUrl: 'views/subviews/due.html'
      });
    })
 .run(['$rootScope', '$state', function($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params);
      }
    });
}]);
