app.controller('doimatkhau',function($scope,$rootScope){
 $scope.oldpassword=null;
 $scope.password=null;
 $scope.retrypassword=null;
        $scope.change = function() {
            console.log($scope.oldpassword, $scope.password, $scope.retrypassword)
            console.log($scope.Students[$rootScope.indexStudent].password)
            if ($scope.Students[$rootScope.indexStudent].password == $scope.oldpassword &&  $scope.password== $scope.retrypassword) {                
                    
                    $rootScope.Students[$rootScope.indexStudent].password = $scope.password;
                    Swal.fire({
                        title: 'Đổi mật khẩu thành công',
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
    
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Mật khẩu cũ không đúng!'
                });
            }
            $scope.oldpassword = "";
            $scope.password = "";
            $scope.retrypassword= "";
        }
    });
    
    