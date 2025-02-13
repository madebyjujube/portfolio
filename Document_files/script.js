// MOVE WINDOW

// targets
const elpurple = document.querySelector(".purple");
const elorange = document.querySelector(".orange");
const elcontact = document.querySelector(".wcontact");
const elwaves = document.querySelector(".wwaves");
const resizers = document.querySelectorAll(".resizer");

// define variables
let e = window.e;
let currentResizer;
let isResizing = false;


// listen to clicks 
elpurple.addEventListener('mousedown', mousedownpurple);
elorange.addEventListener('mousedown', mousedownorange);
elcontact.addEventListener('mousedown', mousedowncontact);
elwaves.addEventListener('mousedown', mousedownwaves);

// PURPLE 
// mouse DOWN
function mousedownpurple(e) {
  
  // bring to front
  document.querySelector(".purple").style.zIndex = "100";
  document.querySelector(".orange").style.zIndex = "95";
  document.querySelector(".wcontact").style.zIndex = "92";
  document.querySelector(".wwaves").style.zIndex = "90";
  
  window.addEventListener('mousemove', mousemovepurple);
  window.addEventListener('mouseup', mouseuppurple);

  prevXpurple = e.clientX;
  prevYpurple = e.clientY;

}
// mouse MOVE
function mousemovepurple(e) {
  if(!isResizing) {
    let newX = prevXpurple - e.clientX;
    let newY = prevYpurple - e.clientY;
    
    const rect = elpurple.getBoundingClientRect();

    elpurple.style.left = rect.left - newX + "px";
    elpurple.style.top = rect.top - newY + "px";

    prevXpurple = e.clientX;
    prevYpurple = e.clientY;
  }
}
// mouse UP
function mouseuppurple() {
  window.removeEventListener("mousemove", mousemovepurple);
  window.removeEventListener("mouseup", mouseuppurple);
}


// ORANGE
// mouse DOWN
function mousedownorange(e) {

  // bring to front
  document.querySelector(".orange").style.zIndex = "100";
  document.querySelector(".wcontact").style.zIndex = "98";
  document.querySelector(".wwaves").style.zIndex = "95";
  document.querySelector(".purple").style.zIndex = "90";

  window.addEventListener('mousemove', mousemoveorange);
  window.addEventListener('mouseup', mouseuporange);

  prevXorange = e.clientX;
  prevYorange = e.clientY;
}
// mouse MOVE
function mousemoveorange(e) {
  if(!isResizing) {
    let newX = prevXorange - e.clientX;
    let newY = prevYorange - e.clientY;

    const rect = elorange.getBoundingClientRect();

    elorange.style.left = rect.left - newX + "px";
    elorange.style.top = rect.top - newY + "px";

    prevXorange = e.clientX;
    prevYorange = e.clientY;
  }
}
// mouse UP
function mouseuporange() {
  window.removeEventListener("mousemove", mousemoveorange);
  window.removeEventListener("mouseup", mouseuporange);
}

// CONTACT
// mouse DOWN
function mousedowncontact(e) {
  // bring to front
  document.querySelector(".wcontact").style.zIndex = "100";
  document.querySelector(".wwaves").style.zIndex = "98";
  document.querySelector(".orange").style.zIndex = "95";
  document.querySelector(".purple").style.zIndex = "90";

  window.addEventListener('mousemove', mousemovecontact);
  window.addEventListener('mouseup', mouseupcontact);

  prevXcontact = e.clientX;
  prevYcontact = e.clientY;
}
// mouse MOVE
function mousemovecontact(e) {
  if(!isResizing) {
    let newX = prevXcontact - e.clientX;
    let newY = prevYcontact - e.clientY;

    const rect = elcontact.getBoundingClientRect();

    elcontact.style.left = rect.left - newX + "px";
    elcontact.style.top = rect.top - newY + "px";

    prevXcontact = e.clientX;
    prevYcontact = e.clientY;
  }
}
// mouse UP
function mouseupcontact() {
  window.removeEventListener("mousemove", mousemovecontact);
  window.removeEventListener("mouseup", mouseupcontact);
}

// WAVES
// mouse DOWN
function mousedownwaves(e) {

  // bring to front
  document.querySelector(".wwaves").style.zIndex = "100";
  document.querySelector(".wcontact").style.zIndex = "98";
  document.querySelector(".orange").style.zIndex = "95";
  document.querySelector(".purple").style.zIndex = "90";

  window.addEventListener('mousemove', mousemovewaves);
  window.addEventListener('mouseup', mouseupwaves);

  prevXwaves = e.clientX;
  prevYwaves = e.clientY;
}
// mouse MOVE
function mousemovewaves(e) {
  if(!isResizing) {
    let newX = prevXwaves - e.clientX;
    let newY = prevYwaves - e.clientY;

    const rect = elwaves.getBoundingClientRect();

    elwaves.style.left = rect.left - newX + "px";
    elwaves.style.top = rect.top - newY + "px";

    prevXwaves = e.clientX;
    prevYwaves = e.clientY;
  }
}
// mouse UP
function mouseupwaves() {
  window.removeEventListener("mousemove", mousemovewaves);
  window.removeEventListener("mouseup", mouseupwaves);
}


// RESIZE WINDOWS
for (let resizer of resizers) {
  resizer.addEventListener('mousedown', mousedown);

  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    let prevXpurple = e.clientX;
    let prevYpurple = e.clientY;
    let prevXorange = e.clientX;
    let prevYorange = e.clientY;

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    function mousemove(e) {
      const rectPurple = elpurple.getBoundingClientRect();
      const rectOrange = elorange.getBoundingClientRect();
      const rectContact = elcontact.getBoundingClientRect();
      const rectWaves = elwaves.getBoundingClientRect();

      if(currentResizer.classList.contains('urse')) {
        elpurple.style.width = rectPurple.width - (prevXpurple - e.clientX) + "px";
        elpurple.style.height = rectPurple.height - (prevYpurple - e.clientY) + "px";
        prevXpurple = e.clientX;
        prevYpurple = e.clientY;
      } else if(currentResizer.classList.contains('ursw')) {
        elpurple.style.width = rectPurple.width + (prevXpurple - e.clientX) + "px";
        elpurple.style.height = rectPurple.height - (prevYpurple - e.clientY) + "px";
        elpurple.style.left = rectPurple.left - (prevXpurple - e.clientX) + "px";
        prevXpurple = e.clientX;
        prevYpurple = e.clientY;
      }


      if(currentResizer.classList.contains('orse')) {
        elorange.style.width = rectOrange.width - (prevXorange - e.clientX) + "px";
        elorange.style.height = rectOrange.height - (prevYorange - e.clientY) + "px";
        prevXorange = e.clientX;
        prevYorange = e.clientY;
      } else if(currentResizer.classList.contains('orsw')) {
        elorange.style.width = rectOrange.width + (prevXorange - e.clientX) + "px";
        elorange.style.height = rectOrange.height - (prevYorange - e.clientY) + "px";
        elorange.style.left = rectOrange.left - (prevXorange - e.clientX) + "px";
        prevXorange = e.clientX;
        prevYorange = e.clientY;
      }

      if(currentResizer.classList.contains('cose')) {
        elcontact.style.width = rectContact.width - (prevXcontact - e.clientX) + "px";
        elcontact.style.height = rectContact.height - (prevYcontact - e.clientY) + "px";
        prevXcontact = e.clientX;
        prevYcontact = e.clientY;
      } else if(currentResizer.classList.contains('cosw')) {
        elcontact.style.width = rectContact.width + (prevXcontact - e.clientX) + "px";
        elcontact.style.height = rectContact.height - (prevYcontact - e.clientY) + "px";
        elcontact.style.left = rectContact.left - (prevXcontact - e.clientX) + "px";
        prevXcontact = e.clientX;
        prevYcontact = e.clientY;
      }

      if(currentResizer.classList.contains('wase')) {
        elwaves.style.width = rectWaves.width - (prevXwaves - e.clientX) + "px";
        elwaves.style.height = rectWaves.height - (prevYwaves - e.clientY) + "px";
        prevXwaves = e.clientX;
        prevYwaves = e.clientY;
      } else if(currentResizer.classList.contains('wasw')) {
        elwaves.style.width = rectWaves.width + (prevXwaves - e.clientX) + "px";
        elwaves.style.height = rectWaves.height - (prevYwaves - e.clientY) + "px";
        elwaves.style.left = rectWaves.left - (prevXwaves - e.clientX) + "px";
        prevXwaves = e.clientX;
        prevYwaves = e.clientY;
      }
    }
    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}

// OPEN or CLOSE functions
function openPurple() {
  var x = document.querySelector(".purple");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function openOrange() {
  var x = document.querySelector(".orange");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function openContact() {
  var x = document.querySelector(".wcontact");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function openWaves() {
  var x = document.querySelector(".wwaves");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

// close all
function closeAll() {
  document.querySelector(".wwaves").style.display = "none";
  document.querySelector(".wcontact").style.display = "none";
  document.querySelector(".orange").style.display = "none";
  document.querySelector(".purple").style.display = "none";
}

