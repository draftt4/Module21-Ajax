const button = document.querySelector('#Btn');
const myInput = document.querySelector('.person');
const content = document.querySelector('.container');
const data = 'https://jsonplaceholder.typicode.com/users/3/todos';
button.addEventListener('click', reqData);

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