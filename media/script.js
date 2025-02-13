// MOVE WINDOW

// targets
const eljujube = document.querySelector(".jujube");
const eldesign = document.querySelector(".design");
const elintangible = document.querySelector(".intangible");
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
eljujube.addEventListener('mousedown', mousedownjujube);
eldesign.addEventListener('mousedown', mousedowndesign);
elintangible.addEventListener('mousedown', mousedownintangible);
elpurple.addEventListener('mousedown', mousedownpurple);
elorange.addEventListener('mousedown', mousedownorange);
elcontact.addEventListener('mousedown', mousedowncontact);
elwaves.addEventListener('mousedown', mousedownwaves);

// JUJUBE 
// mouse DOWN
function mousedownjujube(e) {
  
  // bring to front
  document.querySelector(".jujube").style.zIndex = "100";
  document.querySelector(".design").style.zIndex = "98";
  document.querySelector(".intangible").style.zIndex = "97";
  document.querySelector(".purple").style.zIndex = "96";
  document.querySelector(".orange").style.zIndex = "95";
  document.querySelector(".wcontact").style.zIndex = "92";
  document.querySelector(".wwaves").style.zIndex = "90";
  
  window.addEventListener('mousemove', mousemovejujube);
  window.addEventListener('mouseup', mouseupjujube);

  prevXjujube = e.clientX;
  prevYjujube = e.clientY;

}
// mouse MOVE
function mousemovejujube(e) {
  if(!isResizing) {
    let newX = prevXjujube - e.clientX;
    let newY = prevYjujube - e.clientY;
    
    const rect = eljujube.getBoundingClientRect();

    eljujube.style.left = rect.left - newX + "px";
    eljujube.style.top = rect.top - newY + "px";

    prevXjujube = e.clientX;
    prevYjujube = e.clientY;
  }
}
// mouse UP
function mouseupjujube() {
  window.removeEventListener("mousemove", mousemovejujube);
  window.removeEventListener("mouseup", mouseupjujube);
}

// DESIGN 
// mouse DOWN
function mousedowndesign(e) {
  
  // bring to front
  document.querySelector(".design").style.zIndex = "100";
  document.querySelector(".jujube").style.zIndex = "99";
  document.querySelector(".intangible").style.zIndex = "97";
  document.querySelector(".purple").style.zIndex = "96";
  document.querySelector(".orange").style.zIndex = "95";
  document.querySelector(".wcontact").style.zIndex = "92";
  document.querySelector(".wwaves").style.zIndex = "90";
  
  window.addEventListener('mousemove', mousemovedesign);
  window.addEventListener('mouseup', mouseupdesign);

  prevXdesign = e.clientX;
  prevYdesign = e.clientY;

}
// mouse MOVE
function mousemovedesign(e) {
  if(!isResizing) {
    let newX = prevXdesign - e.clientX;
    let newY = prevYdesign - e.clientY;
    
    const rect = eldesign.getBoundingClientRect();

    eldesign.style.left = rect.left - newX + "px";
    eldesign.style.top = rect.top - newY + "px";

    prevXdesign = e.clientX;
    prevYdesign = e.clientY;
  }
}
// mouse UP
function mouseupdesign() {
  window.removeEventListener("mousemove", mousemovedesign);
  window.removeEventListener("mouseup", mouseupdesign);
}

// INTANGIBLE 
// mouse DOWN
function mousedownintangible(e) {
  
  // bring to front
  document.querySelector(".intangible").style.zIndex = "100";
  document.querySelector(".jujube").style.zIndex = "98";
  document.querySelector(".design").style.zIndex = "97";
  document.querySelector(".purple").style.zIndex = "96";
  document.querySelector(".orange").style.zIndex = "95";
  document.querySelector(".wcontact").style.zIndex = "92";
  document.querySelector(".wwaves").style.zIndex = "90";
  
  window.addEventListener('mousemove', mousemoveintangible);
  window.addEventListener('mouseup', mouseupintangible);

  prevXintangible = e.clientX;
  prevYintangible = e.clientY;

}
// mouse MOVE
function mousemoveintangible(e) {
  if(!isResizing) {
    let newX = prevXintangible - e.clientX;
    let newY = prevYintangible - e.clientY;
    
    const rect = elintangible.getBoundingClientRect();

    elintangible.style.left = rect.left - newX + "px";
    elintangible.style.top = rect.top - newY + "px";

    prevXintangible = e.clientX;
    prevYintangible = e.clientY;
  }
}
// mouse UP
function mouseupintangible() {
  window.removeEventListener("mousemove", mousemoveintangible);
  window.removeEventListener("mouseup", mouseupintangible);
}


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

    let prevXjujube = e.clientX;
    let prevXdesign = e.clientX;
    let prevXintangible = e.clientX;
    let prevXpurple = e.clientX;
    let prevYpurple = e.clientY;
    let prevXorange = e.clientX;
    let prevYorange = e.clientY;

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    function mousemove(e) {
      const rectJujube = eljujube.getBoundingClientRect();
      const rectDesign = eldesign.getBoundingClientRect();
      const rectIntangible = elintangible.getBoundingClientRect();
      const rectPurple = elpurple.getBoundingClientRect();
      const rectOrange = elorange.getBoundingClientRect();
      const rectContact = elcontact.getBoundingClientRect();
      const rectWaves = elwaves.getBoundingClientRect();


      if(currentResizer.classList.contains('juse')) {
        eljujube.style.width = rectJujube.width - (prevXjujube - e.clientX) + "px";
        eljujube.style.height = rectJujube.height - (prevYjujube - e.clientY) + "px";
        prevXjujube = e.clientX;
        prevYjujube = e.clientY;
      } else if(currentResizer.classList.contains('jusw')) {
        eljujube.style.width = rectJujube.width + (prevXjujube - e.clientX) + "px";
        eljujube.style.height = rectJujube.height - (prevYjujube - e.clientY) + "px";
        eljujube.style.left = rectJujube.left - (prevXjujube - e.clientX) + "px";
        prevXjujube = e.clientX;
        prevYjujube = e.clientY;
      }

      if(currentResizer.classList.contains('dese')) {
        eldesign.style.width = rectDesign.width - (prevXdesign - e.clientX) + "px";
        eldesign.style.height = rectDesign.height - (prevYdesign - e.clientY) + "px";
        prevXdesign = e.clientX;
        prevYdesign = e.clientY;
      } else if(currentResizer.classList.contains('desw')) {
        eldesign.style.width = rectDesign.width + (prevXdesign - e.clientX) + "px";
        eldesign.style.height = rectDesign.height - (prevYdesign - e.clientY) + "px";
        eldesign.style.left = rectDesign.left - (prevXdesign - e.clientX) + "px";
        prevXdesign = e.clientX;
        prevYdesign = e.clientY;
      }

      if(currentResizer.classList.contains('inse')) {
        elintangible.style.width = rectIntangible.width - (prevXintangible - e.clientX) + "px";
        elintangible.style.height = rectIntangible.height - (prevYintangible - e.clientY) + "px";
        prevXintangible = e.clientX;
        prevYintangible = e.clientY;
      } else if(currentResizer.classList.contains('insw')) {
        elintangible.style.width = rectIntangible.width + (prevXintangible - e.clientX) + "px";
        elintangible.style.height = rectIntangible.height - (prevYintangible - e.clientY) + "px";
        elintangible.style.left = rectIntangible.left - (prevXintangible - e.clientX) + "px";
        prevXintangible = e.clientX;
        prevYintangible = e.clientY;
      }

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
function openJujube() {
  var x = document.querySelector(".jujube");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function openDesign() {
  var x = document.querySelector(".design");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function openIntangible() {
  var x = document.querySelector(".intangible");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

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
  document.querySelector(".jujube").style.display = "none";
  document.querySelector(".design").style.display = "none";
  document.querySelector(".intangible").style.display = "none";
  document.querySelector(".wwaves").style.display = "none";
  document.querySelector(".wcontact").style.display = "none";
  document.querySelector(".orange").style.display = "none";
  document.querySelector(".purple").style.display = "none";
}

