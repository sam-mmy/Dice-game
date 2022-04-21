 
//  for 1st dice

var randomnumber1 = Math.floor(Math.random()*6+1);

document.querySelector(".img1").setAttribute("src" , "images\\dice" + randomnumber1+".png ");

// for 2nd dice

var randomnumber2 = Math.floor(Math.random()*6+1);

document.querySelector(".img2").setAttribute("src" , "images\\dice" + randomnumber2+".png ");

// winner

if(randomnumber1===randomnumber2){
    document.querySelector("h1").innerHTML=("draw 🤜🤛");
}
else if (randomnumber1>randomnumber2) {
    document.querySelector("h1").innerHTML=("🥳Player 1  won !");
} 
else  {
    document.querySelector("h1").innerHTML=("Player 2 won !🥳");

}
