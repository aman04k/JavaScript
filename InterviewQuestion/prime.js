function isPrime(num) {
  if (num < 2) {
    return `${num} is not prime`;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} is not prime`;
    }
  }

  return `${num} is prime number`;
}

console.log(isPrime(25)); // Output: 25 is not prime
console.log(isPrime(29)); // Output: 29 is prime number
