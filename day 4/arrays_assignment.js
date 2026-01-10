let num = [1, 2, 3, 4, 5];

console.log(num); // print entire array

// print only 1st element in array
console.log(num[0]);

// print last element in array
console.log(num[num.length - 1]);

// print middle element in array
console.log(num[(num.length -1) / 2]);

//print first, middel and last elm
console.log(num[0]);
console.log(num[(num.length -1) / 2]);
console.log(num[num.length - 1]);

// mix data type
let data = [1, 2, true, false, "js", null];
console.log(data);

// make a array for companies
let companies = ["facebook", "google", "microsoft", "apple", "ibm", "oracle", "amazon"];

// print array 
console.log(companies)

//print the num of companies in array
console.log(companies.length)

//print first, middel and last companies
console.log(companies[0]);
console.log(companies[(companies.length -1) / 2]);
console.log(companies[companies.length - 1]);

// print out each companies using for loop
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

//print each companies name to uppercase and print them using for loop
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i].toUpperCase());
}

//print the array like as a sentence; facebook, google, microsoft, apple, ibm, oracle and amazon are big IT companies.
let lastelement = companies.pop();
console.log(companies + " and " + lastelement + "are big it companies"); 

//sort the array using sort() method company cantaing o 


//reverse the array using reverse() method
companies.reverse();
console.log(companies);

//slice out the first 3 companies from the array
let firstThree = companies.slice(0, 3);
console.log(firstThree);

//slice out the last 3 companies from the array
let lastThree = companies.slice(-3);
console.log(lastThree);

//slice out the  middle it company from the array
let middelelm = companies.slice(companies.length -1) / 2;
console.log(middelelm);
