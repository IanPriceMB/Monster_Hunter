$(document).ready(function() {

//a handful of variables
var arrAttack = [1,3,5,7,9]
var weaponImages= ["Weapons/Brotherhood.png", "Weapons/BusterSword.png","Weapons/Lionheart.png","Weapons/Staff.png"];
var monsterImages= ["Monsters/Zoro.jpg", "Monsters/CR7.jpg","Monsters/Pika.jpg"];
var main = $("body");
var btns = main.find("#buttons"); 
var HP;
var weapon;
var imgIndex = 0;
var monIndex = 0;

function setup(){
//make our weapons (buttons)
    for(var i = 0; i < 4; i++) {
        weapon = $("<div>");
        weapon.addClass("wepButton");
        weapon.attr('id', "btn" + i);
        weapon.attr("power", arrAttack[Math.floor(Math.random() * arrAttack.length)]);
        btns.append(weapon);
    }
//add <img> tags to the divs so that i can stick img's in them
    for(var i = 0; i < 4; i++) {
        var elem = document.createElement("img");
        document.getElementById("btn" + i).appendChild(elem);
    //will cycle trhough pics in array (for attaching to buttons) when called in for loop after buttons are made
        function weaponPic(){
                var a = weaponImages[imgIndex];
                imgIndex++;
                return a;
        };
        elem.src = weaponPic();
    }  
//generate some hp
    HP = Math.floor(Math.random() * 100) +40;
    document.getElementById("monsterhp").innerHTML = HP;
}

//will cycle trhough pics in array (for creating monsters)
function momo(){
    var elem = document.createElement("img");
    document.getElementById("monster").appendChild(elem);
        function monsterPic(){    
            var a = monsterImages[monIndex];
            monIndex++;
            return a;
            }
    elem.src = monsterPic();
}


//new monster button
$("body").on("click", "#new", function(){
    $( ".weapons" ).empty();
    $( ".img" ).empty();
    setup();
    momo();
    imgIndex = 0;
    if (monIndex>2){
        monIndex=0
    }
})

// doing doing hp damage with our buttons & win conditions?
$("body").on("click", ".wepButton", function(){
    if((HP- $(this).attr("power")) == 0){
        $( ".weapons" ).empty();
        $("#monsterhp").text("0");
        alert("You won! Spawn the next monster");
    } else if ((HP- $(this).attr("power")) < 0){
        alert("You lose. Try again.");
        $( ".weapons" ).empty();
        monIndex=0;
        $("#monsterhp").text("0");
    } else {
        HP -= $(this).attr("power");
        $("#monsterhp").text(HP);
    }
})

//disable buttons if game end
if(HP == 0 || HP < 0){
    $( ".weapons" ).empty();
    $("#monsterhp").text("0");
}
// win lose conditions
$("body").on("click", ".wepButton", function(){
    if (HP === 0) {
        alert("Spawn the next monster");
    }
    else if (HP < 0) {
        alert("You lose. Try again.");
    }


})

});
