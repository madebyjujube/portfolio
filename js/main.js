// declare variables
let prevX_Web, prevY_Web;
let prevX_Bio, prevY_Bio;
let prevX_Contact, prevY_Contact;
let isResizingWeb = false;
let isResizingBio = false;
// let currentResizer;
// let isResizingPurple = false;

// get their reference
const web = document.querySelector(".winweb");
const bio = document.querySelector(".winbio");
const contact = document.querySelector(".wincontact");
const music = document.querySelector(".winmusic");
const resizersWeb = document.querySelectorAll(".resizerWeb");
const resizersBio = document.querySelectorAll(".resizerBio");
const resizersMusic = document.querySelectorAll(".resizerMusic");

// mouse down
web.addEventListener("mousedown", mousedownWeb);
bio.addEventListener("mousedown", mousedownBio);
contact.addEventListener("mousedown", mousedownContact);
// resizersWeb.addEventListener("mousedown", mousedownWebsize);
// resizersBio.addEventListener("mousedown", mousedownBiosize);

// MOVE WINDOWS
function mousedownWeb(e) {
  document.getElementById("windowWeb").style.zIndex = "3";
  document.getElementById("windowContact").style.zIndex = "2";
  document.getElementById("windowBio").style.zIndex = "1";
  // remember where you start moving
  prevX_Web = e.clientX;
  prevY_Web = e.clientY;

  // listen to mouse changes
  window.addEventListener("mousemove", mousemoveWeb);
  window.addEventListener("mouseup", mouseupWeb);
}

function mousedownBio(e) {
  document.getElementById("windowBio").style.zIndex = "3";
  document.getElementById("windowContact").style.zIndex = "2";
  document.getElementById("windowWeb").style.zIndex = "1";
  // remember where you start moving
  prevX_Bio = e.clientX;
  prevY_Bio = e.clientY;

  // listen to mouse changes
  window.addEventListener("mousemove", mousemoveBio);
  window.addEventListener("mouseup", mouseupBio);
}

function mousedownContact(e) {
  document.getElementById("windowContact").style.zIndex = "3";
  document.getElementById("windowWeb").style.zIndex = "2";
  document.getElementById("windowBio").style.zIndex = "1";
  // remember where you start moving
  prevX_Contact = e.clientX;
  prevY_Contact = e.clientY;

  // listen to mouse changes
  window.addEventListener("mousemove", mousemoveContact);
  window.addEventListener("mouseup", mouseupContact);
}

function mousemoveWeb(e) {
  if (!isResizingWeb && !isResizingBio) {
    let newX = prevX_Web - e.clientX;
    let newY = prevY_Web - e.clientY;

    const rect = web.getBoundingClientRect();

    web.style.left = rect.left - newX + "px";
    web.style.top = rect.top - newY + "px";

    prevX_Web = e.clientX;
    prevY_Web = e.clientY;
  }
}

function mousemoveBio(e) {
  if (!isResizingWeb && !isResizingBio) {
    let newX = prevX_Bio - e.clientX;
    let newY = prevY_Bio - e.clientY;

    const rect = bio.getBoundingClientRect();

    bio.style.left = rect.left - newX + "px";
    bio.style.top = rect.top - newY + "px";

    prevX_Bio = e.clientX;
    prevY_Bio = e.clientY;
  }
}

function mousemoveContact(e) {
  if (!isResizingWeb && !isResizingBio) {
    let newX = prevX_Contact - e.clientX;
    let newY = prevY_Contact - e.clientY;

    const rect = contact.getBoundingClientRect();

    contact.style.left = rect.left - newX + "px";
    contact.style.top = rect.top - newY + "px";

    prevX_Contact = e.clientX;
    prevY_Contact = e.clientY;
  }
}

function mouseupWeb() {
  window.removeEventListener("mousemove", mousemoveWeb);
  window.removeEventListener("mouseup", mouseupWeb);
}

function mouseupBio() {
  window.removeEventListener("mousemove", mousemoveBio);
  window.removeEventListener("mouseup", mouseupBio);
}

function mouseupContact() {
  window.removeEventListener("mousemove", mousemoveContact);
  window.removeEventListener("mouseup", mouseupContact);
}

// OPEN-CLOSE WINDOWS
function closeBio() {
  var x = document.getElementById("windowBio");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function openBio() {
  var x = document.getElementById("windowBio");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function closeContact() {
  var x = document.getElementById("windowContact");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function openContact() {
  var x = document.getElementById("windowContact");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

function closeWebwin() {
  var x = document.getElementById("windowWeb");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function openWebwin() {
  var x = document.getElementById("windowWeb");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

// FOCUS WINDOW
function zContact() {
  document.getElementById("windowContact").style.zIndex = "3";
}

function zWebwin() {
  var x = document.getElementById("windowWeb");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function zWebwin() {
  var x = document.getElementById("windowWeb");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}
