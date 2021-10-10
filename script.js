"use strict";

let btn = document.querySelector('#button');
let formContent = document.querySelector('#input');

btn.addEventListener('click', function () {
    setTimeout(function(){
        if (formContent.value === 'google') {
            alert('Yandex круче. Но это не точно')
        } else if(!formContent.value) {
            alert('Введите что нибудь');
        } else {
            alert(formContent.value);
        }
    }, 3000);
})

//////////

let button = document.querySelector('#button-2');

let arr = [
    {
        name: 'one',
        age: 1,
    },
    {
        name: 'two',
        age: 2,
    },
    {
        name: 'three',
        age: 3,
    },
    {
        name: 'four',
        age: 4
    }
]

button.addEventListener('click', function () {
    alert(arr[0].name)
})

/////////////

function superSum() {
    let x = +prompt('Введи первое число', '0');
    let y = +prompt('Введи второе число', '0');
    let sum = x + y;
    alert(`Сумма = ${sum}`);
}

let btnSum = document.querySelector('.btn-3');

btnSum.addEventListener('click', superSum)

//////////////

let btn4 = document.querySelector('.btn-4');
let maxNum = [1, 2, -3, 300, 3, 123, -20000, 23];

function getMaxNum(num) {
    for (let i = 0; i < num.length; i++) {
        if(num[i] > num[0]){
            num[0] = num[i];
        }
    }
    return num[0];
}

function getMinNum(num) {
    for (let i = 0; i < num.length; i++) {
        if(num[i] < num[0]){
            num[0] = num[i];
        }
    }
    return num[0];
}

btn4.addEventListener('click', function () {
    function getMinMaxNumber(num) {
        return `Минимальное: ${getMinNum(num)}, максимальное: ${getMaxNum(num)}`
    }

    alert(getMinMaxNumber(maxNum))
})

//////////

let a = 'XXX', b = 'YYY';

[a, b] = [b, a];

console.log(a); // то что было изначально в b
console.log(b); // то что было изначально в a

//////////

let maxNumArr = [1, 5, -3, 999, 3, 123, -999, 23];

function findMax(num) {
    for (let i = 0; i < num.length; i++) {
        if(num[i] > num[0]){
            num[0] = num[i];
        }
    }
    return num[0];
}

console.log(findMax(maxNumArr))


