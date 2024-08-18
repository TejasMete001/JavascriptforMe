//dates

let myDates =new Date();

// console.log(myDates.toString());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toLocaleTimeString());
// console.log(myDates.toLocaleString());
// console.log(typeof myDates);

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate =new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString());

// let myTimeStamp =Date.now();
// console.log((myTimeStamp));
// console.log((myCreatedDate.getTime()));
// console.log(Math.floor(Date.now()/1000));

let newDate =new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(`Date is ${newDate.getDate()+1} and the day is ${newDate.getDay()}`);

newDate.toLocaleString('default',{
   
   weekday:"narrow",
   hour:"2-digit",
})
