// declare variables
let prevX_Web, prevY_Web;
let prevX_Bio, prevY_Bio;
let isMovingBio = false;
let isMovingWeb = false;
let isResizingWeb = false;
let isResizingBio = false;
let currentResizer;
// let isResizingPurple = false;

// get their reference
const web = document.querySelector(".win-web");
const bio = document.querySelector(".win-bio");
const resizersWeb = document.querySelectorAll(".resizerWeb");
const resizersBio = document.querySelectorAll(".resizerBio");

// mouse down
web.addEventListener("mousedown", mousedownWeb);
bio.addEventListener("mousedown", mousedownBio);
resizersWeb.addEventListener("mousedown", mousedownWebsize);
resizersBio.addEventListener("mousedown", mousedownBiosize);

// MOVE WINDOWS
function mousedownWeb(e) {
  // remember where you start moving
  prevX_Web = e.clientX;
  prevY_Web = e.clientY;

  // listen to mouse changes
  window.addEventListener("mousemove", mousemoveWeb);
  window.addEventListener("mouseup", mouseupWeb);
}

function mousedownBio(e) {
  // remember where you start moving
  prevX_Bio = e.clientX;
  prevY_Bio = e.clientY;

  // listen to mouse changes
  window.addEventListener("mousemove", mousemoveBio);
  window.addEventListener("mouseup", mouseupBio);
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

function mouseupWeb() {
  window.removeEventListener("mousemove", mousemoveWeb);
  window.removeEventListener("mouseup", mouseupWeb);
  isMovingWeb = false;
}

function mouseupBio() {
  window.removeEventListener("mousemove", mousemoveBio);
  window.removeEventListener("mouseup", mouseupBio);
  isMovingBio = false;
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

// MOVE WINDOW
const el = document.querySelector(".win-web");
let currentPurple;

  el.addEventListener('mousedown', mousedown);

  function mousedown(e) {
    currentPurple = e.target;
    isMovingPurple = true;

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    let prevX_Web = e.clientX;
    let prevY_Web = e.clientY;

    function mousemove(e) {
      if(!isMovingOrange && !isResizing) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = el.getBoundingClientRect();

        el.style.left = rect.left - newX + "px";
        el.style.top = rect.top - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;
      }
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isMovingPurple = false;
    }
}

// // RESIZE WINDOW
// const resizers = document.querySelectorAll(".resizer");
//
//   for (let resizer of resizers) {
//     resizerWeb.addEventListener('mousedown', mousedownWebsize);
//
//     function mousedownWebsize(e) {
//       currentResizer = e.target;
//       isResizingWeb = true;
//
//       let prevX = e.clientX;
//       let prevY = e.clientY;
//
//       window.addEventListener('mousemove', mousemoveWebsize);
//       window.addEventListener('mouseup', mouseupWebsize);
//
//       function mousemoveWebsize(e) {
//         const rect = el.getBoundingClientRect();
//
//         if(currentResizer.classList.contains('urse')) {
//           el.style.width = rect.width - (prevX - e.clientX) + "px";
//           el.style.height = rect.height - (prevY - e.clientY) + "px";
//         } else if(currentResizer.classList.contains('ursw')) {
//           el.style.width = rect.width + (prevX - e.clientX) + "px";
//           el.style.height = rect.height - (prevY - e.clientY) + "px";
//           el.style.left = rect.left - (prevX - e.clientX) + "px";
//         } else if(currentResizer.classList.contains('urne')) {
//           el.style.width = rect.width - (prevX - e.clientX) + "px";
//           el.style.height = rect.height + (prevY - e.clientY) + "px";
//           el.style.top = rect.top - (prevY - e.clientY) + "px";
//         } else if(currentResizer.classList.contains('urnw')){
//           el.style.width = rect.width + (prevX - e.clientX) + "px";
//           el.style.height = rect.height + (prevY - e.clientY) + "px";
//           el.style.top = rect.top - (prevY - e.clientY) + "px";
//           el.style.left = rect.left - (prevX - e.clientX) + "px";
//         }
//
//         prevX = e.clientX;
//         prevY = e.clientY;
//       }
//
//       function mouseupWebsize() {
//         window.removeEventListener("mousemove", mousemoveWebsize);
//         window.removeEventListener("mouseup", mouseupWebsize);
//         isResizingWeb = false;
//       }
//     }
//   }
