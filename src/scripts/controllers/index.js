define(['ngtable'], function() {
  'use strict';

  function indexController($scope, $http, NgTableParams) {
    $scope.data = {};
    $http.get('data/example.json').then(function(result) {
      $scope.data.exampleTableData = result.data;
    });
  }
  indexController.$inject = ['$scope', '$http', 'NgTableParams'];
  return indexController;
});
//
// var app = angular.module('App', ['ngTable']);
// app.controller('indexController', ['$scope', '$http','ngTableParams',
//     function ($scope, $http, ngTableParams) {
// 		$scope.data = {};
// 		$scope.data.libs = [];
// 		$http.get('data/data.json').then(function(result) {
// 			$scope.data.libs = result.data;
// 		});
//
// 		var self = this;
// 		var data = [{name: "Moroni", age: 50} /*,*/];
// 		self.tableParams = new NgTableParams({}, { dataset: data});
//
// 		$http.get('data/example.json').then(function(result) {
// 			$scope.data.exampleTableData = result.data;
// 		});
// 	}]);
// indexController.$inject = ['$scope', '$http', NgTableParams];
// return indexController;
// });
