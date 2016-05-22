var cookies = angular.module('cookies',[]);
function cookie_view($scope,$http){
    $scope.formData= [];
    $http.get('/api/cookies')
    .success(function(data){
    	$scope.cookies = data;
    	console.log(data);
    });
}

it('should check ng-click',function(){
	expect(element(by.binding('count')).getText()).toMatch('0');
	element(by.css('button')).click();

	expect(element(by.binding('count')).getText()).toMatch('1');

})
