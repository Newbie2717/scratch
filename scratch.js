/** const shoppingList = [];
//console.log(shoppingList);

shoppingList.push("Hippo Milk 2");
shoppingList.push("Podridge");
shoppingList.push("Kids Paracetamol");

//  console.log(shoppingList.length);
**/

/** let fruits = new Array();  
// console.log(arr);

let vegs = [];
// console.log(arr2);

fruits.push("Mango", "Blueberry", "Strawberry");
vegs.push("Cucumber", "Carrot", "Onion");

// console.log(`${arr} is ${arr2} years old`);

console.log(fruits[1], vegs[0]);

fruits[2] = "Blackberry";

console.log(fruits);

console.log(fruits.length);

fruits[3] = "Mango";
console.log(fruits);

console.log(vegs.length);
vegs[0] = "Salad";
console.log(vegs);
console.log(vegs.length);
**/



/* let arr = ["Apple", {name: "Yaser"}, true, function() {return "Hello";}];

console.log(arr[1]);

console.log(arr[1].name);

console.log(`${arr[3]()} ${arr[1].name} and he likes ${arr[0]}`); */
/* 
let fruits = [
    "Tomato", 
    "Onion",
    "Cucumber",
]; */

// console.log(fruits);

/* fruits[3] = "salad";
// console.log(fruits);
fruits.push("Petercelie")
// console.log(fruits);

console.log(fruits[fruits.length-1]);
console.log(fruits.at(-1)); */

/* let guests = [
    {name: "Yaser", age: 30, vip: true, }, 
    {name: "Roshna", age: 25, vip: true, }, 
    {name: "Tariq", age: 28, vip: false},

];

/* for (const guest of guests){
    if (guest.vip === true){
        console.log(`${guest.name}, please go to hall 1`);
    } else {
        console.log(`${guest.name}, please go to hall 2`);
    }
}; */

/* function isVip(guest) {
    return guest.vip;
}

function getName(guest) {
    return guest.name;
}

const vipGuests = guests.filter(isVip);
const vipName = vipGuests.map(getName);

console.log(`${vipName} please go to hall 1`); */

/* for(const guest of guests){
    if (guest.age > 26){
        console.log(`${guest.name}, please go to hall 1`);
    } else {
        console.log(`${guest.name}, please go to hall 2`);
    }
}  */


// Multidimentional arrays

/* let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

for (const a of arr){
    for (const item of a){
        console.log(item);
    }
}; */
/* 
const timesheet = [
    {name: "Ajmal", hours: [8,8,8,8,8,], },
    {name: "Yaser", hours:[8,8,8,8,8,], }
];

function isYaserOrAjmal(person){
    return person.name === "Yaser" || person.name === "Ajmal";
}

const found = timesheet.filter(isYaserOrAjmal);

for(const person of found){
    let total = 0
    for (const dayHours of person.hours){
        total+= dayHours;
    }

    console.log(`${person.name}: ${total}`);
} */

/* let styles = [
    "Jazz",
    "Blues",
];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles); */


// Splice
// arr.splice(start, deleteCount, items, items ...)
/* let fruits = [
    "Apple", 
    "Banana", 
    "Cherry", 
    "date",
];

fruits.splice(1, 1, "Blackberry", "Mango");

console.log(fruits); */

/* let arr = ["I", "study", "Javascript", "right", "now"];

arr.splice(0,3, "Lets", "dance");

console.log(arr); */

/* let arr = ["I", "study", "Javascript", "right", "now"];

let removed = arr.splice(0,2);
console.log(arr);
console.log(removed); */


// negative indexing

/* let arr = [
    1,2,5
];

arr.splice(-1, 0, 3, 4,);
console.log(arr); */




// Slice 

/* let fruits = [
    "apple",
    "banana", 
    "cherry", 
    "date"
];

let newFruit = fruits.slice(1,3);
console.log(newFruit); */


//Concat


/* let arr = [1,2];

let arr2 = arr.concat([3,4,5]);

console.log(arr);
console.log(arr2); */

/* let veg = [
    "salad",
    "cauliflower",
    "carrot",
];

let fruits = [
    "mango",
    "date", 
    "cherry",
];

let vegFruit = veg.concat(fruits);

console.log(veg);
console.log(fruits);
console.log(vegFruit); */

// Iterate: forEach

/* const fruits = [
    "apple", "banana", "cherry",
];

function show(fruit, index){
    console.log(`${index}: ${fruit}`);
}

fruits.forEach(show); */

/* const fruits = [
    "apple", "banana", "cherry",
];
function show(index, fruit) {          // names swapped
    console.log(`${index}: ${fruit}`);
}

fruits.forEach(show); */

/* let fruits = [
    "apple",
    "mango", 
    "cherry", 
    "date",
];

function showIndexOfArray(item, index){
    console.log(`${item}, is at index:${index}`);
}
fruits.push("Blackberry");
fruits.forEach(showIndexOfArray); */

/* let fruits = [
    "apple", "banana", "cherry", "date"
];

fruits.splice(1,2, "fig");

console.log(fruits); */

/* let fruits = [
    "apple", "banana", "cherry", "date"
];

let lastTwo = fruits.slice(2,);
console.log(fruits);
console.log(lastTwo); */

/* let fruits = [
    "apple", "banana", "cherry", "date",
];
let basket = [
    "fig", "grape"
];

console.log(basket.concat(fruits, "pear"));
console.log(fruits); */

/* let fruits = [
    "apple", "banana", "cherry", "date",
];

function showNumbered(item, index){
    console.log(index+1+"." + " " + item);
}

fruits.forEach(showNumbered); */

/* const hours = [8,7,9,8,6];

let total = 0;
function showTotal(item, index){
    total += item;
}

hours.forEach(showTotal);

console.log(`Total: ${total}`); */


// Indexof/lastindexOf and includes


/* let fruits = [
    "apple", "banana", "cherry", "date",
];

console.log(fruits.includes("apple"));

function showItem(item){
    return item.startsWith("apple") || item.startsWith("Apple");
}

const filtered = fruits.filter(showItem);
console.log(filtered[0]);

console.log(fruits.indexOf("apple"));

 */

/* 
let fruits = [
    "apple", "banana", "cherry", "date",
];

if(fruits.includes("apple")){
    const index = fruits.indexOf("apple");
    console.log(`Found ${fruits[index]} at index: ${index}`);
} else {
    console.log(`apple or Apple is not on the list.`);
} */



/* let fruits = [
    "apple", "banana", "cherry", "cherry",
];

if (fruits.includes("apple")) {
    const index = fruits.indexOf("apple");
    console.log(`${fruits[index]} is at index: ${index}`);
} else {
    console.log("Apple is not found");
} */

/* function greet(name) {
    console.log(`Hello, ${name}`);
}

greet("Yaser"); */

/* function greet (name){
    return `Hello ${name}`;
}

console.log(greet("Yaser"));
 */

/* function isEven(num) {
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
} */

/* const numbers = [1,2,3,4,6];
let count = 0;
for (let i = 0; i<numbers.length; i++){
    if (isEven(numbers[i])){
        count++;
        // console.log(numbers[i]);
    }
}
console.log(count); */

/* function countEvens(arr) {
    let count = 0;

    for(i = 0; i<arr.length; i++){
        if(isEven(arr[i])){
            count++;
        }
    }
    return count;
}

console.log(countEvens([1,2,3,4,5,6,7,8,9])); */
