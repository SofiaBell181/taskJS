
let text = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены."

function task2(text) {
    let result2 = text.split(' ').filter(el => el.length > 0).map(item => {
        if(item.length > 1 && item.includes(',') && item.includes('в')) {
            let ress= item.replace(',' , ', ')
            return ress + ' '
        }
    
        if(item.length > 1 && item.includes('.')) {
            let ress = item.replace('.' , '. ')
            return ress + ' '
        }
    
        if(item === 'должно' || item === 'пробелы') {
            return item
        }
    
        else return item + ' '
    });

    return result2.join('')
}

console.log(task2(text))