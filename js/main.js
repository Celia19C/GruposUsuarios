'use strict'

//Recogemos el valor del input

let usersList = [];


function addUser () {
    let user = {
        name: '',
        group: ''
    };

    let userName = document.querySelector('.user__name').value;
    let group = document.querySelector('.select_groups').value;

    user.name = userName;
    user.group = group;
    usersList.push(user);

    console.log(usersList);
    
}

const addUserBtn = document.querySelector('.addUser__btn');
addUserBtn.addEventListener('click', addUser);