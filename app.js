var app = angular.module('editableItem', []);

app.directive('makeEditable', function() {
		return {
			restrict: 'A',
			transclude: true,
			templateUrl: 'editable.html',
			scope: true,
		}
	});
