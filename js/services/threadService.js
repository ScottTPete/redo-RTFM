angular.module('rtfmApp')
	.service('threadSvc', function(firebaseUrl, Firebase) {
	
	
	//new Firebase,() creates a firebase reference from a full firebase url
	
	//gets threads from firebase project
	this.getThreads = function () {
		return new Firebase(firebaseUrl.url + '/threads')
	}
	
	//gets thread based off threadId
	this.getThread = function(threadId) {
		return new Firebase(firebaseUrl.url + '/threads/' + threadId);
	}
	
	//gets comments on a specific thread
	this.getComments = function(threadId) {
		return new Firebase(firebaseUrl.url + '/threads/' + threadId + '/comments')
	}
	
	
	
	
})