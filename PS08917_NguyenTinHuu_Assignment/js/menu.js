app.controller('menucontroller', function($scope,$http){
    $http.get('db/Subjects.js').then(function(response){
    console.log(  $scope.Subjects = response.data)
    });

});