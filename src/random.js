var maybePromise = Math.random() > 0.5 ? 10 : Promise.resolve(10);
var definitelyPromise = Promise.resolve(maybePromise);
// equivalent to
var definitelyPromise = new Promise(function (fulfill, reject) {
  if (isPromise(maybePromise)) {
    maybePromise.then(fulfill, reject);
  } else {
    fulfill(maybePromise);
  }
});