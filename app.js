(function(){
	'use strict()';
	var app = angular.module('testApp',[]);
	app.controller('testController',testController);
	testController.$injector = ['$scope'];
	function testController($scope){
                 $scope.caption = "BoilerPlate for Angular Application.";
	}
})();
	
