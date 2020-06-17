app.controller('resetcontroller', function ($scope, $http) {
    $http.get('db/Students.js').then(function (response) {
      console.log($scope.Students = response.data)
    });
    $scope.user = {};
    $scope.reset = function () {
      console.log('reset')

      var i;
      for (i = 0; i < $scope.Students.length; i++) {

        if ($scope.Students[i].username == $scope.user.username && $scope.Students[i].email == $scope.user.email) {



          Swal.fire({
            icon: 'success',
            title: 'Mật Khẩu Của Bạn',
            text: $scope.Students[i].password

          })
          return 1;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Bạn đã nhập sai thông tin',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
      return 0;
    }

});