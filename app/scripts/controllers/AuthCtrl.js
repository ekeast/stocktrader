(function(){
    function AuthCtrl(Auth) {
//       $scope.newUser = {
//           email: null,
//           password: null
//       };
//        
//        $scope.loggedIn = false;
//        
//        firebase.auth().onAuthStateChanged(function(user) {
//          if (user) {
//            $scope.loggedIn = true;
//            console.log("User is logged in");
//            console.log(user.email);
//
//          } else {
//            $scope.loggedIn = false;
//            console.log("User is not logged in");
//          }
//        });
//
//        
//        $scope.signUp = function(newUser) {
//            firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).catch(function(error) {
//                   console.log(error.message);
//                    alert(error.message);
//              
//            });
//
//            $scope.newUser = {
//               email: null,
//               password: null
//            };    
//        };
//        
//        $scope.signIn = function(newUser) {
//            firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password).catch(function(error) {
//              // Handle Errors here.
//                console.log(error.message);
//                alert(error.message);
//              
//            });
//            
//            $scope.newUser = {
//               email: null,
//               password: null
//            };  
//        };
//        
//        
//        $scope.logOut = function() {
//            firebase.auth().signOut().then(function() {
//              console.log("Logged out!");
//            }, function(error) {
//              console.log(error.message);
//            });
//        };
//       
        this.authorize = Auth;
    }
        
    angular 
        .module('stocktrader')
        .controller('AuthCtrl', ['Auth', AuthCtrl]);
})();