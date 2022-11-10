const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const msg = document.querySelector('.msg');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();


    console.log(firstName.value);
}
