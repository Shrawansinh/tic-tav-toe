console.log("okk");
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".restart");
let newg=document.querySelector(".newgame");
let messageContainer=document.querySelector(".msg-container");
let message=document.querySelector("#msg");
let turn0=true;//x or o: 
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
// badha boxes par evenet maxHeight: 
// width: 13vmin;
   // height: 5vmin;
   // padding: 2px;
    // margin: 103px;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
            box.disabled=true;
        }
        else{
            box.innerText="X";
            turn0=true;
            box.disabled=true;
        }
        // every click check this consition using a loop
        checkwinner();
        });
    });
const showWinner=(winner)=>{
    message.innerText=`winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableboxes();
}
const enableboxes=()=>{
    for(let n of boxes){
        n.disabled=false;
        n.innerText="";
    }
}
const disableboxes=()=>{
    for(let n of boxes){
        n.disabled=true;
    }
}
const resetgame=()=>{
    turn0=true;
    enableboxes();
    messageContainer.classList.add("hide");
}
const checkwinner=()=>{
    for(let n of winpatterns){
        pos1=boxes[n[0]].innerText;
        pos2=boxes[n[1]].innerText;
        pos3=boxes[n[2]].innerText;
        if(pos1!=""&& pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2===pos3 && pos3==pos1){
                showWinner(pos1);
            }
        }
    }
}
newg.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
