# background-gradient
Creation of background gradient generator with active "random colors" button

This BG Gradient generator was created during 'Zero to mastery' web development Udemy course.

Functions and elements added during work:
- createButton function 
  a) creates div element with button element as a child after h1 element;
  b) adds styles to the button;
  c) adds eventListeners to the button;
- rBtnHoverOn and *HoverOff functions which change the button background gradient on mouse enter and leave;
- setDefColors function which sets the default colors for the color input windows on page load according to those used in style.css for default bacground gradient;
- randomColors function which creates 2 randomly generated colors for gradient in RGB format with transition them to HEX format;
- getRndInteger function which creates random integer between 0 and 255 (both included) needed for the color creation;
- rndmBtnGrdnt functions which creates random colors for the button on mouse down;

Elements of the project given by the teacher:
- style.css;
- SetGradient function;
- line 105: color1.addEventListener("input", setGradient);
- line 107: color2.addEventListener("input", setGradient);

Functions found on the internet:
- rgbToHex();
- fullColorHex();

Things to add and fix:
- figure out why some styles won't work with button such as text formatting, border formatting;
- put all the formatting for the button in the separate function rBtnStyle();
- fix mouse enter and mouse leave events;
- add text gradient to the h1 element opposite the background gradient colors which changes on click;
- clear randomColors() function code;
