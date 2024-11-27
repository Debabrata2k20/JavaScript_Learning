// Object literals
const mySym = Symbol("key1")
const Jsuser = {
    name : "deb",
    "full name": "Debabrata Sahu",
    [mySym]: "myKey1",
    age:23,
    location :"hyderabad",
    email:"deb@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monady","Friday"],
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);

Jsuser.email="deb10.p@gmail.com"
console.log(Jsuser.email);
// Object.freeze(Jsuser)
Jsuser.email="papun@gmail.com"
console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello JS User");
    
}
console.log(Jsuser.greeting);
