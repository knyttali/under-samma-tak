//Ändrar vilken slide som visas i Intresseanmälan!

var personligInfo = document.getElementById("personligInfo");
var guestWhere = document.getElementById("guestWhereInfo");
var guests = document.getElementById("guestInfo");
var length = document.getElementById("lengthInfo");
var send = document.getElementById("sendInfo");
//add rest of slides
var p0 = document.getElementById("side-p0");
var p1 = document.getElementById("side-p1");
var p2 = document.getElementById("side-p2");
var p3 = document.getElementById("side-p3");
var p4 = document.getElementById("side-p4");


var slideCounter = 0;

document.getElementById("next").addEventListener("click", nextForm)

function nextForm() {

    slideCounter = slideCounter + 1; 

    if (slideCounter == 1) {
        p0.style.fontWeight ="normal"
        p1.style.fontWeight ="bold"
        personligInfo.style.display="none"
        guestWhere.style.display="block";//Vet inte om denna är det vi vill ha men måste använda nått
    }
    else if (slideCounter == 2) {
        p1.style.fontWeight ="normal"
        p2.style.fontWeight ="bold"
        guestWhere.style.display="none"
        guests.style.display="block"
    }
    else if (slideCounter == 3) {
        p2.style.fontWeight ="normal"
        p3.style.fontWeight ="bold"
        guests.style.display="none"
        length.style.display="block"
        // I förts skede sliden style.display="block"
    }
    else if (slideCounter == 4) {
        p3.style.fontWeight ="normal"
        p4.style.fontWeight ="bold"
        length.style.display="none"
        send.style.display="block"
        // I förts skede sliden style.display="none"
        //Kontrolera uppgifter style.display="block"
    }
    
}

function backForm(){
    slideCounter = slideCounter - 1;

    if (slideCounter == 0) {
        p0.style.fontWeight = "bold"
        p1.style.fontWeight = "normal"
        personligInfo.style.display="block"
        guestWhere.style.display="none"
    }
    else if (slideCounter == 1) {
        p1.style.fontWeight = "bold"
        p2.style.fontWeight = "normal"
        guests.style.display="none"
        guestWhere.style.display="block"
    }
    else if (slideCounter == 2) {
        // I förts skede sliden style.display="none"
        p2.style.fontWeight = "bold"
        p3.style.fontWeight = "normal"
        guests.style.display="block"
        length.style.display="none"
    }
    else if (slideCounter == 3) {
        p3.style.fontWeight = "bold"
        p4.style.fontWeight = "normal"
        length.style.display="block"
        send.style.display="none"
        // I förts skede sliden style.display="block"
        //Kontrolera uppgifter style.display="none"
    }
}




