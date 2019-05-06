var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {

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

getAndPrintHTML();