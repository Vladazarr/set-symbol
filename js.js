// 39(1)
// let mySet = new Set([1, 2, 3]);
// console.log("Количество элементов в коллекции Set:", mySet.size);

// 39(2)
// let mySet = new Set([1, 2, 3]);
// let hasThree = mySet.has(3);
// console.log("Наличие элемента со значением 3:", hasThree);
// let hasFour = mySet.has(4);
// console.log("Наличие элемента со значением 4:", hasFour);


// 40
// let mySet = new Set([1, 2, 3, 4, 5]);
// let sum = 0;
// mySet.forEach(function(item) {
//     sum += item;
// });
// console.log("Сумма элементов коллекции Set:", sum);


// 41(1)
// let mySet = new Set([1, 2, 3]);
// let arrayFromSet = Array.from(mySet);
// console.log("Массив из коллекции Set:", arrayFromSet);

// 41(2)
// let myArray = [1, 2, 3, 4, 5];
// let mySet = new Set(myArray);
// console.log("Коллекция Set из массива:", mySet);

// 42
// function removeDuplicates(arr) {
//     let uniqueSet = new Set(arr);
//     let uniqueArray = Array.from(uniqueSet);
//     return uniqueArray;
// }
// let arrayWithDuplicates = [1, 2, 2, 3, 3, 4, 5, 5];
// let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
// console.log("Массив без дублей:", arrayWithoutDuplicates);

// 43
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let set = new Set;
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		set.add(this);
// 	});
// }
// button.addEventListener('click', function() {
// 	for (let elem of set) {
// 		elem.textContent = elem.textContent + '!';
// 	}
// });

// 46
// let elems = document.querySelectorAll('p');
// let elemsArray = Array.from(elems); 
// console.log(elemsArray.slice(1, 3));

// 47
// let test = [
//     [1, 2, 3],
//     {a: 1, b: 2, c: 3},
//     [3, 4, 5],
//     {x: 1, y: 2, z: 3}
// ];

// for (let i = 0; i < test.length; i++) {
//     if (Array.isArray(test[i])) {
//         console.log(`Элемент ${i} является массивом.`);
//     } else {
//         console.log(`Элемент ${i} не является массивом.`);
//     }
// }

// 48
// let elems = document.querySelectorAll('p');
// let elemsArray = Array.from(elems); 
// let slicedElems = elemsArray.slice(1, -1);
// console.log(slicedElems); 


// 53
// let obj = {
//     name: 'John',
//     age: 30,
//     [Symbol('description')]: 'Some description'
// };
// console.log(obj);


// 54
// let mySymbol = Symbol('mySymbol');
// let obj = {
//     [mySymbol]: 'Value of symbol key',
//     regularKey: 'Value of regular key'
// };
// for (let key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         console.log(key + ': ' + obj[key]);
//     }
// }

// 55
// let mySymbol = Symbol('mySymbol');
// let obj = {
//     [mySymbol]: 'Value of symbol key',
//     regularKey: 'Value of regular key',
//     showCurrentTime: function() {
//         let currentTime = new Date();
//         console.log('Current time:', currentTime.toLocaleTimeString());
//     }
// };
// obj.showCurrentTime();

// 56(1)
// let arr = [1, 2, 3];
// arr.push(function() {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum += this[i];
//     }
//     return sum;
// });
// let sum = arr[arr.length - 1].call(arr);
// console.log('Сумма элементов массива:', sum);

// 56(3)
// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// arr.push(function() {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         if (typeof this[i] === 'number') {
//             sum += this[i];
//         }
//     }
//     return sum;
// });
// let sum = arr[arr.length - 1].call(arr);
// console.log('Сумма элементов массива:', sum);

// 57
// let obj1 = { a: 1, b: 2, c: 3 };
// let obj2 = { x: 4, y: 5, z: 6 };
// let obj3 = { foo: 7, bar: 8, baz: 9 };
// function calculateSum(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             sum += obj[key];
//         }
//     }
//     return sum;
// }
// let sumKey = Symbol('sum');
// obj1[sumKey] = function() {
//     return calculateSum(this);
// };
// obj2[sumKey] = function() {
//     return calculateSum(this);
// };
// obj3[sumKey] = function() {
//     return calculateSum(this);
// };
// console.log('Сумма элементов obj1:', obj1[sumKey]());
// console.log('Сумма элементов obj2:', obj2[sumKey]());
// console.log('Сумма элементов obj3:', obj3[sumKey]());

// 58
// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');

// let key = Symbol.keyFor(sym1);
// let key2 = Symbol.keyFor(sym2);
// console.log(key);
// console.log(key2);

// 59(1)
// let map = new Map();
// map.set('key1', 'value1');
// map.set('key2', 'value2');
// map.set('key3', 'value3');
// console.log('Есть ли у Map ключ Symbol.iterator:', map.has(Symbol.iterator)); 

// map[Symbol.iterator] = function() {
//     return this.entries();
// };

// console.log('Есть ли у Map ключ Symbol.iterator после добавления:', map.has(Symbol.iterator)); 

// 59(2)
// let mySet = new Set([1, 2, 3]);
// let hasIteratorKey = mySet[Symbol.iterator] !== undefined;
// console.log(hasIteratorKey);