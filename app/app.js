"use strict";

let app = angular.module("RoadApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/home.html"
    })
    .when("/oceanHwy", {
        templateUrl: "partials/highways.html",
        controller: "OceanCtrl"
    })
    .when("/lambordHwy", {
        templateUrl: "partials/highways.html",
        controller: "LambordCtrl"

    })

    .otherwise("/");


});
