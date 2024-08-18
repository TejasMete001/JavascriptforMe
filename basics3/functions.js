function sayMyName(){
   console.log("T");
   console.log("E");
   console.log("J");
   console.log("A");
   console.log("S");
}

// sayMyName();

// function addTwoNumbers(num1,num2){
//    console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){
   // let res=num1+num2;
   // return res;
   return num1+num2;
}

const res=addTwoNumbers(3,5)

console.log("result",res);

function loginUserMessage(username="tejas"){
   if(!username){
      console.log("please enter a username ");
      return;
   }
   return `${username} just logged in.`
}

// console.log(loginUserMessage("tejas"));
// console.log(loginUserMessage("hitesh"));

function calculateCarPrice(val1,val2,...num1){
   return num1;
}

console.log(calculateCarPrice(200,400,500,2000));

const user = {
   username:"tejas",
   prices:200
}

function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobjec(user)
handleObject({
   username:"sam",
   price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
   return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

