//to launch ctrl + alt + l
let b_size = 140;

function setup() {
  createCanvas(300, 300);
  background(255, 0, 0);
  // put setup code here
}

function draw() {
  //  let txt = "hello";
  //  background(255, 0, 0);
  //  let first = createButton(txt);
  //  first.position(0, 0);
  //  first.mousePressed(popUp());
  noStroke();
  fill(250, 200, 200, 50)
  ellipse(mouseX, mouseY, 15, 15);
  //let second = rect(width / 2, 0, size, size);
  //  let third = rect(0, height / 2, size, size);
  //  let fourth = rect(width / 2, height / 2, size, size);
  // put drawing code here
}

function mousePressed(){
  background(255, 0, 0);
}
