define(['ngtable'], function() {
  'use strict';

  function indexController($scope, $http, NgTableParams, ngDialog) {
    $scope.data = {};
    $http.get('data/example.json').then(function(result) {
      $scope.data.exampleTableData = result.data;
    });

    $scope.clickToOpen = function (card) {
      ngDialog.open(
        {
          template: '<div class="cardViewContainer" ><img class="cardView" src="' + card.image_url + '"/></div>',
          plain: true,
          className: 'ngdialog-theme-default',
          width: 220,
          trapFocus: false,
          overlay: false,
          showClose: false
        });
      };

      $scope.closeAll = function (card) {
        ngDialog.closeAll();
      };
    };

    indexController.$inject = ['$scope', '$http', 'NgTableParams', 'ngDialog'];
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
