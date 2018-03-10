const app = angular.module('TopLineHr', ['ngRoute']);

app.controller('MenuController', ['$http', function($http) {
  this.mobileMenu = false;
}]);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({ enabled: true });

  // $routeProvider.when('/home', {
  //   templateUrl: 'home.html',
  //   controller: 'HomeController',
  //   controllerAs: 'ctrl'
  // });
  //
  // $routeProvider.otherwise({
  //   redirectTo: '/home'
  // })

}])
