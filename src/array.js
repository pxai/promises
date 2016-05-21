
function log (message) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
      setTimeout(function () {
                console.log('Message is ' + message);
                resolve();
        }, 1000);
  });
  
}

function showMessages (messages) {
   // promise.all is a builtin function
  return Promise.all(messages.map(log));    
}

showMessages(['hello', 'kaixo']).then(function (results) {
    // results is an array of the values stored in hello and kaixo
    console.log('Done?');
}, function (err) {
    console.log('Error: ' + err);  
});

/*function readJsonFiles(filenames) {
  // N.B. passing readJSON as a function, not calling it with `()`
  return Promise.all(filenames.map(readJSON));
}
readJsonFiles(['a.json', 'b.json']).done(function (results) {
  // results is an array of the values stored in a.json and b.json
}, function (err) {
  // If any of the files fails to be read, err is the first error
});*/