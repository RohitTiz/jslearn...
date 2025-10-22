import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <h1> heyy<h1/>
`

/// RANDOM NUMBER MATHS
// const min = 10 ;
// const max = 20 ;
// console.log(Math.floor(Math.random() *(max-min +1))+min)
//  ///////////////////////////////////////////////////////////////////////////////////////////////

// let myDate = new Date();
// console.log(myDate.toDateString)

// const jsUser ={
//   name : "rohit",
//   age : 89
// }

// console.log(jsUser.name)
// console.log(jsUser["name"])

// const Course ={

//   courseName: "julo",
//   courseInst : "mia"

// }

// const {courseInst} =Course

//+++++++++++++++++++++++++++++++++ control flow +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.........const score = 200 basic operators < , > ,<= , >= , == , != ,=== , !==

// if (score>100){
//   const power = "fly"
//   console.log(`user power: ${power}`);
// }


//2..........implicit scope 
const balance = 400
// if (balance >500) console.log("test");

// 3......... else if code 
// if(balance <500){
//   console.log("less than 500")
// }
// else if(balance<750){
//   console.log("less than 750")
// }
// else if(balance<1000){
//   console.log("less than 1000")
// }
// else{
//   console.log("more than 1000")
// }

// 4...........switch case 

// switch (key){
//   case value :
//     break ;
//   default:
//     break;
// }

// exampple 
// const month = 3;

// switch(month){
//   case 1:
//     console.log("jan")
//     break;

//   case 2:
//     console.log("feb")
//     break;

//   case 3:
//     console.log("mar")
//     break;

//   case 4:
//     console.log("apr")
//     break;

//   case 5:
//     console.log("may")
//     break;

//   default:
//     console.log("default case matched")  
//     break;
// }

// 5...........truthy and falsy 
// ye wo values hai jisse ham true or false mn lete hai 

// falsy values 
 // false , 0 , -0 , bigint 0n , "" , null , undefined , Nan 

// truth values 
// " 0 " , " false ", " " , [] , {} , function(){}

// 6........nullish coalescing operator (?? ): null undefinded 


// example 
// let val1 ;
// val1 = null ??6
// console.log(val1)

// 7 terniary operator 
// condition  ? true : false 

// example 
// const iceteaprice = 100
// iceteaprice >= 80 ? console.log("more than 80") : console.log("less than 80")




//+++++++++++++++++++++++for loop++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for (let index = 0; index < 10; index++) {
//   console.log(index)
  
// }

// +++++++++++++++++++++++for of loop  <works on array and maps>  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const arr =[1,2,3,4,5]

// for (const num of arr) {
//   console.log(num);
// }

// const greeting ="sugar mommy"

// for (const greet of greeting) {
//   console.log(greet)
  
// }

// maps  
// 1. holds unique value 
// 2. and in inserted order 

// const map = new Map()
// map.set("in","india")
// map.set('usa',"america")
// map.set('kl',"krela")



// for (const mapu of map) {
//   console.log(mapu)
  
// }

// for (const [mapuus] of map) {
//   console.log(mapuus)
// }

//+++++++++++++++++++++++++++for in loop < works over objects > ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// maps cant be used in for in loop 
// const shila = {
//   'name' : "jiya",
//   age : 21

// }

// for (const key in shila) {
//   console.log(`key is ${key} and value is ${shila[key]}`)  
// }

//++++++++++++++++++++++++=for each loop+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const coding= ["java","python","js","ruby","c++"]


// // one way of printing 
// coding.forEach( function (item){
//   console.log(item)
// })

// // call back function by arrow function 
// coding.forEach( (item) => {
//   console.log(item)
// })

/////////////////////////// array of objects using for each 

// const hero =[
//   {
//     heroname : "superman",
//     power : "chudai"
//   },
//   {
//     heroname : "flash",
//     power : "bhagna"
//   },
//   {
//     heroname : "batman",
//     power : "raven"
//   },
//   {
//     heroname : "spiderman",
//     power : "mj"
//   }
// ]

// hero.forEach( (item) => {
  
//   console.log(`${item.heroname} ki power ${item.power} `)

// })

const myNum =[1,2,3,4,5,6,7,8,9]

// const mynumbers = myNum.filter( (num) => num> 7 )
// console.log(mynumbers)


// // if we use scope 
// const mynumber = myNum.filter( (num) => { return num> 5} )
// console.log(mynumber)

// const newnum = myNum.map( (num ) => num +10)
// console.log(newnum)

// //++++++++++++++++chaining +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const nummu =myNum.map( (num ) => num*10)
//                   .map((num) => num + 1)
//                   .filter((num) => num > 30)

// console.log(nummu)

//+++++++++++++++++++++++++++++==reduce +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// using normal function style 
// const mytotal = myNum.reduce( function( acc, currval){
//   return acc + currval
// }, 0)

const mytotal = myNum.reduce( (acc, curr) => acc + curr ,0)

console.log(mytotal)