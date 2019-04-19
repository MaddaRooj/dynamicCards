console.log('Hello, World!');

const input = document.getElementById('inputArea');
const cardOne = document.getElementById('card--1');
const cardTwo = document.getElementById('card--2');
const deleteOne = document.getElementById('delete--1');
const deleteTwo = document.getElementById('delete--2');

document.getElementById('inputBtn').addEventListener('click', function () {
        cardOne.innerHTML = `<div class='cardBorder'>
                                <div>
                                    ${input.value}
                                </div>
                                <div>
                                    <button id="delete--1">Delete This Card</button>
                                </div>
                            </div>`

        cardTwo.innerHTML = `<div class='cardBorder2'>
                                <div>
                                    ${input.value}
                                </div>
                                <div>
                                    <button id="delete--2">Delete This Card</button>
                                </div>
                            </div>`
    })

document.addEventListener('click', function(event){
    if (event.target.id == 'delete--1'){
        console.log('clicked delete--1');
        let removeCard = document.getElementById('cardBorder');
        cardOne.innerHTML = '';
    }
    if (event.target.id == 'delete--2'){
        console.log('clicked delete--2');
        let removeCard = document.getElementById('cardBorder2');
        cardTwo.innerHTML = '';
    }
})
