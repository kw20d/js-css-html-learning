//Arrow Functions
/*let ask = (question, yes, no) =>
    {
        if(confirm(question))
            yes();
        else
            no();
    };

ask( "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);


let isPositive = (number) => number > 0;
console.log(isPositive(7));*/


//Functional Programming
let animals = [
    { name: "Caro", species: "dog"},
    { name: "Hamilton", species: "dog"},
    { name: "Harold", species: "fish"},
    { name: "Ursula", species: "cat"},
    { name: "Jimmy", species: "Fish"},
    { name: "Fluffykins", species: "rabbit"}
];

//Filter
let isDog = animal => animal.species === "dog";
let dogs = animals.filter(isDog);
console.log(dogs);

//Map
let names = animals.map(animals => animals.name + " is a " + animals.species);
console.log(names);

//Reduce
let orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325},
];

let totalAmount = orders.reduce((sum, orders) => sum + orders.amount, 0);
console.log(totalAmount);