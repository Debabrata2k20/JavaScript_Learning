let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myNewDate = new Date(2024,10,26)
console.log(myNewDate.toString());

let myNewDate2 = new Date(2024,10,26,11,36)
console.log(myNewDate2.toString());

let myNewDate3 = new Date("11-26-2024")   /// mm-dd-yyyy
console.log(myNewDate3.toLocaleString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());