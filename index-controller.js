var app = angular.module('myApp', ['ngMaterial', "ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "partial/home/home.html"
        })
        .when("/about", {
            templateUrl: "partial/about/about.html"
        })
        .otherwise({
            templateUrl: "partial/home/home.html"
        })
});

app.controller("indexController", function ($scope, $mdBottomSheet) {
    $scope.showContact = function () {
        $mdBottomSheet.show({
            templateUrl: "partial/contact/contact.html",
            controller: "contactController"
        });
    }
});