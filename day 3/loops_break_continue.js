// for, while, do-while, break and continue

let var_name = "random value";
let result = "";
for (i =0; i < var_name.length; i++) {
    result = result + ` ${i}-${var_name[i]},` // var_name[0]=r
}

console.log(result);

//vertical lines

let result2 = "";
for (i = 1; i < 6; i++) {
    console.log(i);
    result2 += i;
}
console.log(Number(result2));

//horizontal lines with break

let result3 = "";
for (i = 1; i < 6; i++) {
    console.log(i);
    if (i == 2) break;
    result3 += i;
}
