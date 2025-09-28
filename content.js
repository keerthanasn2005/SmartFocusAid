// This version changes the page's background color and keeps the highlight feature.
console.log("🧠 Smart Focus Aid script loaded! (v9 - Custom Background)");

// --- FEATURE 1: CHANGE PAGE BACKGROUND & HIGHLIGHT TEXT ---

// Create a <style> element to inject our CSS rules into the page.
const styleElement = document.createElement('style');
document.head.appendChild(styleElement);

// Define the CSS styles.
styleElement.innerHTML = `
  /* Set a new, comfortable background color for the entire page */
  body, html {
    background-color: #F5F5DC !important; /* A professional, light beige color */
  }

  /* This class is for the element we are focusing on */
  .sfa-highlight-elem {
    background-color: #FFFFE0 !important; /* Light yellow background */
    color: #000000 !important; /* MAKE TEXT BLACK */
    font-weight: bold !important; /* MAKE TEXT BOLDER */
    transition: background-color 0.2s ease-in-out !important;
  }
`;

// Get all the relevant text elements on the page.
const allElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, span, div.mw-parser-output > *, blockquote, code, pre');

// This function runs when the mouse enters an element.
function onMouseOver(event) {
  event.target.classList.add('sfa-highlight-elem');
}

// This function runs when the mouse leaves an element.
function onMouseOut(event) {
  event.target.classList.remove('sfa-highlight-elem');
}

// Attach our functions to every relevant element on the page.
allElements.forEach(elem => {
  if (elem.textContent.trim().length > 0) {
    elem.addEventListener('mouseover', onMouseOver);
    elem.addEventListener('mouseout', onMouseOut);
  }
});