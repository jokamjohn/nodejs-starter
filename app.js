
var http = require('http');

var username = "chalkers"

var request = http.get('http://www.google.com/index.html', (response) => {
  console.log(response.statusCode);
  // consume response body
  response.on('data', function (chuck) {
    console.log("BODY: " + chuck)
})
  response.resume();
});

var error = request.on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});