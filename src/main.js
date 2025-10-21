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

// const score = 200

// if (score>100){
//   const power = "fly"
//   console.log(`user power: ${power}`);
// }


//implicit scope 
const balance = 400
// if (balance >500) console.log("test");

if(balance <500){
  console.log("less than 500")
}
else if(balance<750){
  console.log("less than 750")
}
else if(balance<1000){
  console.log("less than 1000")
}
else{
  console.log("more than 1000")
}