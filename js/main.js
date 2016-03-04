
/**
 * Main AngularJS Web Application
 */
var App = angular.module('myApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
App.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/ratios_and_proportional_relationships", {templateUrl: "partials/ratios_and_proportional_relationships.html", controller: "PageCtrl"})
    .when("/number_system", {templateUrl: "partials/number_system.html", controller: "PageCtrl"})
    .when("/expressions_and_equations", {templateUrl: "partials/expressions_and_equations.html", controller: "PageCtrl"})
    .when("/geometry", {templateUrl: "partials/geometry.html", controller: "PageCtrl"})
    .when("/statistics_and_probability", {templateUrl: "partials/statistics_and_probability.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls Pages
 */
App.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

});

App.controller('StandardsCtrl', function($scope, $http) {
  console.log("Standards Controller reporting for duty.");
  $http.get('standards/standards.json')
      .then(function(res){
        $scope.standards = res.data;
      });
});


