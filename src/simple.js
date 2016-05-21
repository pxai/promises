
exports.hello = function (msg) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
      setTimeout(function () {
            if (msg.length > 0) {
                resolve(msg);
            } else {
                reject(Error('Msg not valid'));
            }
        }, 1000);
  });
  
}





exports.hello('Epa').then(function (msg) {
   console.log('Ok, mesg is: ' + msg); 
}, function (error) {
    console.log(error);
});

exports.hello('').then(function (msg) {
   console.log('Ok, mesg is: ' + msg); 
}, function (error) {
    console.log(error);
});