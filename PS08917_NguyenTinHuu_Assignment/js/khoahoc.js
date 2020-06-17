app.controller('khoahoccontroller', function($scope,$http){
    $scope.Subjects=[];
    $http.get('db/Subjects.js').then(function(response){
    console.log(  $scope.Subjects = response.data)
    $scope.begin=0;
    $scope.pageCount = Math.ceil($scope.Subjects.length/6);
    $scope.first = function(){
        $scope.begin=0
    };
    $scope.prev =function(){
        if ($scope.begin>0) {
            $scope.begin -= 6;
        }
    };
    $scope.next =function(){
          if ($scope.begin < ($scope.pageCount-1)*6) {
              $scope.begin += 6;
          } 
    };
    $scope.last = function(){
      $scope.begin = ($scope.pageCount-1)*6;
    }
    })
});