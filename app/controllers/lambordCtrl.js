"use strict";

app.controller("LambordCtrl", function($scope, $http){
    $http.get("../hwydata.json")
    .then((response) =>{
        console.log("log response", response.data);
        $scope.highwayName = response.data.highways[0].hwy1.name;
        $scope.highwayDescription = response.data.highways[0].hwy1.description;
        $scope.highwayImage = response.data.highways[0].hwy1.img;
    });

});
