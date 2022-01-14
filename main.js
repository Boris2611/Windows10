let open;
let thisPCwin = 2;
let googlewin = 2;
let contactwin = 2;
let myWorkwin = 2;


// --------- This PC --------------

function thisPC() {
    document.getElementById("thisPC").style.display = "block";
}

function exitPC() {
    document.getElementById("thisPC").style.display = "none";
}

function fullPC() {
    if (thisPCwin % 2 == 0) {
        document.getElementById("thisPC").className = "windowFull";
    }
    else {
        document.getElementById("thisPC").className = "window";
    }
    thisPCwin += 1;
}

// --------- GOOGLE -------------

function google() {
    document.getElementById("google").style.display = "block";
}

function exitGoogle() {
    document.getElementById("google").style.display = "none";
}

function fullGoogle() {
    if (googlewin % 2 == 0) {
        document.getElementById("google").className = "windowFull";
    }
    else {
        document.getElementById("google").className = "window";
    }
    googlewin += 1;
}

// --------- CONTACT --------------

function contactMe() {
    document.getElementById("contactMe").style.display = "block";
}

function exitContact() {
    document.getElementById("contactMe").style.display = "none";
}

function fullContact() {
    if (contactwin % 2 == 0) {
        document.getElementById("contactMe").className = "windowFull";
    }
    else {
        document.getElementById("contactMe").className = "window";
    }
    contactwin += 1;
}

// --------- My Work --------------

function myWork() {
    document.getElementById("myWork").style.display = "block";
}

function exitMyWork() {
    document.getElementById("myWork").style.display = "none";
}

function fullMyWork() {
    if (myWorkwin % 2 == 0) {
        document.getElementById("myWork").className = "windowFull";
    }
    else {
        document.getElementById("myWork").className = "window";
    }
    myWorkwin += 1;
}











// -------------- DRAGGABLE -----------

$(document).ready(function(){
    $('#icon1').draggable();
});

$(document).ready(function(){
    $('#icon2').draggable();
});

$(document).ready(function(){
    $('#icon3').draggable();
});






// ------------ WINDOW -----------

let windowsOpen = 2;

function windows() {
    if (windowsOpen%2 == 0) {
        document.getElementById("windows").style.left = "0px";
    }
    else {
        document.getElementById("windows").style.left = "-400px";
    }
    windowsOpen += 1;
}



// ---------- RIGHT CLICK ---------------
let cursor;
let x;
let y;


if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        printMousePos(event)
      e.preventDefault(event);
    }, false);
  }

  function printMousePos(event) {
      x = event.clientX;
      y = event.clientY;

    document.getElementById("rightClick").style.display = "block";
    document.getElementById("rightClick").style.top = y-325 + "px";
    document.getElementById("rightClick").style.left = x-200 + "px";

      if (y < 300) {
        document.getElementById("rightClick").style.top = y + "px";
      }
      if (x < 220) {
        document.getElementById("rightClick").style.left = x + "px";
      }
  }

function screenClick() {
    document.getElementById("rightClick").style.display = "none";
}


// ----------- REFRESH -----------

function refresh() {
    location.reload();
}







// --------- Google Search ----------
let search = ""

function searchGoogle() {
    search = document.getElementById("googleSearch").value;
    search = "https://www.google.com/search?q=" + search;

    window.open(search)


}


