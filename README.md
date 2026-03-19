# Etch-A-Sketch

Etch-A-Sketch
A browser-based pixel sketch pad built with vanilla HTML, CSS, and JavaScript. Draw by hovering your mouse over the grid — no clicks needed!

Take a look at : https://shriyashzzz.github.io/Etch-A-Sketch/

What it does:

Generates a 16×16 grid of squares on load
Hovering over a square colors it in, leaving a pixelated trail like a pen
Each square gets a random color on interaction
Colors progressively darken with each hover — 10 interactions = fully solid
A custom grid  button lets you choose a new grid size (up to 100×100), all within the same 672×672px canvas
A reset button taht resets the sketch pad while retaining the grid size.

What I learned
This project taught me a lot more than I expected going in:

Flexbox — how flex-wrap turns a row of divs into a grid, and how justify-content / align-items center things on the page.
I did learn this before but it had been a while, so nice refresh on those topics.

Button Styles- Laearned that you could basically find any kind of buttons on the web.

Color Schemes: discovered color.coo, amazing site, now my site looks at least a bit eye-friendly. 

The CSS box model — why border: 1px was throwing off my grid math, and how box-sizing: border-box fixes it cleanly

JavaScript DOM manipulation — creating elements dynamically with createElement, adding classes, setting inline styles, and appending to the DOM

Event listeners — using mouseenter to trigger hover effects without needing clicks

Closures — understanding why let opacity inside a loop gives each square its own private variable

replaceChildren() — a clean way to wipe and regenerate the grid without leftover elements

prompt() — taking user input via a popup and converting it with + to a number

Floating point quirks — why 0.1 + 0.1 + 0.1 doesn't equal 0.3 in JavaScript, and how .toFixed() fixes it

Styles -  Didn't know styles properties needed to be enclosed with '"', that gave me a lot of headache haha.


Built with

HTML
CSS (Flexbox)
Vanilla JavaScript


© github.com/Shriyashzzz