define(['controllers', 'directives'], function() {
	'use strict';
	window.app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/', {
				templateUrl: 'templates/index.html',
				controller: 'indexController'
			}).
			when('/deckbuilder', {
				templateUrl: 'templates/deck-builder.html',
				controller: 'deckBuilderController'
			}).
			otherwise({
				redirectTo: '/'
			});
		}
	]);
});
