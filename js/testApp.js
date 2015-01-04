var testApp = angular.module('testApp',[]);
testApp.directive('myDirective',function(){
	return {
		restrict:'AEC',
		templateUrl:'directive-templates/css-fadeout.html'
	}
})