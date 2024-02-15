function palindrome(num) {
          const numStr = num.toString();
          const reverse = numStr.split('').reverse().join('');
          return numStr === reverse; // Correcting the comparison operator from '=' to '==='
      }

      console.log(palindrome(121)); // Output: true
