"use strict";

// Смена фона при клике на картинку в блоке "head-slaider" //
document.querySelector('.head-slaider').addEventListener('click', (event) => {
    if(event.target.tagName != 'IMG') return;
    
    let newFon = document.createElement('img');
    let oldFon = document.querySelector('.head-container').firstElementChild;
    let coord = event.target.getBoundingClientRect();
    
    if(oldFon.src == event.target.src) return;

    newFon.src = event.target.src;
    newFon.style.cssText = `
        height: 0px;
        width: 0px;
        position: absolute;
        transition: all 1s;
        z-index: -9;
        left: ${coord.left + coord.width / 2 + pageXOffset}px;
        top: ${coord.top + coord.height / 2 + pageYOffset}px;
    `;
    document.querySelector('.head-container').prepend(newFon);

    setTimeout(() => {
        newFon.style.objectFit = 'cover';
        oldFon.style.zIndex = '-999';
        newFon.style.height = '100%';
        newFon.style.width = '100%';
        newFon.style.left = '0px';
        newFon.style.top = '0px';
        
       setTimeout(() => oldFon.remove(), 1000);
    }, 50);
})



// Добавление стилей при клике для картинок в блоке "head-slaider"//
document.querySelector('.head-slaider').addEventListener('click', function(event) {
    if(event.target.tagName != 'IMG') return;
    if(event.target.classList.contains('slaider-used')) return;
    
    this.querySelector('.slaider-used').classList.remove('slaider-used');
    event.target.classList.add('slaider-used');
})



// Генерация клика по картинке в блоке "head-slaider" //
function autoClick() {
    let event = new Event('click', {bubbles: true});
    let item = document.querySelector('.slaider-used').nextElementSibling;

   let time = setTimeout(() => {
        if(!item) item = document.querySelector('.slaider-noUsed');

        item.dispatchEvent(event);
        autoClick();
    }, 4000)

    function autoClickBlock(e) {
        if(e.target.tagName != 'IMG') return;

        document.querySelector('.head-slaider').removeEventListener('click', autoClickBlock);
        clearTimeout(time);
        autoClick();
    }
    document.querySelector('.head-slaider').addEventListener('click', autoClickBlock);
}
autoClick();


// Бургер меню в header //
document.querySelector('.burger-img').addEventListener('click', (event) => {
    document.querySelector('.burdre-list').classList.toggle('vision-burger');
})

// Генерация пульса в блоке "particularly-container"//
function puls() {
    if(document.querySelector('.particularly-startText').classList.contains('noVision')) return;

    let zone = document.querySelector('.particularly-container').getBoundingClientRect();
    let genItem = document.createElement('div');
    genItem.style.cssText = `
        width: 1px;
        height: 1px;
        background: rgb(150, 4, 36);
        border-radius: 50%;
        animation: radial-pulse 2s;
        position: absolute;
        left:${Math.round( Math.random() * zone.width)}px;
        top:${Math.round( Math.random() * zone.height)}px;
    `;

    document.querySelector('.particularly-container').prepend(genItem);
    setTimeout(() => genItem.remove(), 2500);
    setTimeout(puls, Math.round(Math.random() * 1400));
}
puls();



// Раскрытие меню и блокировка пульса в блоке "particularly-container" //
document.querySelector('.particularly-container').addEventListener('click', function open() {
    [...this.children].forEach(item => item.classList.toggle('noVision'));

    this.style.cursor = 'default';
    this.removeEventListener('click', open);
})



// Слайдер в блоке "particularly-container" //
document.querySelector('.particularly-menu').addEventListener('click', function(event) {
    if(event.target.tagName != 'LI') return;

    [...this.children].forEach(item => item.style.color = 'white');
    event.target.style.color = 'grey';

    setTimeout(() => {
        this.nextElementSibling.querySelectorAll('.particularly-slaid').forEach(item => {
            item.style.opacity = '0.5';
            item.style.transform = 'scale(0.67)';
        })
    }, 0);

    let scrol = [...this.querySelectorAll('li')].indexOf(event.target) + 1;
    document.querySelector('.particularly-slaider-container').style.marginTop = -500 * scrol + 'px';
    setTimeout(() => {
        document.querySelector('.particularly-slaider-container').children[scrol].style.opacity = '1';
        document.querySelector('.particularly-slaider-container').children[scrol].style.transform = 'scale(1)';
    }, 10);
})










// let data = ['html', [
//     ['head', [
//         ['title', 'hello, mockintreu!'],
//     ]],
//     ['body', {class: 'container'}, [
//         ['h1', {class: 'header'}, 'html builder exm'],
//         ['div', [
//             ['span', 'span text2'],
//             ['span', 'span text3'],
//         ]]
//     ]]
// ]];



// function htt(item) {

//     // if(!item.find(cur => cur instanceof Array)) return;
//     // let resul = `${item[0]}>`;
    
//     // if(item.find(curr => typeof curr == 'object')) {
//     //     let push = Object.entries(item.find(curr => typeof curr == 'object'))
//     //     resul = `${item[0]} ${push[0][0]}: ${push[0][1]}>`  //item[0] + push[0][0] + push[0][1] + '>';
//     // }
//     // if(item.slice(1).find(curr => typeof curr == 'string')) resul += item.slice(1).find(curr => typeof curr == 'string');
    

//     // return `<${resul} \n
    
//     //     ${htt(item.find(item => item instanceof Array))}
    
//     // </${item}`;


    

    
// }

// console.log(htt(data))


/*
let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
let test = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

function getMatrix(matrixArr) {
    let cord = [new Set(), new Set()];

    matrixArr.forEach((arr, indexArr) => {
        arr.forEach((item, indexItem) => {
            if(item == 0) {
                cord[0].add(indexArr);
                cord[1].add(indexItem);
            }
        })
    })
    matrixArr =  matrixArr.map((arr, indexArr) => {
        return arr.map((item, indexItem) => {
            if(cord[0].has(indexArr) || cord[1].has(indexItem)) return 0;
            return item;
        })
    })

    return matrixArr;
}


console.log(getMatrix(test));
*/


/*
let input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gbp', 'buy', 9000],
    ['eur', 'sell', 7000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 25000],
];


function trun(item) {
    let valut = new Set();
    


}



console.log(new Set(input))
*/


function gg(arr) {

    return[...arr]
}

console.log(gg('abracadabra'))
console.log(gg('233312'))