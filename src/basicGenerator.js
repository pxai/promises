// Example of function with generation
function* count(){
  for (var i = 0; true; i++) {
      // This is stops the execution
    yield i;
  }
}

for (var x of count()) {
  console.log(x);
}