// let personName = prompt('Welcome , what is your name');
// localStorage.setItem('name',personName);
// let userName = localStorage.getItem('name',personName);

// function reciveName () {
//     if(userName) {
//         alert(`Welcome back ${personName}`);
//     }
// }

// reciveName();

var username = localStorage.getItem("username");
username = (new Date()).toUTCString();
function storage() {
if(!username){
    username = prompt("Please enter username");
    localStorage.setItem("username", username);
}else (username) 
    alert(`Welcome back ${username}`);
    
}
storage();