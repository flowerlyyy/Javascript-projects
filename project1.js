//PROJECT 1
const btnEl=document.querySelector(".btn");
const inputEl=document.querySelector('input');
const errorEl=document.querySelector('.error');
const messageEl=document.querySelector(".message")

btnEl.addEventListener('click',displayMessage);

function displayMessage(){
    if(inputEl.value){
        messageEl.textContent=inputEl.value;
        inputEl.value="";
    }
    else{
        errorEl.style.display='block';
    setInterval(() => {
        errorEl.style.display='none';
    }, 2000);
    }
}

//PROJECT 2
const btncolorEl=document.querySelector('.btncolor');
const bodyEl=document.querySelector('body');

var colors=['blue','white','yellow','violet','red','green','orange'];

bodyEl.style.background='pink';
btncolorEl.addEventListener('click',colorRandom);
function colorRandom() {
    console.log('clicked');
    var  color=parseInt(Math.random()* colors.length);
   bodyEl.style.background=colors[color];
   count++;
}

//PROJECT 3
const prevEl=document.querySelector('.dec');
const nextEl=document.querySelector('.inc');
const resetEl=document.querySelector('.reset');
const countNumberEl=document.querySelector('.countnumber');
const buttons =document.querySelector('.incdec');

let counts=0;

prevEl.addEventListener('click',decfunction);
nextEl.addEventListener('click',incfunction);
resetEl.addEventListener('click',resetfunction);

function decfunction () {
    counts--;
    countNumberEl.innerHTML=counts;
    if(counts<0){
        countNumberEl.style.color='red';
    }else{
        countNumberEl.style.color='black';
    }
}

function incfunction () {
    counts++;
    countNumberEl.innerHTML=counts;
    if(counts>0){
        countNumberEl.style.color='green';
    }else{
        countNumberEl.style.color='black';
    }
}

function resetfunction () {
    counts=0;
    countNumberEl.innerHTML=counts;
   countNumberEl.style.color = 'black';
}










































