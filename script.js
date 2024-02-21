let gameseq=[]
let userseq=[]

let gmestart=false;
let level=0;

let btns=["red","blue","purple","green"]

let h3=document.querySelector("h3")

document.addEventListener("keypress",function(){
    if(gmestart==false){
        console.log("game started")
        gmestart=true;

        levelup()
    }
})


function levelup(){
    userseq=[]
    level++
    h3.innerText=  `Level ${level}`
    let ranidx=Math.floor(Math.random()*3)
    let randcolur=btns[ranidx]
    let randbtn=document.querySelector(`.${randcolur}`)
    gameseq.push(randcolur)
    btnflash(randbtn)
}

function match(idx){


    if(userseq[idx]===gameseq[idx]){
        if(userseq.length===gameseq.length){
            setTimeout(levelup(),1000);
        }

    }

    else{
        h3.innerText=`Game Over your score was ${level} Press Any Key to start again`;
        document.querySelector('body').style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white"
        },150)
        reset()
    }
}

function btnflash(btn){
btn.classList.add("flash")
setTimeout(function(){
    btn.classList.remove("flash")
},1000)
}

function btnpress(){
    let btn=this
    let usercol=btn.getAttribute("id")
    userseq.push(usercol)
    match(userseq.length-1)
}

let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function reset(){
    gmestart=false
    gameseq=[]
    userseq=[]
    level=0
}