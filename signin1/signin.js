var database = firebase.database().ref('/')

var email = document.getElementById('inputEmail')
var pass = document.getElementById('inputPassword')

document.getElementById('stop').addEventListener("submit", function (event) {
        event.preventDefault()
        var user = {
            email: email.value,
            password: pass.value
        }
        console.log(user)
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(function (res) {
                // console.log(res.uid)
                database.child('loggedinUser/' + res.uid).once('value', function (snapshot) {
                        // var convert = JSON.stringify(snapshot.val())
                        // localStorage.setItem('loggedInUser', convert)
                        // location = '../feed/feed.html'
                        console.log(snapshot.val());
                    })
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });

    })








// var database = firebase.database().ref('/');
// const email = document.getElementById('inputEmail')
// const pass = document.getElementById('inputPassword')

// document.getElementById('stop').addEventListener("submit", function (event) {
//         event.preventDefault()
//         const loggedinUser = {
//             email: email.value,
//             password: pass.value
//         }

//         firebase.auth().signInWithEmailAndPassword(loggedinUser.email, loggedinUser.password)
//             .then(function (reference) {
//                 console.log(reference.uid)
//                 alert('hi');
//                 database.child('loggedinUser/' + reference.uid).once('value', function (snapshot) {
//                         var convert = JSON.stringify(snapshot.val())
//                         localStorage.setItem('loggedinUser', convert)
//                         location = '../feed/feed.html'
//                         console.log(convert)
//                     })
//             })
//             .catch(function (error) {
//                 // Handle Errors here.
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 if (errorCode === 'auth/wrong-password') {
//                     alert('Wrong password.');
//                 } else {
//                     alert(errorMessage);
//                 }
//                 console.log(error);
//             });

//     })