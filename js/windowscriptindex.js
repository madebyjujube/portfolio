// targets
const elwinbio = document.querySelector(".winbio");
const elwinweb = document.querySelector(".winweb");
const elwincontact = document.querySelector(".wincontact");
const elwinmusic = document.querySelector(".winmusic");
const resizers = document.querySelectorAll(".resizer");

// define variables
let e = window.event;
let currentResizer;
let isResizing = false;
let prevXwinmusic;
let prevYwinmusic;

elwinbio.addEventListener('mousedown', mousedownwinbio);
elwinweb.addEventListener('mousedown', mousedownwinweb);
elwincontact.addEventListener('mousedown', mousedownwincontact);
elwinmusic.addEventListener('mousedown', mousedownwinmusic);


// BIO
function mousedownwinbio(e) {
  window.addEventListener('mousemove', mousemovewinbio);
  window.addEventListener('mouseup', mouseupwinbio);

  prevXwinbio = e.clientX;
  prevYwinbio = e.clientY;
}

function mousemovewinbio(e) {
  if(!isResizing) {
    let newX = prevXwinbio - e.clientX;
    let newY = prevYwinbio - e.clientY;

    const rect = elwinbio.getBoundingClientRect();

    elwinbio.style.left = rect.left - newX + "px";
    elwinbio.style.top = rect.top - newY + "px";

    prevXwinbio = e.clientX;
    prevYwinbio = e.clientY;
  }
}

function mouseupwinbio() {
  window.removeEventListener("mousemove", mousemovewinbio);
  window.removeEventListener("mouseup", mouseupwinbio);
}

// WEB 
function mousedownwinweb(e) {
  window.addEventListener('mousemove', mousemovewinweb);
  window.addEventListener('mouseup', mouseupwinweb);

  prevXwinweb = e.clientX;
  prevYwinweb = e.clientY;
}

function mousemovewinweb(e) {
  if(!isResizing) {
    let newX = prevXwinweb - e.clientX;
    let newY = prevYwinweb - e.clientY;

    const rect = elwinweb.getBoundingClientRect();

    elwinweb.style.left = rect.left - newX + "px";
    elwinweb.style.top = rect.top - newY + "px";

    prevXwinweb = e.clientX;
    prevYwinweb = e.clientY;
  }
}

function mouseupwinweb() {
  window.removeEventListener("mousemove", mousemovewinweb);
  window.removeEventListener("mouseup", mouseupwinweb);
}

// CONTACT
function mousedownwincontact(e) {
  window.addEventListener('mousemove', mousemovewincontact);
  window.addEventListener('mouseup', mouseupwincontact);

  prevXwincontact = e.clientX;
  prevYwincontact = e.clientY;
}

function mousemovewincontact(e) {
  if(!isResizing) {
    let newX = prevXwincontact - e.clientX;
    let newY = prevYwincontact - e.clientY;

    const rect = elwincontact.getBoundingClientRect();

    elwincontact.style.left = rect.left - newX + "px";
    elwincontact.style.top = rect.top - newY + "px";

    prevXwincontact = e.clientX;
    prevYwincontact = e.clientY;
  }
}

function mouseupwincontact() {
  window.removeEventListener("mousemove", mousemovewincontact);
  window.removeEventListener("mouseup", mouseupwincontact);
}

// MUSIC
function mousedownwinmusic(e) {
  window.addEventListener('mousemove', mousemovewinmusic);
  window.addEventListener('mouseup', mouseupwinmusic);

  prevXwincontact = e.clientX;
  prevYwincontact = e.clientY;
}

function mousemovewinmusic(e) {
  if(!isResizing) {
    let newX = prevXwinmusic - e.clientX;
    let newY = prevYwinmusic - e.clientY;

    const rect = elwinmusic.getBoundingClientRect();

    elwinmusic.style.left = rect.left - newX + "px";
    elwinmusic.style.top = rect.top - newY + "px";

    prevXwinmusic = e.clientX;
    prevYwinmusic = e.clientY;
  }
}

function mouseupwinmusic() {
  window.removeEventListener("mousemove", mousemovewinmusic);
  window.removeEventListener("mouseup", mouseupwinmusic);
}



// RESIZE WINDOW

// BIO
for (let resizer of resizers) {
  resizer.addEventListener('mousedown', mousedown);

  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    let prevXwinbio = e.clientX;
    let prevYwinbio = e.clientY;

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    function mousemove(e) {
      const rect = elwinbio.getBoundingClientRect();

      if(currentResizer.classList.contains('biose')) {
        elwinbio.style.width = rect.width - (prevXwinbio - e.clientX) + "px";
        elwinbio.style.height = rect.height - (prevYwinbio - e.clientY) + "px";
      } else if(currentResizer.classList.contains('biosw')) {
        elwinbio.style.width = rect.width + (prevXwinbio - e.clientX) + "px";
        elwinbio.style.height = rect.height - (prevYwinbio - e.clientY) + "px";
        elwinbio.style.left = rect.left - (prevXwinbio - e.clientX) + "px";
      }

      prevXwinbio = e.clientX;
      prevYwinbio = e.clientY;
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}

// WEB
for (let resizer of resizers) {
  resizer.addEventListener('mousedown', mousedown);

  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    let prevXwinweb = e.clientX;
    let prevYwinweb = e.clientY;

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    function mousemove(e) {
      const rect = elwinweb.getBoundingClientRect();

      if(currentResizer.classList.contains('webse')) {
        elwinweb.style.width = rect.width - (prevXwinweb - e.clientX) + "px";
        elwinweb.style.height = rect.height - (prevYwinweb - e.clientY) + "px";
      } else if(currentResizer.classList.contains('websw')) {
        elwinweb.style.width = rect.width + (prevXwinweb - e.clientX) + "px";
        elwinweb.style.height = rect.height - (prevYwinweb - e.clientY) + "px";
        elwinweb.style.left = rect.left - (prevXwinweb - e.clientX) + "px";
      }

      prevXwinweb = e.clientX;
      prevYwinweb = e.clientY;
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}

// CONTACT
for (let resizer of resizers) {
  resizer.addEventListener('mousedown', mousedown);

  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    let prevXwincontact = e.clientX;
    let prevYwincontact = e.clientY;

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    function mousemove(e) {
      const rect = elwincontact.getBoundingClientRect();

      if(currentResizer.classList.contains('contactse')) {
        elwincontact.style.width = rect.width - (prevXwincontact - e.clientX) + "px";
        elwincontact.style.height = rect.height - (prevYwincontact - e.clientY) + "px";
      } else if(currentResizer.classList.contains('contactsw')) {
        elwincontact.style.width = rect.width + (prevXwincontact - e.clientX) + "px";
        elwincontact.style.height = rect.height - (prevYwincontact - e.clientY) + "px";
        elwincontact.style.left = rect.left - (prevXwincontact - e.clientX) + "px";
      }

      prevXwincontact = e.clientX;
      prevYwincontact = e.clientY;
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}

// MUSIC
for (let resizer of resizers) {
  resizer.addEventListener('mousedown', mousedown);

  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    let prevXwinmusic = e.clientX;
    let prevYwinmusic = e.clientY;

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    function mousemove(e) {
      const rect = elwinmusic.getBoundingClientRect();

      if(currentResizer.classList.contains('musicse')) {
        elwinmusic.style.width = rect.width - (prevXwinmusic - e.clientX) + "px";
        elwinmusic.style.height = rect.height - (prevYwinmusic - e.clientY) + "px";
      } else if(currentResizer.classList.contains('musicsw')) {
        elwinmusic.style.width = rect.width + (prevXwinmusic - e.clientX) + "px";
        elwinmusic.style.height = rect.height - (prevYwinmusic - e.clientY) + "px";
        elwinmusic.style.left = rect.left - (prevXwinmusic - e.clientX) + "px";
      }

      prevXwinmusic = e.clientX;
      prevYwinmusic = e.clientY;
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}




// OPEN-CLOSE WINDOWS
function openBio() {
  var x = document.querySelector(".winbio");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function closeBio() {
  var x = document.querySelector(".winbio");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}


function openWebwin() {
  var x = document.querySelector(".winweb");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function closeWebwin() {
  var x = document.querySelector(".winweb");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}


function openContact() {
  var x = document.querySelector(".wincontact");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function closeContact() {
  var x = document.querySelector(".wincontact");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function openMusic() {
  var x = document.querySelector(".winmusic");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function closeMusic() {
  var x = document.querySelector(".winmusic");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}


// FOCUS WINDOW
function zBiowin() {
  document.querySelector(".winbio").style.zIndex = "100";
  document.querySelector(".wincontact").style.zIndex = "90";
  document.querySelector(".winmusic").style.zIndex = "85";
  document.querySelector(".winweb").style.zIndex = "80";
}

function zWebwin() {
  document.querySelector(".winweb").style.zIndex = "100";
  document.querySelector(".winmusic").style.zIndex = "90";
  document.querySelector(".wincontact").style.zIndex = "85";
  document.querySelector(".winbio").style.zIndex = "80";
}

function zContactwin() {
  document.querySelector(".wincontact").style.zIndex = "100";
  document.querySelector(".winmusic").style.zIndex = "95";
  document.querySelector(".winweb").style.zIndex = "90";
  document.querySelector(".winbio").style.zIndex = "80";
}

function zMusicwin() {
  document.querySelector(".winmusic").style.zIndex = "100";
  document.querySelector(".wincontact").style.zIndex = "95";
  document.querySelector(".winweb").style.zIndex = "90";
  document.querySelector(".winbio").style.zIndex = "80";
}
