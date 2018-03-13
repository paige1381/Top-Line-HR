const app = angular.module('TopLineHr', ['ngRoute']);

app.controller('MenuController', ['$http', function($http) {
  this.mobileMenu = false;
}]);

app.controller('HomeController', ['$http', function($http) {

}]);

app.controller('EventsController', ['$http', function($http) {

}]);

app.controller('EventController', ['$http', function($http) {

}]);

app.controller('BlogController', ['$http', function($http) {

}]);

app.controller('BlogPostController', ['$http', function($http) {

}]);

app.controller('ContactController', ['$http', function($http) {

}]);

app.controller('AboutController', ['$http', function($http) {

}]);

app.controller('CoachingController', ['$http', function($http) {

}]);

app.controller('TeamsController', ['$http', function($http) {

}]);

app.controller('SalesController', ['$http', function($http) {

}]);

app.controller('HRController', ['$http', function($http) {

}]);

app.controller('CreateController', ['$http', function($http) {

}]);

app.controller('BlogFormController', ['$http', function($http) {

}]);

app.controller('EventFormController', ['$http', function($http) {

}]);

app.controller('AdminFormController', ['$http', function($http) {

}]);

app.controller('CredentialsController', ['$http', function($http) {

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

  $routeProvider.when('/event', {
    templateUrl: 'event.html',
    controller: 'EventController',
    controllerAs: 'ctrl'
  });


  $routeProvider.when('/blogPost', {
    templateUrl: 'blogPost.html',
    controller: 'BlogPostController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/blog', {
    templateUrl: 'blog.html',
    controller: 'BlogController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/contact', {
    templateUrl: 'contact.html',
    controller: 'ContactController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/about', {
    templateUrl: 'about.html',
    controller: 'AboutController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/coaching', {
    templateUrl: 'coaching.html',
    controller: 'CoachingController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/teams', {
    templateUrl: 'teams.html',
    controller: 'TeamsController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/sales', {
    templateUrl: 'sales.html',
    controller: 'SalesController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/hr', {
    templateUrl: 'hr.html',
    controller: 'HRController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/create', {
    templateUrl: 'create.html',
    controller: 'CreateController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/blogForm', {
    templateUrl: 'blogForm.html',
    controller: 'BlogFormController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/eventForm', {
    templateUrl: 'eventForm.html',
    controller: 'EventFormController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/adminForm', {
    templateUrl: 'adminForm.html',
    controller: 'AdminFormController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/credentials', {
    templateUrl: 'credentials.html',
    controller: 'CredentialsController',
    controllerAs: 'ctrl'
  });

  $routeProvider.otherwise({
    redirectTo: '/home'
  })

}])
