var num1=document.getElementById('num1');
var num2=document.getElementById('num2');
var op=document.getElementById('op');
var result=document.getElementById('result')

function nine(){
    if(num1.textContent==""){
        num1.textContent=9
    }
   else if(num2.textContent==""){
        num2.textContent=9
    }
}

function eight(){
    if(num1.textContent==""){
        num1.textContent=8
    }
   else if(num2.textContent==""){
        num2.textContent=8
    }
}
function seven(){
    if(num1.textContent==""){
        num1.textContent=7
    }
   else if(num2.textContent==""){
        num2.textContent=7
    }
}
function plus(){
    if(num1.textContent!=""){
        op.textContent= '+'
    }
    
}
function six(){
    if(num1.textContent==""){
        num1.textContent=6
    }
   else if(num2.textContent==""){
        num2.textContent=6    
    }
}
function five(){
    if(num1.textContent==""){
        num1.textContent=5
    }
   else if(num2.textContent==""){
        num2.textContent=5
    }
}
function four(){
    if(num1.textContent==""){
        num1.textContent=4
    }
   else if(num2.textContent==""){
        num2.textContent=4
    }
}
function minus(){
    if(num1.textContent!=""){
        op.textContent='-'
    }
    
}
function three(){
    if(num1.textContent==""){
        num1.textContent=3
    }
   else if(num2.textContent==""){
        num2.textContent=3
    }
}function two(){
    if(num1.textContent==""){
        num1.textContent=2
    }
   else if(num2.textContent==""){
        num2.textContent=2
    }
}function one(){
    if(num1.textContent==""){
        num1.textContent=1
    }
   else if(num2.textContent==""){
        num2.textContent=1
    }
}function multiply(){
    if(num1.textContent!=""){
        op.textContent='*'
    }
    
}
function remove(){
    num1.textContent=""   
    num2.textContent=""
    op.textContent=""
    result.textContent=""
 
}
function zero(){
    if(num1.textContent==""){
        num1.textContent=0
    }
   else if(num2.textContent==""){
        num2.textContent=0
    }
}function equal(){
    switch(op.textContent){
        case"+":
            result.textContent="Ans "+(parseInt(num1.textContent)+parseInt(num2.textContent))
            break;

        case"-":
            result.textContent="Ans "+(num1.textContent-num2.textContent)
            break;

        case"*":
            result.textContent="Ans "+ (num1.textContent*num2.textContent)
            break;
        case"/":
            result.textContent="Ans "+ (num1.textContent/num2.textContent)
            break;

    }
}function divide(){
    if(num1.textContent!=""){
        op.textContent='/'
    }
   
}

