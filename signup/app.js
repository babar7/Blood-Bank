const database = firebase.database().ref("/");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const address = document.getElementById("inputAddress");
const cellNumber = document.getElementById("cellNumber");
const gender = document.getElementById("gender");
const age = document.getElementById("age");
const bloodGroup = document.getElementById("bloodGroup");

// let function'sName = (perameters) => {body}
let signup =() => {
    const loggedinUser = {
        fullName : fullName.value,
        email : email.value,
        pass : password.value,
        address : address.value,
        cellNumber : cellNumber.value,
        gender : gender.value,
        age : age.value,
        bloodGroup : bloodGroup.value
    }
// console.log(loggedInUsers);

firebase.auth().createUserWithEmailAndPassword(loggedinUser.email, loggedinUser.pass)
.then(function (reference){
    // console.log(reference);
    database.child("loggedinUser/" + reference.uid).set(loggedinUser).then(function(){
        location = '../index.html';
    })

})
    .catch(function(error) {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});

}
