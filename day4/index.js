// Question 10
// Bashar , 18 April 2024
// Print your favourite number
var fav_num = 56;
console.log("My favourite number is ".concat(fav_num, "."));
// Bashar , 18 April 2024
// Remove white spaces
var nam2 = " \t\n Lechetlier \t\n ";
console.log(nam2);
console.log(nam2.trim());
// Question 11
var names = ["saad", "mahad", "farzan"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// OR
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Question 12
var message = "is a group partner";
for (var i = 0; i < names.length; i++) {
    console.log(names[i], message);
}
// OR
for (var i = 0; i < names.length; i++) {
    console.log("Hello ".concat(names[i], " is a group partner"));
}
