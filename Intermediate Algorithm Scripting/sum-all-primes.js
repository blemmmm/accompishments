// Returns the sum of all prime numbers that are less than or equal to num.

function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return 0;
    }
  }
  return value;
}

function sumPrimes(num) {

  let result = 0;

  for (let i = 2; i <= num; i++) {
    result += isPrime(i);
  }
  return result;

}

sumPrimes(10); // 17