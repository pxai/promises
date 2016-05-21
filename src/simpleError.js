
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
 console.log('Case 1 ---------------- ');
 console.log('Ok, mesg is: ' + msg); 
}, function (error) {
    console.log(error);
}).then(function () {
    console.log('It worked');  
});

// With case failure we don't need catch
exports.hello('').then(function (msg) {
   console.log('Ok, mesg is: ' + msg); 
}, function (error) {
    console.log('Case 2 ---------------- ');
    console.log(error);
}).then(function() {
    console.log('It worked');  
}).catch(function(err) {
  // Catch any error that happened along the way
    console.log(err.message);
}).then(function() {
  console.log('Im done');  
});

// With case failure we don't need catch
exports.hello('').then(function (msg) {
   console.log('Ok, mesg is: ' + msg); 
}).then(function() {
    console.log('It worked');  
}).catch(function(error) {
    console.log('Case 3 ---------------- ');
    // Catch any error that happened along the way
    console.log(error.message);
}).then(function() {
  console.log('Im done');  
});