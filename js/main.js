// declare global album variables
const album1 = document.querySelector('#album1-img');
const album2 = document.querySelector('#album2-img');
const album3 = document.querySelector('#album3-img');
const album4 = document.querySelector('#album4-img');
//const turntable = document.querySelector('#turntable-img');

// declare audios
const song1 = new Audio('../media/dhl.mp3');
const song2 = new Audio('../media/arctic-monkeys.mp3');
const song3 = new Audio('../media/one-more-hour.mp3');
const song4 = new Audio('../media/redbone.mp3');

// booleans for albums
let a1Clicked = false;
let a2Clicked = false;
let a3Clicked = false;
let a4Clicked = false;
let albumIsNotClicked = true;

// variables for mouse vinyl
let mouseVinyl = document.querySelector("#mouse-vinyl");

//declare global variables for position
const turntableX = 50;
const turntableY = 50;
const turntableW = 300;
const turntableH = 300;
let turntableClicked = false;

const vinylX = 150;
const vinylY = 150;
const vinylDL = 150;
const vinylDM = 50;
const vinylDS = 15;
let vinylClicked = false;

const jointX = 265;
const jointY = 80; 

const armX = 261;
const armY = 90;

const stylistX = 259; 
const stylistY = 180;

// variables for tonearm animation
let angle = 0;
let goBack = false;

const pathX = 300;
const pathY = 100;

const knobX = 296;
const knobY = 120;

let vinyl, tonearm, slider, turntable;

const followMouse = (e) => {
  const X = e.clientX;
  const Y = e.clientY;

  mouseVinyl.style.transform = `translate3d(${X - 100}px, ${Y - 700}px, 0)`;
};

function setup() {
  let canvas = createCanvas(400, 400);

  canvas.parent('turntable');
  
  vinyl = new Vinyl(vinylX, vinylY, vinylDL, vinylDM, vinylDS);
  turntable = new Turntable(turntableX, turntableY, turntableW, turntableH);
  tonearm = new Tonearm(armX, armY, jointX, jointY, stylistX, stylistY);
  slider = new Slider(pathX, pathY, knobX, knobY);
}

function draw() {
  background('#e5d8d2');
  noStroke();
  
  turntable.display();
  tonearm.display();
  slider.display();
  
  mouseClicked(); 
  
  if(turntableClicked == true && a1Clicked == true){
    vinyl.display();
    tonearm.display();
    tonearm.moveArm();
    goBack = false;
    song1.play();
    vinylClicked = false;
    mouseVinyl.src = 'img/empty-vinyl.png';
    mouseVinyl.alt = 'transparent vinyl';
  }
  else if(turntableClicked == true && a2Clicked == true){
    vinyl.display();
    tonearm.display();
    tonearm.moveArm();
    goBack = false;
    song2.play();
    vinylClicked = false;
    mouseVinyl.src = 'img/empty-vinyl.png';
    mouseVinyl.alt = 'transparent vinyl';
  }
  else if(turntableClicked == true && a3Clicked == true){
    vinyl.display();
    tonearm.display();
    tonearm.moveArm();
    goBack = false;
    song3.play();
    vinylClicked = false;
    mouseVinyl.src = 'img/empty-vinyl.png';
    mouseVinyl.alt = 'transparent vinyl';
  }
  else if(turntableClicked == true && a4Clicked == true){
    vinyl.display();
    tonearm.display();
    tonearm.moveArm();
    goBack = false;
    song4.play();
    vinylClicked = false;
    mouseVinyl.src = 'img/empty-vinyl.png';
    mouseVinyl.alt = 'transparent vinyl';
  }
  
  mouseClicked();
  
  if(vinylClicked == true && a1Clicked == true){
    //console.log('inside');
    turntable.display();
    tonearm.display();
    slider.display();
    turntableClicked = false;
    tonearm.moveArm();
    goBack = true; 
    song1.pause();
    mouseVinyl.src = 'img/mouse-vinyl.png';
    mouseVinyl.alt = 'black vinyl record';
  }
  else if(vinylClicked == true && a2Clicked == true){
    //console.log('inside');
    turntable.display();
    tonearm.display();
    slider.display();
    turntableClicked = false;
    tonearm.moveArm();
    goBack = true;
    song2.pause();
    mouseVinyl.src = 'img/mouse-vinyl.png';
    mouseVinyl.alt = 'black vinyl record';
  }
  else if(vinylClicked == true && a3Clicked == true){
    //console.log('inside');
    turntable.display();
    tonearm.display();
    slider.display();
    turntableClicked = false;
    tonearm.moveArm();
    goBack = true;
    song3.pause();
    mouseVinyl.src = 'img/mouse-vinyl.png';
    mouseVinyl.alt = 'black vinyl record';
  }
  else if(vinylClicked == true && a4Clicked == true){
    //console.log('inside');
    turntable.display();
    tonearm.display();
    slider.display();
    turntableClicked = false;
    tonearm.moveArm();
    goBack = true;
    song4.pause();
    mouseVinyl.src = 'img/mouse-vinyl.png';
    mouseVinyl.alt = 'black vinyl record';
  }
}

function mouseClicked(){
  if(mouseIsPressed == true && a1Clicked == true){
    turntable.clicked();
    vinyl.clicked();
  }
  else if(mouseIsPressed == true && a2Clicked == true){
    turntable.clicked();
    vinyl.clicked();
  }
  else if(mouseIsPressed == true && a3Clicked == true){
    turntable.clicked();
    vinyl.clicked();
  }
  else if(mouseIsPressed == true && a4Clicked == true){
    turntable.clicked();
    vinyl.clicked();
  }
}

function showAlbum1(value){
  a1Clicked = value;
  console.log(`a1Clicked: ${a1Clicked}`);
  console.log(`albumIsNotClicked: ${albumIsNotClicked}`);

  if (a1Clicked == true){
    mouseVinyl.src = 'img/mouse-vinyl.png';
    mouseVinyl.alt = 'black vinyl record';
  }
  else{
    mouseVinyl.src = 'img/empty-vinyl.png';
    mouseVinyl.alt = 'transparent vinyl';
  }
}

function showAlbum2(value){
  a2Clicked = value;
  console.log(`a2Clicked: ${a2Clicked}`);
  console.log(`albumIsNotClicked: ${albumIsNotClicked}`);

  if (a2Clicked == true){
    mouseVinyl.src = 'img/mouse-vinyl.png';
    mouseVinyl.alt = 'black vinyl record';
  }
  else{
    mouseVinyl.src = 'img/empty-vinyl.png';
    mouseVinyl.alt = 'transparent vinyl';
  }
}

function showAlbum3(value){
  a3Clicked = value;
  console.log(`a3Clicked: ${a3Clicked}`);
  console.log(`albumIsNotClicked: ${albumIsNotClicked}`);

  if (a3Clicked == true){
    mouseVinyl.src = 'img/mouse-vinyl.png';
    mouseVinyl.alt = 'black vinyl record';
  }
  else{
    mouseVinyl.src = 'img/empty-vinyl.png';
    mouseVinyl.alt = 'transparent vinyl';
  }
}

function showAlbum4(value){
  a4Clicked = value;
  console.log(`a4Clicked: ${a4Clicked}`);
  console.log(`albumIsNotClicked: ${albumIsNotClicked}`);

  if (a4Clicked == true){
    mouseVinyl.src = 'img/mouse-vinyl.png';
    mouseVinyl.alt = 'black vinyl record';
  }
  else{
    mouseVinyl.src = 'img/empty-vinyl.png';
    mouseVinyl.alt = 'transparent vinyl';
  }
}

function Slider(pathX, pathY, knobX, knobY){
  this.pathX = pathX;
  this.pathY = pathY;
  this.knobX = knobX;
  this.knobY = knobY;
  
  this.display = function(){
    push();
    translate(0, 0);
    fill('#e0dddd');
    stroke('#cccccc');
    strokeWeight(6);
    rect(this.pathX, this.pathY, 15, 90, 4);
    fill('black');
    noStroke();
    rect(this.knobX, this.knobY, 23, 23, 3);
    pop();
  }
}

function Tonearm(armX, armY, jointX, jointY, stylistX, stylistY){
  this.armX = armX;
  this.armY = armY;
  this.jointX = jointX;
  this.jointY = jointY;
  this.stylistX = stylistX;
  this.stylistY = stylistY;
  
  this.display = function(){
    push();
    translate(this.armX, this.armY); 
    rotate(angle);
    angleMode(DEGREES);
    //arm
    fill('#e0dddd');
    rect(0, 0, 8, 90);
    //joint
    fill('black');
    circle(3, 0, 30);
    fill('#444444');
    circle(3, 0, 15);
    //stylist
    translate(-2, 90);
    fill('black');
    rect(0, 0, 12, 20);
    pop();
  }

  this.moveArm = function(){
    if (goBack == false){
      if (angle < 30){
        angle = angle + 0.5;
      }
    }
    else{
      if (angle > 0){
        angle = angle - 0.5;
      }
    } 
    /*if (angle >= 30){
        goBack = true;
    } 
    else if (angle == 0){
        goBack = false;
    } */
  }
}

function Vinyl(x, y, dl, dm, ds){
  this.x = x;
  this.y = y;
  this.dl = dl; // large diameter
  this.halfDL = dl/2;
  this.dm = dm; // medium diameter
  this.ds = ds; // small diameter
  
  this.display = function(){
    push();
    translate(0, 0);
    fill('black');
    circle(this.x, this.y, this.dl);
    fill('yellow');
    circle(this.x, this.y, this.dm);
    fill('black');
    circle(this.x, this.y, this.ds);
    pop();
  }
  
  this.clicked = function(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    // vinyl is clicked
    if (d < this.halfDL){ 
      vinylClicked = true;
    }
  }
}

function Turntable(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.halfW = w/2;
  this.halfH = h/2;
  this.centerX = this.halfW + x;
  this.centerY = this.halfH + y;
  
  
  this.display = function(){
    push();
    translate(0, 0);
    fill('#cccccc');
    rect(this.x + 4, this.y + 6, this.w, this.h, 20);
    fill('white');
    rect(this.x, this.y, this.w, this.h, 20);
    pop();
  }
  
  this.clicked = function(){
    let d = dist(mouseX, mouseY, this.centerX, this.centerY);
    // turntable is clicked
    if (d < this.halfW){ 
      turntableClicked = true;
    }
  }
}

// event listener to follow mouse
window.addEventListener('mousemove', followMouse);

// if click on album1 run showAlbum1 function
album1.addEventListener('mousedown', () => {
  if (a1Clicked == true && albumIsNotClicked == false){
    albumIsNotClicked = true;
    showAlbum1(false);
  }
  else if (a1Clicked == false && albumIsNotClicked == true){
    albumIsNotClicked = false;
    showAlbum1(true);
  }

  return albumIsNotClicked;
});

// if click on album2 run showAlbum2 function
album2.addEventListener('mousedown', () => {
  if (a2Clicked == true && albumIsNotClicked == false){
    albumIsNotClicked = true;
    showAlbum2(false);
  }
  else if (a2Clicked == false && albumIsNotClicked == true){
    albumIsNotClicked = false;
    showAlbum2(true);
  }
  
  return albumIsNotClicked;
});

// if click on album3 run showAlbum3 function
album3.addEventListener('mousedown', () => {
  if (a3Clicked == true && albumIsNotClicked == false){
    albumIsNotClicked = true;
    showAlbum3(false);
  }
  else if (a3Clicked == false && albumIsNotClicked == true){
    albumIsNotClicked = false;
    showAlbum3(true);
  }
  
  return albumIsNotClicked;
});

// if click on album4 run showAlbum4 function
album4.addEventListener('mousedown', () => {
  if (a4Clicked == true && albumIsNotClicked == false){
    albumIsNotClicked = true;
    showAlbum4(false);
  }
  else if (a4Clicked == false && albumIsNotClicked == true){
    albumIsNotClicked = false;
    showAlbum4(true);
  }
  
  return albumIsNotClicked;
});
