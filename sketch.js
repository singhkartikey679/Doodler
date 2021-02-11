// Made by: Kartikey Singh
// Code! Programming with p5.js
// Inspired by The Coding Train/Daniel Shiffman's 
// YouTube Video: https://youtu.be/TaluaAD9MKA &
// Coding Challenge #83 
// Link: https://youtu.be/IXXNIcQQLU8

// Just added more colors to Doodling 
// And an Eraser to erase your strokes
// And also a Clear button to clear the whole Canvas at once


let eraser, clean, pen, RedPen, WhitePen, BluePen, GreenPen;
let tool = null,
  PenColor = null;
let extraCanvas;

function setup() {
  createCanvas(800, 500);
  background(0);
  extraCanvas = createGraphics(800, 500);
  extraCanvas.clear();

  eraser = createButton("Eraser");
  eraser.position(5, 5);
  clean = createButton("Clear");
  clean.position(65, 5);
  pen = createButton("Pen");
  pen.position(120, 5);
  RedPen = createButton("Red");
  RedPen.position(165, 5);
  RedPen.hide();
  WhitePen = createButton("White");
  WhitePen.position(211, 5);
  WhitePen.hide();
  GreenPen = createButton("Green");
  GreenPen.position(265, 5);
  GreenPen.hide();
  BluePen = createButton("Blue");
  BluePen.position(322, 5);
  BluePen.hide();
}

function draw() {
  background(0);

  image(extraCanvas, 0, 0);
  Pen();
  Eraser();

  if (tool == "Pen") {

    if (PenColor == "Red")
      extraCanvas.stroke(255, 0, 0);
    else if (PenColor == "White")
      extraCanvas.stroke(255);
    else if (PenColor == "Green")
      extraCanvas.stroke(0, 255, 0);
    else if (PenColor == "Blue")
      extraCanvas.stroke(50, 0, 255);
    else {
      extraCanvas.stroke(0, 255);
    }

    if (mouseIsPressed) {
      extraCanvas.strokeWeight(2);
      extraCanvas.line(pmouseX, pmouseY, mouseX, mouseY);
    }
  } else if (tool == "Eraser") {
    if (mouseIsPressed) {
      extraCanvas.fill(0);
      extraCanvas.noStroke(255);
      extraCanvas.rect(mouseX, mouseY, 30, 30);
    }
  }

  Clean();
}

function Pen() {
  pen.mousePressed(() => {
    tool = "Pen";
    RedPen.show();
    WhitePen.show();
    GreenPen.show();
    BluePen.show();
  });
  RedPen.mousePressed(() => {
    PenColor = "Red";
  });
  WhitePen.mousePressed(() => {
    PenColor = "White";
  });
  BluePen.mousePressed(() => {
    PenColor = "Blue";
  });
  GreenPen.mousePressed(() => {
    PenColor = "Green";
  });
}



function Eraser() {
  eraser.mousePressed(() => {
    tool = "Eraser";
    RedPen.hide();
    WhitePen.hide();
    GreenPen.hide();
    BluePen.hide();
    PenColor = null;
  })
}


function Clean() {
  clean.mousePressed(() => {
    extraCanvas.background(0);
    extraCanvas.clear();
    RedPen.hide();
    WhitePen.hide();
    GreenPen.hide();
    BluePen.hide();
    PenColor = null;
  })
}