function randomNumber(start, end) {
    return Math.floor((Math.random() * end) + start);
}
function moveEverything() {
    return true;
}
function updateAll() {
    moveEverything();
    drawEverything();
}

function setFont(size, font) {
    canvasContext.font = size + "px " + font;
}