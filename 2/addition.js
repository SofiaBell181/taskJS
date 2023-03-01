// -------------- ADDITION ------------ //


// task 1
function task5(x, y) {

    let result = [];
    let num1 = x.split('').reverse();
    let num2 = y.split('').reverse();
    let maxLength = Math.max(num1.length, num2.length);
 
    let carry = 0;
    for (let i = 0; i < maxLength; i++) {
       let sum = (+num1[i] || 0) + (+num2[i] || 0) + carry;
       carry = sum >= 10 ? 1 : 0;
       result.push(sum % 10);
    }
    if (carry) {
       result.push(carry);
    }
    return result.reverse().join('');
 }
 
 console.log(task5('76561197960265728', '912447736'))
 
 
 // task 2 
 
 const sum = BigInt(76561197960265728) + BigInt(912447736);
 console.log(sum.toString());
 
 
 // task 3
 
 function task52(num1, num2) {
    if (num1.length > num2.length) {
       let difference = num1.length - num2.length;
       for (let i = 0; i < difference; i++) {
          num2 = '0' + num2;
       }
    } else {
       let difference = num2.length - num1.length;
       for (let i = 0; i < difference; i++) {
          num1 = '0' + num1
       }
 
    }
 
    let numA = num1.split('');
    let numB = num2.split('');
 
    console.log((numA), numB);
    let res = 0;
    let carry = 0;
    let arrNum = [];
    for (let i = numA.length - 1; i >= 0; i--) {
       res = parseInt(numA[i]) + parseInt(numB[i]) + carry;
 
       if (res >= 10) {
          carry = 1;
          res = res - 10
       } else {
          carry = 0
       }
 
       arrNum.push(res)
    }
    return arrNum.reverse().join('')
 }
 console.log(task55('76561197960265728', '912447736'))