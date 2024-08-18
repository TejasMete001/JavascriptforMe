//Immediately Invoked Function Expression (IIFE)
//many times global scope causes pollution in the code so to avoid this pollution we use
//IIFE which immediatly invokes the function

(function fun(){
   //named IIFE
   console.log(`DB CONNECTED`);
}) ();

( (name) =>{
   console.log(`DB Connected two ${name}`);
} )('tejas')
