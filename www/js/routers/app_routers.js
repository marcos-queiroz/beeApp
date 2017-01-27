(function(){
	"use strict";

	angular.module('beeApp').config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/menu/home');

		$stateProvider

		.state('menu', {
			url:'/menu',
			templateUrl:'views/menu.html',
			abstract: true,
			controller: 'initCtrl'
		})

		.state('menu.home', {
			url:'/home',
			views:{
				'menuContent': {
					templateUrl:'views/home.html'
				}
			}
		})

		.state('menu.livros', {
			url:'/livros',
			views:{
				'menuContent': {
					templateUrl:'views/livros.html'
				}
			}
		})
		
		.state('menu.livro', {
			url:'/livro',
			views:{
				'menuContent': {
					templateUrl:'views/livro.html'
				}
			}
		})

		.state('menu.cidades', {
			url:'/cidades',
			views:{
				'menuContent': {
					templateUrl:'views/cidades.html'
				}
			}
		});

	});
})();