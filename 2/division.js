// -------------- DIVISION ------------ //

function divide(x, y) {
    let sign = 1;
    if (x[0] === '-' && y[0] !== '-') {
      sign = -1;
      x = x.substring(1);
      
    } else if (x[0] !== '-' && y[0] === '-') {
      sign = -1;
      y = y.substring(1);
      
    } else if (x[0] === '-' && y[0] === '-') {
      x = x.substring(1);
      y = y.substring(1);
    
    }
    let result = 0;
    let temp = 0;
    
    for (let i = 0; i < x.length; i++) {
      temp = temp * 10 + parseInt(x[i]);
      let count = 0;
    
      while (temp >= parseInt(y)) {
        temp = temp - parseInt(y);
        count++;
      }
    
      result = result * 10 + count;
    }
    return sign * result;
    }
    
    // console.log(divide('123456789', '99'))
    