
/**
 * Main AngularJS Web Application
 */
var app = angular.module('webApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
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
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});