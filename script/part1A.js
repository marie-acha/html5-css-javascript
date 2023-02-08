window.addEventListener("DOMContentLoaded",function(){
    displayContent();
})

function displayContent(){
    let imageTarget = document.getElementById("image_target");
    imageTarget.innerHTML = '<img src="images/fifa2018.jpg">';
}

function changeImage(){
    let imageSrc = document.getElementById("image_target");

    if(document.getElementById("belgium").checked == true){
        imageSrc.innerHTML = '<img src="images/belgium.png">';
    }else if (document.getElementById("brazil").checked == true){
        imageSrc.innerHTML = '<img src="images/brazil.png">';
    }else if (document.getElementById("croatia").checked == true){
        imageSrc.innerHTML = '<img src="images/croatia.png">';
    }else if (document.getElementById("england").checked == true){
        imageSrc.innerHTML = '<img src="images/united-kingdom.png">';
    }else if (document.getElementById("france").checked == true){
        imageSrc.innerHTML = '<img src="images/france.png">';
    }else if (document.getElementById("russia").checked == true){
        imageSrc.innerHTML = '<img src="images/russia.png">';
    }else if (document.getElementById("sweden").checked == true){
        imageSrc.innerHTML = '<img src="images/sweden.png">';
    }else if (document.getElementById("uruguay").checked == true){
        imageSrc.innerHTML = '<img src="images/uruguay.png">';
    }
}