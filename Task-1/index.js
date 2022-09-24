//console.log("Hi! Saba here....");

// const http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(3000);

// const fs = require('fs');

// fs.writeFile('file.txt','write hello world (write function)',function(err,data){
//     if(err) throw err;
//     console.log(data);
// })

// fs.readFile('file.txt', 'utf8', function(err, data) {
//   if (err) throw err;
//   console.log(data);
// });


// Class-2 Task
//nodejs built in packages

const os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Host Name:"+ os.hostname());
console.log("Name of OS:"+os.type());
console.log("User Info:"+os.userInfo());

const myInt = setInterval(function () {
    console.log("Hello");
}, 5000);


//Sorry for late submission