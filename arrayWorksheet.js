//Part 1!
let fruits = ["apple", "banana", "cherry"];
console.log(`the value at index 1 of the fruits array is`, fruits[1]);
console.log(`the total number of items in the fruits array is`, fruits.length);

//Part 2!
let addFruit = fruits.push("orange");
console.log(fruits);

let removedFruit = fruits.pop();
console.log(fruits);
console.log(`removed fruit:`, removedFruit);

let addFruit2 = fruits.push("grape", "watermelon");
let removedFruit2 = fruits.pop();
console.log(fruits);
console.log(`updated length`, fruits.length);

//Part 3!
for (let index = 0; index < fruits.length; index++ ){
    console.log(fruits[index]);
}

for (let index = 0; index < fruits.length; index++ ){
    console.log(fruits[index].toUpperCase());
}

let count = 0;
for (let i = 0; i < fruits.length; i++ ){
    if( fruits[i] === "apple" ){
        count += 1;
    }
console.log(`${fruits[0]} appears ` + count + ` time(s)`);
}

//Part 4!
let cart = [];
let addGrocery = cart.push("Bread", "Milk", "Eggs");
console.log(cart);

let removeGrocery = cart.pop();
console.log(cart);
console.log(`length of the cart is`, cart.length);

let numbers = [1, 2, 3, 4, 5];
//start from end of array, go backwards
for (let number = numbers.length - 1; number >= 0; number--){
    console.log(numbers[number]);
}

//Part 5!
let array1 = ["a", "b", "c", "d"];
let array2= ["red", "green", "blue"];

for(let i = 0; i < 5; i++){
    if( array1.length > array2.length){
        console.log(`array1 has the greater length`);
        break;
    }else{
        console.log(`array2 has the greater length`);
    }
}

//Part 6!
const array = [10, 20, 30, 40, 50, 60];

for(let i = 0; i <= array.length; i+=2){
    const num = array[i];
    if( num % 2 === 0){ 
        console.log(num, `is at an even index`);
    }
    
}

//Part 7!
let studentNames = ["Alice", "Bob", "Charlie"];
let subjectNames = ["Math", "Science"];

let pairing = []; //new array

for(let i = 0; i < studentNames.length; i++){
    for(let subject = 0; subject < subjectNames.length; subject++){
        pairing.push(`${studentNames[i]} - ${subjectNames[subject]}`)
    }
}
console.log(pairing);
//A Nested for loop works by checking if the outer for loop's conditions are still true first
//before going to the inner for loop. The inner loop executes an action inside the outer loop
//each time the outer loop does.