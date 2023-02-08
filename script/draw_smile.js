// please write your code to draw the smile below
window.addEventListener("DOMContentLoaded", function(){
    generateDivs();
    setInterval(changeSmile,1000)
})

let counter = 0;

function changeSmile(){
    let divs = document.querySelectorAll('div');
    counter += 1;

    if(counter%2 == 0){
        for(let i = 0; i < smile1.length; i++){
            let x = smile1[i];
            let b = x[0];
            let c = x[1];
            let divId = ((b * 12) + c);
            divs[divId].className = 'black';
        }
        let divB = document.querySelectorAll("div:not([class='black'])");
        for(let i = 0; i < divB.length; i++){
            divB[i].className = 'yellow';
        }
        
    }else{
        for(let i = 0; i < smile2.length; i++){
        let x = smile2[i];
        let b = x[0];
        let c = x[1];
        let divId = ((b * 12) + c);

        divs[divId].className = 'blue';
    } 
    let divW = document.querySelectorAll("div:not([class='blue'])");
    for(let i = 0; i < divW.length; i++){
        divW[i].className = 'white';
    }
}   
}