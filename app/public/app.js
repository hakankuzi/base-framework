var app = angular.module('app', ['ngRoute', 'IndexCtrl', 'MainPageCtrl', 'MockDataService']);


// Environments -----------------------------------------
app.run(function($rootScope, $location, $route, $window) {


    $rootScope.apis = {};
    $rootScope.apis.createSession = "/api/createSession";
    $rootScope.apis.generateToken = "/api/generateToken";

    $rootScope.$on("$locationChangeStart", function(event, next, current) {});


    // Change Route and Check Authorize -------------------------------------
    $rootScope.$on('$routeChangeStart', function(event, next, current) {});
    // -----------------------------------------------------------------
});



// Routing -------------------------------------------------------------
app.config(function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '../views/mainpage.html',
            controller: 'MainPageController',
            controllerAs: 'mainpage',
        })
        .otherwise("/");


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});