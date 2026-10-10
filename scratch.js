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

let guests = [
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

for(const guest of guests){
    if (guest.age > 26){
        console.log(`${guest.name}, please go to hall 1`);
    } else {
        console.log(`${guest.name}, please go to hall 2`);
    }
}


