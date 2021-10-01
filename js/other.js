/* const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with Boos',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist',
        isCompleted: false
    }
]; */

//For
/* for(let x of todos) {
    console.log(x.text)
} */

//forEach, map, filter
/*todos.forEach(function(x)
{
    console.log(x.text)
});*/

/*const xText = todos.map(function(x)
{
    return x.text;
}
);

console.log(xText) */

/*const xCompleted = todos.filter (function(x){
    return x.isCompleted === true;
}) .map(function(x) {
    return x.text;
})

console.log(xCompleted); */

//-------------------------------------------------------

/* //const x = 20

if(x === 10) {
    console.log('x is 10');
} else if( x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
} */

/*const x = 6;
const y = 11;
    if(x > 5 && y > 10) {
        console.log('x is more than 5 and y is more than 10')
}*/
//or
/*if(x > 5){
    if(y > 10){
        console.log('x is more than 5 and y is more than 10')
    }
}*/ 

/* uclu operator
const x = 9
const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue')
        break;
} */

/*function addNums(n1, n2, n3) {
    console.log(n1+n2+n3)
}
addNums(2,3,5)*/

/*function addNums(n1=1, n2=1, n3=1) {
    console.log(n1+n2+n3)
}
addNums()*/

/*function addNums(n1, n2) {
    return n1 + n2
}
console.log(addNums(5,4));*/

/*//short way
const addNums = (n1, n2) => n1 + n2;
console.log(addNums(5,4))*/

/*const addNums = n1 => n1 + 5;
console.log(addNums(4))*/

/*function Person(firstName, lastName, dt) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dt = new Date(dt);
    this.getBirthYear = function() {
        return this.dt.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
    Person.prototype.getBirthYear = function() {
        return this.dt.getFullYear();
    }*/

/*Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
*/

//class (easy way)
/*class Person {
    constructor(firstName, lastName, dt) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dt = new Date(dt);
    }
    getBirthYear() {
        return this.dt.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('Ali', 'Smit', '02-22-2019');
const person2 = new Person('Burak', 'Sahin', '05-03-1960')

//console.log(person1.dt.getFullYear ());
//console.log(person2.getFullName());
console.log(person2.getFullName());
console.log(person2.getBirthYear());*/

