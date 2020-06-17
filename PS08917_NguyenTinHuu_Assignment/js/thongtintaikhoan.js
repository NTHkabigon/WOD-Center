app.controller('thongtincontroller', function ($rootScope,$scope, $http) {
    
        $scope.save=function(){
          console.log($rootScope.indexStudent)
          console.log($scope.user)
          $rootScope.Students[$rootScope.indexStudent].pangular.copy($rootScope.student);
          Swal.fire({
            icon: 'success',
            title: 'Cập nhật thông tin cá nhân thành công!',
        });
        }
  });