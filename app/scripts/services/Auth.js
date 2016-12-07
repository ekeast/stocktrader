(function() {
    function Auth() {
       var Auth = {};
        
        
        var loggedIn = false;
        
        var currentUser = null;
        
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            loggedIn = true;
            console.log("User is logged in");
            console.log(user.email);
            currentUser = user;

          } else {
            loggedIn = false;
            console.log("User is not logged in");
          }
        });

        
        Auth.signUp = function(newUser) {
            firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).catch(function(error) {
                   console.log(error.message);
                    alert(error.message);
            });


        };
        
        Auth.signIn = function(user) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
              // Handle Errors here.
                console.log(error.message);
                alert(error.message);
              
            });
            
        };
        
        
        Auth.logOut = function() {
            firebase.auth().signOut().then(function() {
              console.log("Logged out!");
            }, function(error) {
              console.log(error.message);
            });
        };
        
        return Auth;
    }
    
    angular 
        .module('stocktrader')
        .factory('Auth', Auth);
 })();