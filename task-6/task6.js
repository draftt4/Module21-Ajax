let inFirst = document.querySelector('.number1').value;
let inSecond = document.querySelector('.number2').value;
const button = document.querySelector('.Btn');
const contend = document.querySelector('.img');
let data = fetch("https://picsum.photos/v2/list?page=1&limit=10");

button.addEventListener('click',() => {

    if(inFirst < 1 || inFirst > 10){
    console.log('Номер страницы вне диапазона от 1 до 10');
    }if (inSecond < 1 || inSecond > 10) {
        console.log('Лимит вне диапазона от 1 до 10');
    } else {
        display();
    }
});

function reqData () {
    fetch(data)
    .then(res => res.json())
    .then(data => {
        display(data);
    })
    .catch((error)=>{
        console.error(error);
    })
}


function display(data) {
    console.log(data)
    const ul = document.createElement('ul');
    content.append(ul);
    data.forEach(ele => {
        console.log(ele);
    });
    const li = document.createElement('li');
    li.textContent = `${ele.userId} ${ele.id} ${ele.title} ${ele.completed}`;
    ul.append(li);
}