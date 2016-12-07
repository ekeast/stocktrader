(function(){
    function AuthCtrl($scope, Auth) {
       $scope.newUser = {
           email: null,
           password: null
       };
        
       $scope.login = Auth.signIn($scope.newUser);
        
    }
        
    angular 
        .module('stocktrader')
        .controller('AuthCtrl', ['$scope', 'Auth', AuthCtrl]);
})();