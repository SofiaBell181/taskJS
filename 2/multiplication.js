// -------------- MULTIPLICATION ------------ //

// task 1

function multiply(a, b) {
    let num1 = a.split('');
    let num2 = b.split('');
    let arr = [];
    for (let i = 0; i < num1.length; i++) {
       for (let j = 0; j < num2.length; j++) {
          let mult = num1[i] * num2[j];
          arr[i + j] = (arr[i + j]) ? arr[i + j] + mult : mult;
       }
    }
    for (let i = 0; i < arr.length; i++) {
       let num = arr[i] % 10;
       let move = Math.floor(arr[i] / 10);
       arr[i] = num;
       if (arr[i + 1])
          arr[i + 1] += move;
       else if (move != 0)
          arr[i + 1] = move;
    }
    return arr.reverse().join('');
 }
 
 console.log((multiply('15', '26')))
 
 
 // task 2 
 
 let p1 = BigInt(1000000000) * BigInt(123456789) + BigInt(123456789)
 let p2 = BigInt(1000000000) * BigInt(987654321) + BigInt(987654321)
 
 console.log(`BigInt: =${p1 * p2}`);