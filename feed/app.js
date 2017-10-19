const database = firebase.database().ref('/');
let mainDiv = document.getElementById('mainDiv');
let loggedInUser = localStorage.getItem('loggedInUser')
var convertToParse = JSON.parse(loggedInUser)

console.log(convertToParse, "hi");

let ul = document.createElement('UL');
ul.className = "list-group list-group-flush";
let li_1 = document.createElement('LI');
li_1.className = "list-group-item";
let textLi_1 = document.createTextNode(convertToParse.fName + " " + convertToParse.lName);
li_1.appendChild(textLi_1)
let li_2 = document.createElement('LI');
li_2.className = "list-group-item";
let textLi_2 = document.createTextNode(`5 Units of AB Positive blood Required`);
li_2.appendChild(textLi_2)
let li_3 = document.createElement('LI');
li_3.className = "list-group-item";
let textLi_3 = document.createTextNode(`At ${convertToParse.address} for my ${convertToParse.gender}`);
li_3.appendChild(textLi_3)
let li_4 = document.createElement('LI');
li_4.className = "list-group-item";
let textLi_4 = document.createTextNode(`Urgency With In 3 days`);
li_4.appendChild(textLi_4)
let li_5 = document.createElement('LI');
li_5.className = "list-group-item";
let textLi_5 = document.createTextNode(`Contect No : ${convertToParse.cellNumber}`);
li_5.appendChild(textLi_5)
// let li_6 = document.createElement('LI');
// li_6.className = "list-group-item";
// let textLi_6 = document.createTextNode(`Urgency With In 3 days`);
// li_6.appendChild(textLi_6)
// let li_7 = document.createElement('LI');
// li_7.className = "list-group-item";
// let li_8 = document.createElement('LI');
// li_8.className = "list-group-item";

ul.appendChild(li_1)
ul.appendChild(li_2)
ul.appendChild(li_3)
ul.appendChild(li_4)
ul.appendChild(li_5)
// ul.appendChild(li_6)
// ul.appendChild(li_7)
// ul.appendChild(li_8)
mainDiv.appendChild(ul);
const func = name => {
    alert(`hello ${name}`);
} 

 // <div class="card" style="width: 20rem;">
 // <ul class="list-group list-group-flush">
//     <li class="list-group-item">Cras justo odio</li>
//     <li class="list-group-item">Dapibus ac facilisis in</li>
//     <li class="list-group-item">Vestibulum at eros</li>
//   </ul>
// </div> 

// function submit(params){

//     var user = JSON.parse(localStorage.getItem('user'))
//     obj = {
//         name : username,
//         blood : 'a+',
//         urgency : '1 day'

//     }
//     database.child(`post/${user.uid}`).push(ojb)

// }

// database.child('post').on('child_added', function(snapshot){
//     var demo = snapshot.val();

//     for (var key in demo){
//         var element = demo[key];
//         element.ID = key

//         console.log(element)
//     }
// })