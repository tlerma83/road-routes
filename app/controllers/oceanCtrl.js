"use strict";

app.controller("OceanCtrl", function($scope, $http){
    $http.get("../hwydata.json")
    .then((response) =>{
        console.log("log response", response.data);
        $scope.highwayName = response.data.highways[0].hwy2.name;
        $scope.highwayDescription = response.data.highways[0].hwy2.description;
        $scope.highwayImage = response.data.highways[0].hwy2.img;
    });

});
