var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };


function getAndPrintHTML (options) {



  /* Add your code here */
  https.get(options, function (response) {

    var body = '';
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      console.log('Chunk Recieved. Length: ', chunk.length);

      body += chunk + '\n'
      console.log(body);
    })

    response.on('end', function () {
      console.log('Response Stream Complete.');
    })


  })

}

getAndPrintHTML(requestOptions);