const promiseOne = new Promise(function(resolve,reject){
   //Do and async task
   //DB calls,cryptography,network calls
   setTimeout(function(){
      console.log('Async task is complete');
      resolve()
   },1000)
})

promiseOne.then(function(){
console.log("promise consumed");
})

new Promise(function(resolve,reject){
   setTimeout(function(){
      console.log("Async task 2");
      resolve();
   },1000)
}).then(function(){
   console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
      resolve({username:"Tejas",email:"tejasmete121@gmail.com"})
   },1000)
})

promiseThree.then(function(user){
console.log(user);
})

const promiseFour =new Promise(function(resolve,reject){
   setTimeout(function(){
      let error=true
      if(!error){
         resolve({username:"Tejas",password:"123"})
      }else{
         reject('EROR:something went wrong')
      }
   },1000)
})

const username =promiseFour.then((user)=>{
  console.log(user);
  return user.username
}).then((username)=>{
console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(()=>{
   console.log("the promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve,reject){
   setTimeout(function(){
      let error=true
      if(!error){
         resolve({username:"/Mete",password:"1234"})
      }else{
         reject('EROR:js file went wrong')
      }
   },1000)
})

async function consumePromiseFive(){{
   try {
      const response=await promiseFive
      console.log(response);
   } catch (error) {
      console.log(error);
      
   }
}}

consumePromiseFive();

// async function getAllUsers(){
//  try {
//    const response = await fetch('https://api.github.com/users/TejasMete001')
//    // console.log(response);
    
//      const data =await response.json()
//      console.log(data);
//  } catch (error) {
//    console.log("E",error);
//  }
// }
//getAllUsers();

fetch('https://api.github.com/users/TejasMete001').then((response)=>{
 return response.json()
})
.then((data)=>{
   console.log(data);
   
})
.catch((error)=>{
   console.log(error);
})