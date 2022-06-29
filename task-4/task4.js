randomNumber = setInterval(function(){   
    console.log(Math.floor((Math.random()*100)+1));
 },500000);

 const myPromise = new Promise((resolve , reject) => {
        if(randomNumber % 2 == 0) {
            resolve(`Generate number ${randomNumber}`);
        }else (randomNumber % 2 == 1) 
            reject(`Unsuccessful promise`);
});


myPromise 
 .then((result)=> {
     console.log(`Processing resove`, result);
 })
 .catch((error)=> {
     console.log(`Processing reject` + error);
 })