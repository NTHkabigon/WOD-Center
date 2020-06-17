app.controller('quizcontroller', function($rootScope,$scope,$http, $interval, $routeParams){
    $scope.name=$routeParams.name
    $scope.id=$routeParams.id
    $rootScope.quizs=[]
    $http.get('db/Quizs/'+$scope.id+'.js').then(function(response){
    console.log(  $rootScope.quizs = response.data)
    });
    $scope.indexQ=0;
    $scope.tong_diem=0;
    $scope.tinh_diem = function(diem_cua_cau_hoi, dap_an, tra_loi){
        if (dap_an == tra_loi) {
            $scope.tong_diem += diem_cua_cau_hoi;
            console.log($scope.tong_diem)
        }
        if ($scope.tong_diem == 0) {
            $scope.tong_diem = 0
        }
        $rootScope.Students[$rootScope.indexStudent].marks= $scope.tong_diem;
    };
   
    $scope.xemdiem=function(){
       
        $scope.phut=0;
        $scope.giay=1;
         
    };
    $scope.phut = 1;
    $scope.giay = 30;
    $scope.dongho=false;
    $interval(function(giay){
        $scope.time = ($scope.phut<10) ? ('0' + $scope.phut.toString()): $scope.phut.toString();
        $scope.time += ':'
        $scope.time += ($scope.giay<10) ? ('0' + $scope.giay.toString()): $scope.giay.toString();
    
        $scope.giay-=1;
        if ($scope.giay==0) {
            if ($scope.phut==0) {
                Swal.fire({
          icon: 'success',
          title: 'Điểm của bạn là:'+ $scope.tong_diem + ' Điểm'
           
        })   
        $scope.dongho=true;        
            }
         else {
            $scope.phut-=1;
            $scope.giay=59;
        }
     }
    },1000);
    $scope.begin=0;
   
    $scope.first = function(){
        $scope.begin=0
    };
    $scope.prev =function(){
        if ($scope.begin>0) {
            $scope.begin -= 1;
        }
    };
    $scope.next =function(){
          if ($scope.begin < (Math.ceil($rootScope.quizs.length/1)-1)) {
              $scope.begin += 1;
          } 
    };
    $scope.last = function(){
      $scope.begin = (Math.ceil($rootScope.quizs.length/1)-1);
      console.log($rootScope.quizs.length/1)
    }
});
