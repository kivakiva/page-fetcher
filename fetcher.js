/* It should take two command line arguments:

    a URL
    a local file path

It should download the resource at the URL to the local path on your machine. 
Upon completion, it should print out a message like:
 "Downloaded and saved 1235 bytes to ./index.html.""
*/

const request = require('request');
const fs = require('fs')

const args = process.argv.slice(2)
url = args[0];
localFilePath = args[1];

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error('FS error:', err)
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`)
  })
})