app.controller('logincontroller', function ($rootScope,$scope, $http) {
  $rootScope.Students=[];
    $http.get('db/Students.js').then(function (response) {
      console.log($rootScope.Students = response.data)
    });
    $scope.user = {};
    $rootScope.indexStudent=null;    
    $rootScope.status=false;
    $scope.login = function () {
      console.log('login')
      
      var i;
      for (i = 0; i < $scope.Students.length; i++) {
       
        if ($scope.Students[i].username == $scope.user.username && $scope.Students[i].password == $scope.user.password) {

         console.log( $rootScope.indexStudent=i);
        console.log( $rootScope.status=true);
          window.location.href="#!index.html";
          Swal.fire({            
            icon: 'success',
            title: 'Bạn đã đăng nhập thành công',
            showConfirmButton: false,
            timer: 1500
          })
          return 1;
        } else {
          Swal.fire({            
            icon: 'error',
            title: 'Bạn đã đăng nhập thất bại',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
      return 0;
    }

  });