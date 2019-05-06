var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };


function getHTML (options, callback) {



  /* Add your code here */
  https.get(options, function (response) {

    var body = '';
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      console.log('Chunk Recieved. Length: ', chunk.length);

      body += chunk + '\n'
      callback(body);

    })

    response.on('end', function () {
      console.log('Response Stream Complete.');
      return body;
    })


  })

}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);