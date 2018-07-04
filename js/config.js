angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$stateProvider

		.state('menu', {
			abstract:true,
            // url: '/home',
            views: {
                'menu@': {
                    templateUrl: '/templates/menu.html',
                    // controller: 'loginController'
                }
            }
        })

        .state('home', {
            url: '/home',
            parent: 'menu',
            views: {
                'content@menu': {
                    templateUrl: '/templates/home.html',
                    controller: 'homeController'
                }
            }
        })



    $urlRouterProvider.otherwise('/home');

});