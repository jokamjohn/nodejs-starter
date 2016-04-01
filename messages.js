
var http = require('http');

function get(rootUrl) {

    var messages = rootUrl + '/messages.json';

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
                    console.dir(json); 
                }
                catch (error) {
                    printError(error);
                }
               
                //tye of the body
                console.log(typeof json);
            }
            else {
                printError({ message: "There was an error retreiving the page " + "(" + http.STATUS_CODES[response.statusCode] + ")" })
            }
        });

        response.resume();
    });

    //Print error
    function printError(error) {
        console.log("error is: " + error.message);
    }

    request.on('error', printError);
}


module.exports.getMessages = get;