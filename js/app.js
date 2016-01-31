var app = angular.module("toySearch", ['elasticsearch'],
	['$locationProvider', function($locationProvider){
		$locationProvider.html5Mode({
			enabled:true,
			requireBase: false
		});
	}]
);

app.filter('num', function() {
    return function(input) {
      return parseFloat(input, 10);
    };
});