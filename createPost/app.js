
const bloodGroup = document.getElementById('bloodGroup');
const unitRequired = document.getElementById('unitRequired');
const urgency = document.getElementById('urgency');
const country = document.getElementById('country');
const city = document.getElementById('city');
const hospital = document.getElementById('hospital');
const relation = document.getElementById('relation');
const cntctNumber = document.getElementById('cntctNumber');
const exrtainfo = document.getElementById('exrtainfo');

let post = () => {

const usersInfo = {

    bloodGroup : bloodGroup.value,
    unitRequired : unitRequired.value,
    urgency : urgency.value,
    country : country.value,
    city : city.value,
    hospital : hospital.value,
    relation : relation.value,
    cntctNumber : cntctNumber.value,
    exrtainfo : exrtainfo.value

}

console.log(usersInfo);

}