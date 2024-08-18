// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
   name:"Tejas",
   "full name":"Tejas Mete",
   [mySym]:"myKey1",
   age:23,
   location:"Nagpur",
   email:"tejasmete121@gmial.com",
   isLoggedIn:false,
   lastLoginDays:["Monday","Saturday"],
}

// console.log(JsUser.email)
// console.log(JsUser.age);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(JsUser["full name"]);

JsUser.email = "tejasmete003@gmail.com"
// Object.freeze(JsUser);
JsUser.email = "tejas@gmail.com"
// console.log(JsUser);

JsUser.greeting=function(){
   console.log("Hello js User");
}

JsUser.greetingTwo = function(){
   console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
