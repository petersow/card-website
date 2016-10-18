'use strict';
require.config({
	paths: {
		routes: './routes',
		text: '../lib/text',
		angular: '../lib/angular',
		angularrouter: '../lib/angular-route',
		jquery: '../lib/jquery',
		bootstrap: '../lib/bootstrap',
		ngtable: 'external/ng-table',
		ngdialog: '../lib/ngDialog'
	},
	shim: {
		'angular': { exports: 'angular' },
		'angular-route': ['angular'],
		'ngTable': ['angular'],
		'ngDialog': ['angular']
	}
});

window.app = {};
require(['angular', 'jquery', 'ngtable', 'ngdialog'], function() {
	require(['angularrouter', 'bootstrap'], function() {
		window.app = angular.module('App', ['ngRoute', 'ngTable', 'ngDialog']);
		require(['router'], function() {
			angular.bootstrap(document, ['App']);
		});
	});
});
