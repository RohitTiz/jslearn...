import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <h1> heyy<h1/>
`
const min = 10 ;
const max = 20 ;
console.log(Math.floor(Math.random() *(max-min +1))+min)