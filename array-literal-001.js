//Array Literal
const arr = [];
arr[0] = 23;
arr[1] = 24;
arr[2] = 25;
arr[99] = 99;
console.log(arr.length);
console.log(arr);

//length = lastIndex+1
// lastIndex = length-1

let name = [
    "Shakib Abdullah",
    "Ahnaf Khalid",
    "Hebdatullah Sayed",
    "Jone Maccaculam",
];

// if we are reserve a index with this way , this time to tuff remember the last index number
name[4] = "Asif Mahir";

// this way easy to add new index of the last element
name[name.length] = "Mohona Chowdhury";
console.log(name);