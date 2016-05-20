var cookies = angular.module('cookies',[]);
function cookie_view($scope,$http){
    $scope.formData= [];
    $http.get('/api/cookies')
    .success(function(data){
    	$scope.cookies = data;
    	console.log(data);
    });
}