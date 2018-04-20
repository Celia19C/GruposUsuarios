'use strict'

//Recogemos el valor del input


const usersList = [];
let user = {
    name: '',
    group: ''
}

function addUser () {
    let userName = document.querySelector('.user__name').value;
    user.name = userName.push(userList);
}


let addUserBtn = document.querySelector('.addUser__btn');
addUserBtn.addEventListener('click', addUser);









// <div class="description"><p>Herramienta para la gestión de grupos y usuarios</p></div>
//         <input type="text" id="user__name" class="user__name" placeholder="Esribe tu nombre de usuario">
//         <select class="select_groups" id="select_groups">
//                 <option value="Grupo1">Grupo 1</option>
//                 <option value="Grupo2">Grupo 2</option>
//                 <option value="Grupo3">Grupo 3</option>
//         </select>
//             <div class="box1"></div>
//             <div class="box2"></div>
//             <div class="box3"></div>