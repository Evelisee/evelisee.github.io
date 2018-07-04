angular.module('app')

.controller('homeController', function($scope, dataService){

 	$scope.projectsInfo = dataService.getInfoProjects();

 	$scope.year = new Date().getFullYear();
})