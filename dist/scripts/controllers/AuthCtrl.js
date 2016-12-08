(function(){
    function AuthCtrl($scope, Auth) {
       $scope.newUser = {
           email: null,
           password: null
       };
        
        $scope.authorize = Auth;
        
    }
        
    angular 
        .module('stocktrader')
        .controller('AuthCtrl', ['$scope', 'Auth', AuthCtrl]);
})();