const app = angular.module('TopLineHr', ['ngRoute']);

app.controller('MenuController', ['$http', function($http) {
  this.mobileMenu = false;
}]);

app.controller('HomeController', ['$http', function($http) {

}]);

app.controller('EventsController', ['$http', function($http) {

}]);

app.controller('BlogController', ['$http', function($http) {

}]);



app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({ enabled: true });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/events', {
    templateUrl: 'events.html',
    controller: 'EventsController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/blog', {
    templateUrl: 'blog.html',
    controller: 'BlogController',
    controllerAs: 'ctrl'
  });



  $routeProvider.otherwise({
    redirectTo: '/home'
  })

}])
