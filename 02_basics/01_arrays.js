const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[2]);

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]);

// // --------- Array Method --------
// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);
// myArr.unshift(8)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()         //Adds all the elements of an array into a string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


console.log("A", myArr);

const mynArr = myArr.slice(1,3)
console.log(mynArr);

console.log("B", myArr);

const mynArr2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(mynArr2);
