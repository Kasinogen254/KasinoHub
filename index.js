
/*let userName;
let choice1='yes'
let choice2='no'


document.getElementById("btn").onclick= function() {
    userName=document.getElementById("jina").value;
    document.getElementById("title").textContent= (`Welcome ${userName}`);
}

let pi= 3.142;
let r;
let area;

//area=2*pi*r;
//console.log(area);

document.getElementById("btn").onclick= function (){
    r=document.getElementById("jina").value;
    r=Number(r);
    area=2*pi*r;
    document.getElementById("maths").textContent="area="+ area + "cm";
}


const countLabel= document.getElementById("countLabel");
const increaseBtn= document.getElementById("increaseBtn");
const resetBtn= document.getElementById("resetBtn");
const decreaseBtn= document.getElementById("decreaseBtn");
let count=0;

increaseBtn.onclick= function(){
    count++;
    document.getElementById("countLabel").textContent= count;
}
decreaseBtn.onclick= function(){
    count--;
    document.getElementById("countLabel").textContent= count;
}
resetBtn.onclick= function(){
    count=0;
    document.getElementById("countLabel").textContent= count;
}

rollBtn= document.getElementById("rollBtn");
let randomNum;
rollBtn.onclick= function(){
randomNum=Math.floor(Math.random()*6 )+1;
document.getElementById("namba").textContent= randomNum;
}
console.log(randomNum);

let age= window.prompt("What is your current age");
let net= window.prompt("You have internet connectivity TRUE/FALSE");
console.log(age,net);

if(age>=18){
    document.getElementById("age").textContent="You are qualified to watch";
    if(net){
        document.getElementById("net").textContent= "Connected";
    }
    else{
        document.getElementById("net").textContent="No internet connectivity";
    }
}
else{
    document.getElementById("age").textContent="You are Underage lill Nigga";
}
*/
const button= document.getElementById("baton");
const vidSection= document.getElementById("vidSection");
button.onclick = function(){
    const age= window.prompt("Please Enter your age:");
    if (age && parseInt(age)>=18) {
     vidSection.style.display='grid'; 
    } 
    else if (age) {
        alert("You are under age Lill nigga")
        under.style.display='block';
    } 
    else {
        alert("You didn't enter your age.");
    }
}

