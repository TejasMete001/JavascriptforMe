const user={
   username:"tejas",
   price:999,

   welcomMessage:function(){
      console.log(`${this.username},welcome to website`);
      // console.log(this);
      
   }
}
// user.welcomMessage();
// user.username="sam"
// user.welcomMessage();
console.log(this);

// function fun(){
//    let username="tejas"
//    console.log(this.username);
// }
// fun();

// const fun = function(){
//    let username="tejas"
//    console.log(this.username);
// }
// fun();

const fun = () =>{
   let username="tejas"
   // console.log(this.username);
   console.log(this);
   
}
// fun();


// const addtwo=(num1,num2)=>{
//    return num1+num2;
// }
// const addtwo=(num1,num2)=>  num1+num2;
// const addtwo=(num1,num2)=>  (num1+num2);
const addtwo=(num1,num2)=>  ({username:"tejas"})



console.log(addtwo(3,4));

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()