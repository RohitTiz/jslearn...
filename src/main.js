import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <h1>Heyyyy</h1>`

const requestUrl = 'https://randomuser.me/api/'
const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)
xhr.onload = function() {
  console.log('Response:', xhr.responseText)
}
xhr.send()
