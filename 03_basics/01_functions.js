function myFunction(){
    console.log("hii");
    console.log("my name is Deb");
    console.log("Im a good boy");
}
myFunction()

function addTwoNumber(number1, number2){
    console.log(number1+number2);
}

addTwoNumber(3,3)
addTwoNumber(2,"4")
addTwoNumber(6,null)

function AddTwoNumber(number1, number2){
    let result = number1 + number2
    return result
}

const result = AddTwoNumber(4,6)
console.log("Result :",result);


function addMultiplenumbers(...num1){          /// ...add <---- spread or rest opetator
   return num1
}
console.log(addMultiplenumbers(123,456,789));

function addMultiplenumbers2(val1,val2,...num1){          /// ...add <---- spread or rest opetator
    return num1
 }
 console.log(addMultiplenumbers2(123,456,789,1234));


 const user = {
    username : "papun",
    price : 699
 }

 function handleObject(anyobject){
    console.log(` Username is ${anyobject.username} and price is ${anyobject.price}`);
 
}
handleObject(user);


const myNewArray = [100,200,300]
