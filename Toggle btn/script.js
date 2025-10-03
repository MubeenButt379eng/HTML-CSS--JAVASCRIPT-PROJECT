let add = document.querySelector('#Add');
let tag = document.querySelector('h4');


let toggle = 0;

add.addEventListener("click",function(){
    if(toggle===0){
tag.innerText = "Friends Added";
    tag.style.color = "green";
    toggle=1;
    add.innerHTML="Remove Friend";

    }  
    else{
        tag.innerText = "Stranger";
        tag.style.color = "red";
        toggle=0;
add.innerHTML="Add Friend";

    }
})