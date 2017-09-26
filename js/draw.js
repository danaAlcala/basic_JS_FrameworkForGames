/*function drawImage(x, y, sheetX, sheetY) {			
	canvasContext.drawImage(imageName, sheetX * IMAGE_FROM_SHEET_WIDTH, sheetY * IMAGE_FROM_SHEET_HEIGHT, IMAGE_FROM_SHEET_WIDTH, IMAGE_FROM_SHEET_HEIGHT, x, y, imageWidth * imageScaleModifier, imageHeight * imageScaleModifier);
}*/
function drawCanvas() {
    // console.log('Called drawCanvas()');  // DEBUG

    canvasContext.fillStyle = canvasBGColor; // "fillStyle Sets or returns the color, gradient, or pattern used to fill the drawing." from w3schools.com
    canvasContext.fillRect(0, 0, canvas.width, canvas.height); // Doesn't fill an existing rectangle, but instead creates a filled rectangle.

    // console.log('drawCanvas() complete');  // DEBUG
}
function drawRect(color, x, y, width, height) {
    // console.log('Called drawRect()');  // DEBUG

    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);

    // console.log('drawRect() complete');  // DEBUG
}
function drawIsoRhombusFilled(color, x, y, squareSize){
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.moveTo(x, y + squareSize / 4);
    canvasContext.lineTo(x + squareSize, y);
    canvasContext.lineTo(x + 2 * squareSize, y + squareSize / 4);
    canvasContext.lineTo(x + squareSize, y + squareSize /2);
    canvasContext.closePath();
    canvasContext.fill();
}
function drawIsoRhombusWire(fillColor, strokeColor, x, y, squareSize){
    canvasContext.fillStyle = fillColor;
    canvasContext.strokeStyle = strokeColor;
    canvasContext.beginPath();
    canvasContext.moveTo(x, y + squareSize / 4);
    canvasContext.lineTo(x + squareSize, y);
    canvasContext.lineTo(x + 2 * squareSize, y + squareSize / 4);
    canvasContext.lineTo(x + squareSize, y + squareSize /2);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();
}
function drawLine(strokeColor, startX, startY, endX, endY){
    canvasContext.strokeStyle = strokeColor;
    canvasContext.beginPath();
    canvasContext.moveTo(startX, startY);
    canvasContext.lineTo(endX, endY);
    canvasContext.closePath();
    canvasContext.stroke();
}
function drawGrassTile(x,y){
    drawIsoRhombusFilled(grassColor, x, y, tileSize);
}
function drawWallTile(x,y){
    for (var i = 0; i <= wallHeight; i++){
        drawIsoRhombusFilled(wallColor, x, y - i, tileSize);
    }
    drawIsoRhombusWire(wallColor, wallOutlineColor, x, y - wallHeight, tileSize);
    drawLine(wallOutlineColor, x + tileSize, y + tileSize / 2, x + tileSize, y - wallHeight + tileSize / 2);
}
function drawMap(x,y){
    var isoX = x
    var isoY = y
    for (var rows = 0; rows < tileMap.length; rows ++){
        if (rows > 0){
            isoX += tileSize/2;
        }
        for (var columns = 0; columns < tileMap.length; columns ++){
            if (columns > 0){
                isoY += tileSize / 4;
            }
            //console.log(canvas.width);
            
            if (tileMap[rows][columns] == 'wall'){
                drawWallTile(isoX, isoY);
            }
            else if (tileMap[rows][columns] == 'grass'){
                drawGrassTile(isoX, isoY);
            }
        }
    }
}
function drawEverything() {
    drawCanvas();
    drawMap(canvas.width / 2 - tileSize / 2, wallHeight);
    //drawGrassTile(0,100);
    //drawWallTile(100,100);
}
function drawCircle(color, x, y, radius) {
    // console.log('Called drawCircle()');  // DEBUG

    canvasContext.fillStyle = color;
    canvasContext.beginPath();  // Starts the fill path.
    canvasContext.arc(x, y, radius, 0, Math.PI * 2, true);
    canvasContext.fill();

    // console.log('drawCircle() complete');  // DEBUG
}

function drawText(color, text, x, y) {
    canvasContext.fillStyle = color;
    canvasContext.fillText(text, x, y);
}