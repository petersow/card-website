'use strict';
require.config({
	paths: {
		routes: './routes',
		text: '../lib/text',
		angular: '../lib/angular',
		angularrouter: '../lib/angular-route',
		jquery: '../lib/jquery',
		bootstrap: '../lib/bootstrap',
		ngtable: 'external/ng-table'
	},
	shim: {
		'angular': { exports: 'angular' },
		'angular-route': ['angular'],
		'ngTable': ['angular']
	}
});

window.app = {};
require(['angular', 'jquery', 'ngtable'], function() {
	require(['angularrouter', 'bootstrap'], function() {
		window.app = angular.module('App', ['ngRoute', 'ngTable']);
		require(['router'], function() {
			angular.bootstrap(document, ['App']);
		});
	});
});
