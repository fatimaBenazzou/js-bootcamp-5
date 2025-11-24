/* Exo 1. Check Even or Odd  */
var num = Number(prompt("Enter a number"));

if (num % 2 === 0) {
  console.log("The number is Even");
} else {
  console.log("The number is Odd");
}

/* Exo 2. Print numbers */
var start = Number(prompt("Enter the starting number"));
var end = Number(prompt("Enter the ending number"));

console.log("Odd numbers between " + start + " and " + end + " :");
for (var index = start; index <= end; index++) {
  if (index % 2 !== 0) {
    console.log(index);
  }
}
