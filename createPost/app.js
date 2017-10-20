const database = firebase.database().ref('/');
const patientName = document.getElementById('patientName');
const bloodGroup = document.getElementById('bloodGroup');
const unitRequired = document.getElementById('unitRequired');
const urgency = document.getElementById('urgency');
const country = document.getElementById('country');
const city = document.getElementById('city');
const hospital = document.getElementById('hospital');
const relation = document.getElementById('relation');
const contectNumber = document.getElementById('contectNumber');
const additionalInfo = document.getElementById('additionalInfo');
const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'))

let post = () => {

    const usersInfo = {

        postBy : loggedinUser.fullName,
        patientName : patientName.value,
        bloodGroup : bloodGroup.value,
        unitRequired : unitRequired.value,
        urgency : urgency.value,
        country : country.value,
        city : city.value,
        hospital : hospital.value,
        relation : relation.value,
        contectNumber : contectNumber.value,
        additionalInfo : additionalInfo.value

    }
        console.log(usersInfo);

    database.child('bloodRequirementPost').push(usersInfo);   

}