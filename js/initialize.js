function initializeCanvas() {
    // console.log('Called initializeCanvas()');  // DEBUG

    canvas = document.getElementById('gameCanvas'); // This grabs the canvas from the HTML for use in the script.
    canvasContext = canvas.getContext('2d'); // "The getContext() method returns an object that provides methods and properties for drawing on the canvas." from w3schools.com
    canvasBGColor = 'black';

    // console.log('initializeCanvas() complete');  // DEBUG
}
function initializeFPS() {
    // console.log('Called initializeFPS()');  // DEBUG

    framesPerSecond = 30;

    // console.log('initializeFPS() complete');  // DEBUG
}
/*function initializeImages() {
    imageName.src = "./images/imageName.png";

    imageWidth = canvas.width * 0.10;
    imageHeight = canvas.height * 0.186666666666;
    imageScaleModifier = 1;
}*/
function initializeEverything() {
    // console.log('Called initializeEverything()');  // DEBUG

    //debugCard = 0;

    initializeCanvas();
    initializeFPS();
    initInput();

    // console.log('initializeEverything() completed');  // DEBUG

}