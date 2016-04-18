angular.module('rtfmApp')
	.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray) {
	
	
		//firebaseArray turns firebase object of threads into a javascript array of threads
		$scope.threads = $firebaseArray(threadsRef);
	
		//notifies data has been loaded
		$scope.threads.$loaded().then(function (threads) {
			console.log(threads);
		});
	
		//creates thread and adds it to the firebase array which stores it in firebase
		$scope.createThread = function (username, title) {
			$scope.threads.$add({
				username: username,
				title: title
			})
		}
	
	
	
	
})