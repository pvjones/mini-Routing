angular.module('miniRouting', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'homeCtrl',
        templateUrl: 'js/home/homeTmpl.html'
      })
      .state('products', {
        url: '/products/:id',
        controller: 'productsCtrl',
        templateUrl: 'js/products/productsTmpl.html'
      })
      .state('settings', {
        url: '/settings/',
        controller: 'settingsCtrl',
        templateUrl: 'js/settings/settingsTmpl.html'
      });

    $urlRouterProvider
      .otherwise('/');

  });