let vidSection= document.getElementById("vidSection");
let under= document.getElementById("under");
let watch= document.getElementById("watch");
watch.onclick= function(){
    let age=window.prompt("How old are you");
    age = Number(age);
    if(age>=18){
        vidSection.style.display='block';
    }
    else if(age<=0){
        document.getElementById("sample").textContent=`you are ${age}, your'e not even born yet`;
    }
    else{
        under.style.display='block';
    }
}   