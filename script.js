$(document).ready(function() {

//a handful of variables
var arrAttack = [1,3,5,10]
var weaponImages= ["Weapons/Brotherhood.png", "Weapons/BusterSword.png","Weapons/Lionheart.png","Weapons/Staff.png"];
var monsterImages= ["Monsters/Zoro.png", "Monsters/CR7.png","Monsters/Pika.png"];
var main = $("body");
var btns = main.find("#buttons"); 
var HP;

//make our weapons (buttons)
function setup(){
    for(var i = 0; i < 4; i++) {
        var weapon = $("<button>");
        weapon.addClass("wepButton");
        $(weapon).attr('id', "btn" + i);
        weapon.attr({ value: arrAttack[Math.floor(Math.random() * arrAttack.length)]});
        btns.append(weapon);
    }
    var HP = [Math.floor(Math.random() * 100)]+40;
    document.getElementById("monsterhp").innerHTML = HP;
}

//will cycle trhough pics in array (for attaching to buttons) when called in for loop after buttons are made
function weaponPic(){
    var imgIndex = 0
    var myImage = document.getElementById("#btn" + imgIndex)

    function changeImage(){
        myImage.attr("src", weaponImages[imgIndex]);
        imgIndex++;
    }
};

//add images to our buttons
function addImages(){
    for (var i = 0; i < 4; i++){
        weaponPic();
    }
}


//will cycle trhough pics in array (for creating monsters)
function monsterPic(){
    var imgIndex = 0
    var myImage = $(".img")

    function changeImage(){
        myImage.attr("src", monsterImages[imgIndex]);
        imgIndex++;
    }
};

//new monster button
$("body").on("click", "#new", function(){
    $( ".weapons" ).empty();
    setup();
    monsterPic();
    addImages();
})

// doing doing hp damage with our buttons;
$("body").on("click", ".wepButton", function(){
    var a = HP - this.value;
    var s = a.toString();
    document.getElementById("monsterhp").innerHTML = s;
    var n = parseInt(s);
    var HP = s;
})

// win lose conditions
$("body").on("click", ".wepButton", function(){
    if (HP === 0) {
        alert("you win");
    }
    else if (HP < 0) {
        alert("you lose");
    }
})

});
