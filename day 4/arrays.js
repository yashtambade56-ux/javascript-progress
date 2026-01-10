let odd_numbers = [1, 2, 3, 4, 5];
let even_numbers = [1, 2, 3, 4, 5, 6]

console.log(even_numbers); // print entire array

// print only 1st element in array
console.log(even_numbers[0]);

// print last element in array
console.log(even_numbers[even_numbers.length - 1]);

// print middle element in array
console.log(odd_numbers[(odd_numbers.length -1) / 2]);

// print middle element if even
console.log(even_numbers[even_numbers.length / 2 - 1]);

// ------mix data type------

let data = [1, 2, true, false, "js", null];
let companies = ["facebook", "google", "microsoft", "apple", "ibm", "oracle", "amazon"];

console.log(data); // print entire array

let lastelement = companies.pop();
console.log(lastelement); // print last element
let result = companies.join(", "); // join array elements as string
console.log(result + " and " + lastelement); // print joined string with last element
