/**
 * Loop with delay
 */

exports.inc = function (num) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
      var dl = Math.round(Math.random() * 1000);
      setTimeout(function () {
                console.log('Number is ' + num + '('+dl+')');
                resolve(num + 1);
        }, dl);
  });
  
}


var len = 10;
var n = 0;

exports.inc(0).then(function repeat(n) {
   console.log('Ok, number is: ' + n);
    if (n < len) {              
        return exports.inc(n).then(repeat);
    }
});
