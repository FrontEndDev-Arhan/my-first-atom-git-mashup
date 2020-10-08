// 'use strict';
function sum(a,b) {
    return a + b;
}
debug(sum);
sum(1,3);
let i = 3;
try {
  if(i === 3)
  throw new RangeError('do you know how big a number 2, it is a range error you human');
} catch (e) {
  console.log('personal custom made error: ' + e);
} finally {
  console.log('do not bother me, i always run - i am finally.');
}
function onmousedown() {
  console.log('it is a simple function that you just declared on the top of your script main.js');
}
debugger;
onmousedown();

let output = '';
function        getText() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if( this.status === 200 && this.readyState == 4 ) {
      let response = this.responseText;
      let responseHeaders = this.getAllResponseHeaders();
      output += `<p>${response} ${responseHeaders}</p>`;
    }
    document.getElementById('get-text').innerHTML = output;
  }

  xhr.open('GET', './simpleText.txt', true);
  xhr.send();
}

consol.log('wrong name of console'); // check how breakpoints works on uncaught exceptions
// function task(message) {
//     // emulate time consuming task
//     let n = 10000000000;
//     while (n > 0){
//         n--;
//     }
//     console.log(message);
// }
//
// console.log('Start script...');
// setTimeout(
//   () =>
//   task('Download a file.')
//   ,0);
// console.log('Done!');
//
// function power(num, pow) {
//   if (pow == 1) {
//   } else {
//     return num;
//     return num * power(num, pow-1);
//   }
// }
//
// console.log(power(5,3));
//
// const myObj = {};
// let KEY1 = Symbol();
// let KEY2 = Symbol('sym1');
//
//
//
//
//
// myObj.key3 = 'prop3';
// myObj.key4 = 'prop4';
// myObj[KEY1] = 'prop1';
// myObj[KEY2] = 'prop2';
//
// console.log(myObj);
//
// for (let i in myObj) {
//   console.log(`Only enumerable properties are: ${myObj[i]}`);
//   console.log(JSON.stringify({ [Symbol()]: 'prop' }));
//   console.log(JSON.stringify({ key2: 'prop' }));
// }

// document.getElementById('button1').onclick = function() {
//   createButton();
// }
// // TODO: DO A FOR LOOP
//
// // keep creating a button every 3 seconds and keep deleting it every 1.5 seconds
// const createButton = (function() {
//   let btn = document.createElement('BUTTON');
//   btn.innerHTML = 'button to click';
//   btn.setAttribute('class', 'button');
//   document.body.appendChild(btn);
//   let buttons = document.getElementsByClassName('button');
//   return function() {
//       for(let i = 0; i <= 10; i++) {
//           let btn = document.createElement('BUTTON');
//           btn.innerHTML = 'button to click' + ' ' + i;
//           btn.setAttribute('class', 'button');
//           document.body.appendChild(btn);
//           setInterval(() => buttons[i].remove(), 2000);
//     }
//   }})();
// let button = document.getElementById('button');
// button.onclick = function() {
// document.getElementsByTagName('h1').innerText = 'simple heading'; }
// let btnn = document.getElementById('button');
