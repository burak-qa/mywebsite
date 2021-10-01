function myFunction() {
    alert ("Welcome to Code Academy!");
}

const person = {firstName:"Code", lastName:"Academy"
};

let text = "";
for (let x in person) {
    text += person[x] + " ";
}
document.getElementById("users").innerHTML = text


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all field';
    } else {
        console.log('success');
    }
}