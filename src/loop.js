
Promise.prototype.thenReturn = function(value) {
    return this.then(function() {
        return value; 
    });
};

exports.inc = function (num) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
      setTimeout(function () {
                console.log('Number is ' + num);
                resolve();
        }, 1000);
  });
  
}


var len = 10;
var n = 0;

exports.inc(0).then(function repeat(n) {
   console.log('Ok, number is: ' + n);

    if (n < len) {              // The post iteration increment
        return exports.inc(n).thenReturn(n + 1).then(repeat);
    }
});

/*
exports.inc(0).then(function (n) {
   console.log('Ok, number is: ' + n); 
}, function (error) {
    console.log(error);
});*/