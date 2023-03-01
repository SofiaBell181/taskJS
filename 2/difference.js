// -------------- DIFFERENCE ------------ //
// task 1
let first = '76561197960265728';
let second = '12345678';
if (first.length >= second.length) {
   let difference = first.length - second.length;
   for (let i = 0; i < difference; i++) {
      second = '0' + second;
   }
   console.log(findDef(first, second));
} else {
   let difference = second.length - first.length;
   for (let i = 0; i < difference; i++) {
      first = '0' + first;
   }
   // findDef(second, first);
}
// task 2 
function findDef(first, second) {
   let carry = 0;
   arr = []
   let numA = first.split('');
   let numB = second.split('');
   console.log(numA, numB)
   for (i = numA.length - 1; i >= 0; i--) {
      let temp = Number(numA[i]) - Number(numB[i]);
      if (temp < 0) {
         temp = Number(numA[i]) - carry + 10 - Number(numB[i]);
         carry = 1
      } else {
         temp = Number(numA[i]) - carry - Number(numB[i]);
         carry = 0;
      }
      arr.push(temp)
   }
   return arr.reverse().join('')
}
// task 3
let start = BigInt('1234567890123456789');
let end = BigInt('1234567890123456799');
let result = end - start;
// console.log(result)