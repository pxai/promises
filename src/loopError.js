
exports.inc = function (num) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
      setTimeout(function () {
            if (num > 0) {
                resolve(num);
            } else {
                reject(Error('Number not valid'));
            }
        }, 1000);
  });
  
}





exports.inc(10).then(function (n) {
   console.log('Ok, number is: ' + n);
   return exports.inc(--n);
}, function (error) {
    console.log(error);
}).then(function (n) {
   console.log('Ok, number is: ' + n);
});

/*
exports.inc(0).then(function (n) {
   console.log('Ok, number is: ' + n); 
}, function (error) {
    console.log(error);
});*/