app.controller('dangky',function($rootScope, $scope){
    $scope.user = {};
    $scope.user.marks=0;
    $scope.register = function() {
        $scope.repassword;
        if ($scope.user.password==$scope.repassword) {
            console.log(angular.copy($scope.user));
            $rootScope.Students.push(angular.copy($scope.user));
            $scope.user = {};
            $scope.repassword = '';
            Swal.fire({
                title: 'Đăng kí thành công',
                text: "Bạn có muốn quay lại trang chủ!",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có!',
                cancelButtonText: 'Không'
            }).then((result) => {
                if (result.value) {
                    window.location.href = "#!index";
                }
            })
        }
        else{
            Swal.fire({            
                icon: 'error',
                title: 'Bạn đã đăng ký thất bại',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
})