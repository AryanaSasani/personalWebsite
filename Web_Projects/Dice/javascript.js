var dice1 = Math.floor(Math.random()*6+1);
var dice2 = Math.floor(Math.random()*6+1);

var HTML_Images=document.querySelectorAll("div img");
dice1_path="./images/dice"+dice1.toString()+".png";
dice2_path="./images/dice"+dice2.toString()+".png";

HTML_Images[0].setAttribute("src",dice1_path);
HTML_Images[1].setAttribute("src",dice2_path);

var winnerText="";
if(dice1>dice2){
    winnerText="Player 1 Wins !";
}
else if(dice1<dice2){
    winnerText="Player 2 Wins !";
}
else{
    winnerText="Draw!";
}
document.querySelector("body div h1").innerHTML=winnerText;

