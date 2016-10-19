define(['ngtable'], function() {
  'use strict';

  function indexController($scope, $http, NgTableParams, ngDialog) {
    $http.get('https://fsxz0udkr1.execute-api.eu-central-1.amazonaws.com/dev/set/awakenings/card').then(function(result) {
      $scope.tableParams = new NgTableParams({
        sorting: { set_number: "asc" },
        count: 200
      }, { dataset: result.data.Items });
    });

    $scope.alignments = [
      {id: "villain", title: "Villain"},
      {id: "hero", title: "Hero"},
      {id: "neutral", title: "Neutral"}
    ];

    $scope.colors = [
      {id: "red", title: "Red"},
      {id: "blue", title: "Blue"},
      {id: "yellow", title: "Yellow"},
      {id: "grey", title: "Grey"}
    ];

    $scope.types = [
      {id: "character", title: "Character"},
      {id: "upgrade", title: "Upgrade"},
      {id: "support", title: "Support"},
      {id: "event", title: "Event"},
      {id: "battlefied", title: "Battlefield"},
    ];

    $scope.boolean_select = [
      {id: "true", title: "True"},
      {id: "false", title: "False"}
    ]

    $scope.titleCase = function(str) {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    $scope.concatArray = function(arr) {
      var result = "";
      for(var i=0; i < arr.length; i++) {
        if(i > 0) {
          result += " ";
        }
        result += $scope.titleCase(arr[i]);
      }

      return result;
    }

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
