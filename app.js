
var http = require('http');

//Dummy Api.
// var root = 'http://jsonplaceholder.typicode.com';

var root = 'http://188.166.152.118';

// var photos = root + '/comments'; 

var messages = root + '/messages.json';

var request = http.get(messages, (response) => {
  console.log(response.statusCode);
  // consume response body
  var body = "";
  
  response.on('data', function (chuck) {
      //Add up all the body parts.
      body += chuck;  
          
});

response.on('end', function () {
    
        var json = JSON.parse(body);
    
        console.dir(json);   
        
        //tye of the body
        console.log(typeof json);    
   });
   
  response.resume();
});

var error = request.on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});