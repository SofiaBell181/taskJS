
let rex = 'Текст, в котором слово текст несколько раз встречается и слово тоже';

function task4() {
    let arr = rex.toLowerCase().split(' ');

    let words = arr.map(item => {
        if (item.includes(',')){
            return item.replace(',' , '')
        }

        return item
    });

    let obj = words.reduce(
        (accum, current) => {

          return (typeof accum[current] !== 'undefined') ? 
          { 
            ...accum,
            [current]: accum[current] + 1
          } : 

          { 
            ...accum,
            [current]: 1
          }

        }, {})

        return obj;

}

console.log(task4())


