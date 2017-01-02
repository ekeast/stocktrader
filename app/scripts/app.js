(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider 
            .state('signin', {
                url: '/',
                controller: 'AuthCtrl as signin',
                templateUrl: '/templates/signin.html'
            });
        
        $stateProvider 
            .state('signup', {
                url: '/signup',
                controller: 'AuthCtrl as signup',
                templateUrl: '/templates/signup.html'
            });
        
        $stateProvider 
            .state('home', {
                url: '/home',
                controller: 'StockCtrl as home',
                templateUrl: '/templates/home.html',
                authenticate: true            
            });
    } 
    
    angular
        .module('stocktrader', ['ui.router'])
        .config(config);
})();