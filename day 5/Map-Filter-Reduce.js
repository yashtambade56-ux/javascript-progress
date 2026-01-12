let nums = [1, 2, 3, 4, 5];
nums.reduce((acc, val) => acc + val, 0);

let result = 0
for (let i = 0; i < nums.length; i++) {
    result += nums[i];
}

let new_arr = [];
for (let i = 0; i < nums.length; i++) {
    new_arr.push(nums[i] + 2);
}
console.log(myMap(nums, (i) => i + 2))
console.log(new_arr);
// nums.map((num)=>num+2)
function myMap(array, callback){
    let new_array = []
// apply callback
    for (i=0; i<array.length; i++){
      const mapped = callback(array[i], i, array)
      new_array.push(callback(array[i]))
    }
    return new_array;
}

let arr = [10, null, undefined, 9]
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log(arr.filter((valueATIndex) => typeof arr[valueATIndex] === typeof 0));

// make my filter
function myFilter(array, callback){
    let new_array = []
    for (i=0; i<array.length; i++){
        if (callback(array[i], i, array)){
            new_array.push(array[i])
        }
    }
    return new_array;

}
console.log(myFilter(arr,(valueATIndex) => typeof arr[valueATIndex] === typeof 0));

// make my redues

function myReduce(array, callback){
    let new_array = []
    for (i=0; i<array.length; i++){
        if (callback(array[i], i, array)){
    }
}
    return result;
}   
console.log(myReduce(arr,(valueATIndex) => typeof arr[valueATIndex] === typeof 0));
