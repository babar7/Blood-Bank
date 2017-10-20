const database = firebase.database().ref('/')

const email = document.getElementById('inputEmail')
const pass = document.getElementById('inputPassword')

document.getElementById('stop').addEventListener("submit", function (event) {
        event.preventDefault()
        const user = {
            email: email.value,
            password: pass.value
        }

        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(function (res) {
                // console.log(res.uid)
                database.child('signupUser/' + res.uid).once('value', function (snapshot) {
                        var convert = JSON.stringify(snapshot.val())
                        localStorage.setItem('loggedinUser', convert)
                        location = 'feed/feed.html'
                        console.log(convert)
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