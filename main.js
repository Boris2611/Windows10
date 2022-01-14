let open;

let thisPCwin = 2;

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










