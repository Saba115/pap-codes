

const myFunctionOne = () => {
  const myFunctionTwo = () => {
    console.log('Hi');
  }

  myFunctionTwo();
}

myFunctionOne();




console.log('Hi'); // 3 Inside myFunctionTwo find console.log
myFunctionTwo() // 2 Inside myFunctionOne find myFunctionTwo
myFunctionOne() // 1 Find myFunctionOne first
// CALL STACK


*Asynchronous*

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer);