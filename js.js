// //alert('Hello World');
// console.log('Hello World');
// console.error('this is an error');
// console.warn('this is an a warning');

// // var, let- we can change values , const- (always initialise) cannot change values directly

// /* let age = 30;
// age = 31;

// const num = 30; 

// let score;
// score = 10;

// /* const score;
// score = 10; */  // this is not possible -error 

// // Strings ,Numbers , boolean , null, undefined, Symbol

// const myName = 'John';
// const age = 25;
// const rating = 4.5;
// const isCool = true;
// const x = null;  //empty variable
// const y = undefined;
// let z;

// console.log(typeof myName);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// // concatenation

// console.log('My name is ' + myName + ' and I am ' + age);
// //Template String 
//  //console.log(`My name is ${myName} and I am ${age}`);

// const hello = `My name is ${myName} and I am ${age}`;
// console.log(hello)

// //string funtions

// const s = 'technology y computers y it y code';

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase());// it stop before 5
// console.log(s.split(' g')); // separating code with whatever is in '' and putting it in an array

// //Arrays - variables that hold multiple values 

// // const numbers = new Array(1,2,3,4,5);

// const fruits = ['apples', 'oranges', 'pears', 10, true];

// fruits[3] = 'grapes'

// fruits.push('mangos');

// fruits.unshift('strawberries');

// fruits.pop();



// console.log(fruits);

// console.log(fruits.indexOf('oranges'));

// console.log(Array.isArray('hello'));

// Object Literals

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
        
//     }
// }

// person.email = 'john@gmail.com';

// console.log(person)



// console.log(person.firstName, person.lastName)

// console.log(person.address.city);

// const { firstName, lastName } = person;
// console.log(firstName)


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Go to dentist',
        isCompleted: true
    },
    {
        id: 3,
        text: 'eat an apple',
        isCompleted: false
    }
];

// for(let o of todos){
//     console.log(o.text.length)
// }

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

// FOR Loops


// for (let i = 1; i <= 5; i++){
//     if (i % 2 !== 0) console.log(i);
//     console.log(i)
// }

// const todoText = todos.map(function(todo){
//     return todo.text;
// })

// console.log(todoText);

// forEach, map, filer

// todos.forEach(function(todo){
// console.log(todo.text);
// });

// const btn = document.querySelector('#submit-btn');

// btn.addEventListener('click', function(){
//     console.log('Button clicked');
// });

// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user');

myForm.addEventListener('submit', onSubmit);

function onSubmit (e) {
    e.preventDefault();
   if(nameInput.value ==='' || emailInput.value === ''){
    msg.innerHTML = 'Please enter all fields';
   } else {
    console.log ('success');
   }
}
