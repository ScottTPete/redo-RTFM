angular.module('rtfmApp')
	.controller('threadCtrl', function($scope, threadRef, $firebaseObject, commentsRef, $firebaseArray) {
		
	
		//creates var that references a thread in firebase and turns it into a javascript object
		var thread = $firebaseObject(threadRef);
	
		//binds thread var to scope as 'thread'
		thread.$bindTo($scope, 'thread');
	
		//create scope object that that takes comment ref from a thread and turn comments into a javascript array
		$scope.comments = $firebaseArray(commentsRef);
	
		//creates function that takes in a username and comment and adds it to the comments ref using angularfire $add method. Sends to fire base as object comments = {username: 'username', text: 'text'}
		$scope.createComment = function(username, text) {
			$scope.comments.$add({
				username: username,
				text: text
			})
		}
		
		
	
	
	
});