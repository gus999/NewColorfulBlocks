/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

var enterEventCount = 0;
const colorBtn = document.querySelector("#btn-1");
let running = false;

var enterEventCount = 0;
var leaveEventCount = 0;
const gridContainer = document.querySelector(".grid");
const unorderedList = document.getElementById("unorderedList");

gridContainer.addEventListener("mouseenter", (e) => {
  gridContainer.style.outline = "5px dotted orange";

  enterEventCount++;
  addListItem("This is mouseenter event " + enterEventCount + ".");
});

gridContainer.addEventListener("mouseleave", (e) => {
  gridContainer.style.outline = "1px solid #333";
  leaveEventCount++;
  addListItem("This is mouseleave event " + leaveEventCount + ".");
});

function addListItem(text) {
  // Create a new text node using the supplied text
  var newTextNode = document.createTextNode(text);

  // Create a new li element
  var newListItem = document.createElement("li");

  // Add the text node to the li element
  newListItem.appendChild(newTextNode);

  // Add the newly created list item to list
  unorderedList.appendChild(newListItem);
}

/**
 * Function to generate random hex color
 */
const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};
// 16777215 is the white color

/* 
toString(radix):

radix Optional
An integer in the range 2 through 36 specifying the base to use for representing numeric values.

Hexadecimal is base 16. Break down the words: hexa, meaning 6; decimal, meaning 10. 10 + 6 = 16. A few major bases are:

Base 2: Binary, 2 numbers: [0, 1]
Base 8: Octal, 8 numbers: [0, 7]
Base 10: Decimal, 10 numbers: [0, 9]
Base 16: Hexadecimal, 16 symbols: [0, 9] and [A, F]
*/

// Get all cells
const gridCells = document.querySelectorAll(".cell");

// For each cell, add eventlisteners aplenty
gridCells.forEach((cell) => {
  // Set outline when cell is hovered
  cell.addEventListener("mouseenter", (e) => {
    console.log(e);
    cell.style.outline = "2px solid red";
  });

  // Remove outline when cell is exited
  cell.addEventListener("mouseleave", () => {
    cell.style.outline = "";
  });

  // Set/remove random background color on click

  cell.addEventListener("click", () => {
    // if first statement is true (cell has background color) then make it blank, else give it some color
    if (cell.style.backgroundColor) {
      cell.style.backgroundColor = "";
    } else {
      cell.style.backgroundColor = `#${randColor()}`;
    }
  });
});

const body = document.body;
body.addEventListener("keypress", (event) => {
  // event.code holds the current key pressed:
  console.log(event.code);

  // Test for KeyD (the "d" key)
  if (event.code === "KeyD") {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
      : (body.style.backgroundColor = "");
  }
});

function changer() {
  if (running) {
    gridCells.forEach((cell) => {
      cell.style.backgroundColor = `#${randColor()}`;
    });
    setTimeout(changer, 500);
  }
}
// Event listener for button
colorBtn.addEventListener("click", function () {
  colorBtn.innerText = "STOP";
  if (running) {
    running = false;
    colorBtn.innerText = "CHANGE ALL COLOR";
  } else {
    running = true;
    changer();
  }
});
