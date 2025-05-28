let boxes=document.querySelectorAll('.box');

let turnO=true;


/* ALternative chance for play*/ 
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
        box.innerText="O";
        turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
    
});

// 2D array for storing the winning patterns
let winpattens=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// Function to check for a winner

let win=false;
var count=0;

function checkWinner(){
    count++;
    for(let pattern of winpattens){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                win=true;
                if(val1==="X"){
                    window.location.href="X-win.html";
                }
                else if(val1==="O"){
                    window.location.href="O-win.html";
                }
                stopplay();
                return;
            }       
        } 
    }
    if(count===9 && win==false){
        window.location.href="Draw.html";
    };
}
 /* Function to reset the game*/
function resetGame(){
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    turnO=true;
    win=false;
    count=0;
}

let reset=document.querySelector('.btn');
reset.addEventListener('click',resetGame);



let stopplay=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}



