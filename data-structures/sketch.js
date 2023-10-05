let xPos = [];
let yPos = [];
let xVel = [];
let cDiam = []; 

let numCircle = 10;


function setup() {
  createCanvas(800, 600);
  for(i = 0; i < numCircle; i++){
xPos.push(0);
yPos.push(random(30,height-30));
xVel.push(random(2,5));
cDiam.push(random(20,70));

  }
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);


for(let i = 0; i < numCircle; i += 1){
  ellipse(xPos[i], yPos[i], cDiam[i], cDiam[i]);
  xPos[i] = xPos[i] + xVel[i];

  if (xPos[i] > width + cDiam[i]) {
    cDiam[i] = random(20, 75);
    xPos[i] = 0 - cDiam[i];
  }
}



}
