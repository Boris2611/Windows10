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











let windowsOpen = 2;

function windows() {
    if (windowsOpen%2 == 0) {
        document.getElementById("windows").style.visibility = "visible";
    }
    else {
        document.getElementById("windows").style.visibility = "hidden";
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
      document.getElementById("rightClick").style.top = y-300 + "px";
      document.getElementById("rightClick").style.left = x-200 + "px";
  }

function screenClick() {
    document.getElementById("rightClick").style.display = "none";
}