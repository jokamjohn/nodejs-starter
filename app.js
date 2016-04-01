
var http = require('http');

var username = "chalkers"

var request = http.get('http://www.google.com/index.html', (response) => {
  console.log(response.statusCode);
  // consume response body
  var body = "";
  
  response.on('data', function (chuck) {
      //Add up all the body parts.
      body += chuck;
      
    console.log("BODY: " + body)
    
    //tye of the body
    console.log(typeof body)
})
  response.resume();
});

var error = request.on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});