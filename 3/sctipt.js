class Item {
    constructor(name, price, quantity, description) {
        this.name = name,
        this.price = price,
        this.quantity = quantity,
        this.description = description
    }
 }
 
 let products = [
    new Item('Applefd', 2, 6, 'An apple abc'),
    new Item('fdOrange', 5, 5, 'The orange'),
    new Item('fdBanana', 2, 5, 'A banana is an elongated'),
    new Item('Pearfd', 2, 8, 'Pears are abc')
 ]
 
 const str1 = 'name-contains-fd&price-=2&quantity->5&description-ends-abc';
 // const str1 = 'name-starts-fd&quantity-=5';
 
 const filterItem = (str1, products) => {
    const string1 = str1.split('&');
 
    let strArr = string1.map(item => {
       return item.split('-');
    })
 
    let newString = [];
 
    for (i = 0; i = strArr.length; i++) {
       let el = strArr.shift();
       for (let k = 0; k <= el.length - 1; k++) {
          if (el[k].includes('=') || el[k].includes('>')) {
             el[k] = el[k].split('')
          }
       }
       let resEl = el.flat();
       newString.push(resEl);
    }
 
    const newArr = products.filter(value => {
       if (newString.length >= 4) {
          if ((value.name.endsWith(newString[0][2]) &&
                value.description.includes(newString[3][2]) &&
                value.price == (newString[1][2]) &&
                value.quantity > (newString[2][2]))) return true
       } else if (newString.length <= 2) {
          if (value.name.startsWith(newString[0][2]) && value.quantity == (newString[1][2])) return true
       }
    })
    return (newArr);
 }
 
 console.log(filterItem(str1, products))