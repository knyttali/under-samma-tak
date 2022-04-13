//Ändrar vilken slide som visas i Intresseanmälan!

var personligInfo = document.getElementById("personligInfo");
var guestWhere = document.getElementById("guestWhereInfo");
var guests = document.getElementById("guestInfo");
var length = document.getElementById("lengthInfo");
var send = document.getElementById("sendInfo");
//add rest of slides

var slideCounter = 0;

document.getElementById("next").addEventListener("click", nextForm)

function nextForm() {

    slideCounter = slideCounter + 1; 

    if (slideCounter == 1) {
        personligInfo.style.display="none"
        guestWhere.style.display="block";//Vet inte om denna är det vi vill ha men måste använda nått
    }
    else if (slideCounter == 2) {
        guestWhere.style.display="none"
        guests.style.display="block"
    }
    else if (slideCounter == 3) {
        guests.style.display="none"
        length.style.display="block"
        // I förts skede sliden style.display="block"
    }
    else if (slideCounter == 4) {
        length.style.display="none"
        send.style.display="block"
        // I förts skede sliden style.display="none"
        //Kontrolera uppgifter style.display="block"
    }
    
}

function backForm(){
    slideCounter = slideCounter - 1;

    if (slideCounter == 0) {
        personligInfo.style.display="block"
        guestWhere.style.display="none"
    }
    else if (slideCounter == 1) {
        guests.style.display="none"
        guestWhere.style.display="block"
    }
    else if (slideCounter == 2) {
        // I förts skede sliden style.display="none"
        guests.style.display="block"
        length.style.display="none"
    }
    else if (slideCounter == 3) {
        length.style.display="block"
        send.style.display="none"
        // I förts skede sliden style.display="block"
        //Kontrolera uppgifter style.display="none"
    }
}




