// DAY 4

// Question 10

// Bashar , 18 April 2024
// Print your favourite number
let fav_num = 56;
console.log(`My favourite number is ${fav_num}.`)

// Bashar , 18 April 2024
// Remove white spaces
let nam2 = " \t\n Lechetlier \t\n "
console.log(nam2);
console.log(nam2.trim());

// Question 11

let names = ["saad","mahad","farzan"]

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// OR

for (let i = 0; i<names.length ; i++){
    console.log(names[i]);
    
}

// Question 12

let message = "is a group member"

for (let i = 0; i<names.length ; i++){
    console.log(names[i],message );
}

// OR

for (let i = 0; i<names.length ; i++){
    console.log(`${names[i]}, is a group member` );
}
