var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

var refresh = function() {
	$http.get('/guestlist').success(function(response) {
		$scope.guestlist = response;
	});
};

refresh();

$scope.addGuest = function() {
	console.log($scope.guest);
	$http.post('/guestlist', $scope.guest).success(function(response) {
		console.log(response);
		refresh();
	});
};

$scope.deselect = function() {
	$scope.guest = "";
};


}]);