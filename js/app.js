angular.module('rtfmApp', ['ui.router', 'firebase'])

	//constant allows us to set a value that doesn't change and we can then inject the constant where we need it. 

	.constant('firebaseUrl', {
		url: 'https://stp-rtfm.firebaseio.com/'
	})
	
	.config(function ($urlRouterProvider, $stateProvider) {

		$urlRouterProvider.otherwise('/threads'); //if user tries to go to undefined route, they'll be directed here.	

		$stateProvider
			.state('threads', {
				url: '/threads',
				controller: 'threadsCtrl',
				templateUrl: '../views/threads.html',
				resolve: {
					
					//creates ref accessed by threadsCtrl that returns threads
					threadsRef: function(threadSvc) {
						return threadSvc.getThreads();
					}
				}
			})
			.state('thread', {
				url: '/threads/:threadId',
				controller: 'threadCtrl',
				templateUrl: '../views/thread.html',
				resolve: {
					
					//creates a ref that's accesed by theadCtrl and the ref returns the specified thread based of the threadId
					threadRef: function(threadSvc, $stateParams) {
						return threadSvc.getThread($stateParams.threadId);
					},
					
					//creates ref to comments within the specified threadId accessed by threadCtrl
					commentsRef: function(threadSvc, $stateParams) {
						return threadSvc.getComments($stateParams.threadId);
					}
				}
			})









	})