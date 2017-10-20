const database = firebase.database().ref('/');
let mainDiv = document.getElementById('mainDiv');
let loggedinUser = localStorage.getItem('loggedinUser');
var convertToParse = JSON.parse(loggedinUser);

 database.child('bloodRequirementPost').on('child_added', (snapshot) => {

            let postDetail = snapshot.val();
            postDetail.key = snapshot.key;
            // console.log(postDetail);

let postDiv = document.createElement('DIV');
postDiv.className = "card postDiv";
postDiv.style = "width: 20rem;";
postDiv.onclick = () => {
    console.log(postDiv);
}
let ul = document.createElement('UL');
ul.className = "list-group list-group-flush";
ul.id = postDetail.key;
let li_1 = document.createElement('LI');
li_1.className = "list-group-item";
let textLi_1 = document.createTextNode(`Post By : ${postDetail.postBy}`);
li_1.appendChild(textLi_1)
let li_2 = document.createElement('LI');
li_2.className = "list-group-item";
let textLi_2 = document.createTextNode(`Patients's Name : ${postDetail.patientName}`);
li_2.appendChild(textLi_2)
let li_3 = document.createElement('LI');
li_3.className = "list-group-item";
let textLi_3 = document.createTextNode(`${postDetail.unitRequired} Units of ${postDetail.bloodGroup} blood Required`);
li_3.appendChild(textLi_3)
let li_4 = document.createElement('LI');
li_4.className = "list-group-item";
let textLi_4 = document.createTextNode(`At ${postDetail.hospital} for my ${postDetail.relation}`);
li_4.appendChild(textLi_4)
let li_5 = document.createElement('LI');
li_5.className = "list-group-item";
let textLi_5 = document.createTextNode(`Urgency With In ${postDetail.urgency}`);
li_5.appendChild(textLi_5)
let li_6 = document.createElement('LI');
li_6.className = "list-group-item";
let textLi_6 = document.createTextNode(`Contect No : ${postDetail.contectNumber}`);
li_6.appendChild(textLi_6)
let li_7 = document.createElement('LI');
li_7.className = "list-group-item";
let textli_7 = document.createTextNode(`Additional Instruction : ${postDetail.additionalInfo}`);
li_7.appendChild(textli_7)
let volunteerBtn = document.createElement('BUTTON');
volunteerBtn.className = "btn btn-primary";
let volunteerBtnText =document.createTextNode("Volunteer");
volunteerBtn.appendChild(volunteerBtnText);
// let li_7 = document.createElement('LI');
// li_7.className = "list-group-item";
// let li_8 = document.createElement('LI');
// li_8.className = "list-group-item";

ul.appendChild(li_1)
ul.appendChild(li_2)
ul.appendChild(li_3)
ul.appendChild(li_4)
ul.appendChild(li_5)
ul.appendChild(li_6)
ul.appendChild(li_7)
// ul.appendChild(li_7)
// ul.appendChild(li_8)

postDiv.appendChild(ul);
postDiv.appendChild(volunteerBtn);
mainDiv.appendChild(postDiv);

})
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