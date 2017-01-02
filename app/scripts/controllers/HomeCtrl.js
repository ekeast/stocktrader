(function(){
    function HomeCtrl(Auth) {
        this.authorize = Auth;
    }
        
    angular 
        .module('stocktrader')
        .controller('HomeCtrl', ['Auth', HomeCtrl]);
    
})();