(function(){
	"use strict";

	angular.module('beeApp').controller('initCtrl', function($scope, Data, $location, $cordovaInAppBrowser){

		$scope.pgHome = "Home";
		$scope.pgLivros = "Livros";
		$scope.pgLivro = "Livro";
		$scope.pgCidades = "Cidades";

		var getData = function(){
			var params = {
				token:"1f3d2gs3f2fg3as2fdg3re2t1we46er45"
			};

			Data.getData(params).success(function(data){
				console.log(data);
				$scope.livros = data;
			}).error(function(data){
				console.log(data ? data : "Não foi possivel acessar o Servidor");
			});
		};

		getData();

		$scope.detalheLivro = function(index){
			$scope.livro = $scope.livros[index];
			$location.path("/menu/livro")
		};
		
		$scope.openUrl = function(data){
			var url = data;

			console.log("url: "+ url);
			//window.open(url, '_system');
		}
	});

	
})();