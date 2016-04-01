
var http = require('http');

//Dummy Api.
// var root = 'http://jsonplaceholder.typicode.com';

var root = 'http://188.166.152.118';

// var photos = root + '/comments'; 

var messages = root + '/messages.jso';

var request = http.get(messages, (response) => {
    console.log(response.statusCode);
    // consume response body
    var body = "";

    response.on('data', function(chuck) {
        //Add up all the body parts.
        body += chuck;

    });

    response.on('end', function() {

if (response.statusCode === 200) {
    
        try {
            var json = JSON.parse(body);
        }
        catch (error) {
            printError(error);
        }

        // console.dir(json);   

        //tye of the body
        console.log(typeof json);
}
else{
    printError( { message: "There was an error retreiving the page " + "(" + http.STATUS_CODES[response.statusCode] + ")"})
}
    });

    response.resume();
});

//Print error
function printError(error) {
    console.log("error is: " + error.message);
}

 request.on('error', printError);