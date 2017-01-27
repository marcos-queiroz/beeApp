(function(){
	"use strict";

	angular.module('beeApp').value('Config', {
		getUrl: "http://cms.beecoffee.com.br/api/"
	});

	angular.module('beeApp').service('Data', function($http, Config){
		this.getData = function(params){
			return $http({
				method: "POST",
				url: Config.getUrl +"getLivros2",
				data: params,
				headers: {
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			});
		}
	});
})();