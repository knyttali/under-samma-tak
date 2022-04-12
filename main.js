//Ändrar vilken slide som visas i Intresseanmälan!

var personligInfo = document.getElementById("personligInfo");
var guestWhere = document.getElementById("guestWhereInfo");
var guests = document.getElementById("guestInfo");
//add rest of slides

var slideCounter =0;

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
}




