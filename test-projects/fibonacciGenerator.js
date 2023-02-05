// FIBONACCI GENERATOR

function fibonacciGenerator(n) {
  let output = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    let additionalOutput =
      output[output.length - 2] + output[output.length - 1];
    output.push(additionalOutput);
  }
  return output;
}

// the n variable will determine the number of objects in the array

console.log(fibonacciGenerator(20));
