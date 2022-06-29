let inFirst = document.querySelector('.number1').value;
let inSecond = document.querySelector('.number2').value;
const button = document.querySelector('.Btn');
const contend = document.querySelector('.img');


button.addEventListener('click',() => {

    if(inFirst < 1 || inFirst > 10){
    console.log('Номер страницы вне диапазона от 1 до 10');
    }if (inSecond < 1 || inSecond > 10) {
        console.log('Лимит вне диапазона от 1 до 10');
    } else{
        fetch("https://picsum.photos/v2/list?page=1&limit=10").then((data)=>{
            return data.json();
        }).then((complated) =>{
            let data1 = '';
            complated.map((value)=>{
                data1+=`<div class="img">${value.id} + ${value.author}+ ${value.author}+ ${value.width}+${value.height} ${value.url}</div>`
            });
            contend.textContent = data1
        }).catch((error)=>{
            console.log('Some thing go wrong');
        })
    }
});
