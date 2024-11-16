let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userPScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const generatedChoice=()=>{
     const option=["rock" , "paper" , "scissor"];
     const rantIdx=Math.floor(Math.random()*3);
     return option[rantIdx];
};

const drawGame=()=>{
   msg.innerText=`Game was Draw. Play again`;
  msg.style.backgroundColor="#295135";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userPScore.innerText=userscore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#990D35";
    }
    else{
        compscore++;
        compScore.innerText=compscore;
        msg.innerText=`You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#53599A";
    }
};

const playGame=(userChoice)=>{
    const compChoice=generatedChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else if(userChoice==="scissor"){
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};


choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});