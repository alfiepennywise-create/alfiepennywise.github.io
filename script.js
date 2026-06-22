const music=
document.getElementById("music");

document
.getElementById("playBtn")
.onclick=()=>{

music.play();

confetti({

particleCount:300,

spread:180

});

};

function gift(){

const messages=[

"Ryan unlocked +100 Friendship",

"Best Friend Achievement",

"Birthday Energy Activated",

"School Memories Restored"

];

document
.getElementById(
"giftText"

).innerHTML=

messages[
Math.floor(
Math.random()*4
)

];

confetti();

}

let clicks=0;

document.body.onclick=()=>{

clicks++;

if(clicks===20){

alert(
"SECRET FOUND 👑\nRyan Mode Activated"
);

document.body.style
.background=
"darkblue";

}

};
