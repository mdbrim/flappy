var bird;
var pipes = [];
var grass = [];
var build = [];
var cloud = [];
var score = 0;
var topscore = 0;
var lastscore = 0;
var hit = false;
var play = true;
var run = 0;

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');

  button = createButton('Play Again');
  button.parent('sketch-holder');
  button.position(width/2 - 40, height/2 + 10);
  button.mousePressed(reset);
  button.hide();

  bird = new Bird();
}

function draw() {
  background(98,195,203);

  noStroke();
  fill(238);
  rect(0, 375, width, 200);
  stroke(0);

  for (var i = cloud.length-1; i >= 0; i--) {
    cloud[i].show();
    if(play) cloud[i].update();

    if (cloud[i].offscreen()) {
      cloud.splice(i, 1);
    }
  }

  for (var i = build.length-1; i >= 0; i--) {
    build[i].show();
    if(play) build[i].update();

    if (build[i].offscreen()) {
      build.splice(i, 1);
    }
  }

  noStroke();
  fill(70, 190, 67);
  rect(0, 550, width, 50);
  stroke(0);

  for (var i = grass.length-1; i >= 0; i--) {
    grass[i].show();
    if(play) grass[i].update();
    if (grass[i].offscreen()) {
      grass.splice(i, 1);
    }
  }

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    if(play) pipes[i].update();

    if (pipes[i].hits(bird)) {
      hit = true;
      play = false;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  if(play) bird.update();
  bird.show();

  if(frameCount < 18) {
    grass.push(new Grass(random(60, 100), random(30, 50)));
    if(frameCount % 2 == 0) build.push(new Build(random(3, 9), random(0, 100)));
    cloud.push(new Cloud(random(60, 100), random(30, 80)));
  }

  if (play && run % 15 == 0) grass.push(new Grass(random(60, 100), random(30, 50)));
  if (play && run % 30 == 0) build.push(new Build(random(4, 9), random(0, 100)));
  if (play && run % 60 == 0) cloud.push(new Cloud(random(60, 100), random(30, 80)));

  if (run % 75 == 0) {
    pipes.push(new Pipe());
  }

  if (run % 75 == 35 && run > 35 && (!hit)) {
    score = score + 40;
  }
  
  if(score>topscore) topscore = score;

  if (run % 75 == 45) hit = false;

  fill(238, 238, 238, 200);
  rect(450, 5, 140, 50);

  noStroke();
  textSize(48);
  textAlign(CENTER);
  fill(0);
  text(score, width/2 ,height/2);
  textSize(16);
  textAlign(LEFT);
  text("Current:", 460, 20);
  text("Last:", 460, 35);
  text("Best:", 460, 50);
  textAlign(RIGHT);
  text(score, 580, 20);
  text(lastscore, 580, 35);
  text(topscore, 580, 50);

  if(play) run++;
  else {
    button.show();
  }
}
function reset() {
  if(score>0) lastscore = score;
  score = 0;
  pipes = [];
  bird = new Bird();
  run = 0;
  button.hide();
  play = true;
}

function mousePressed() {
  if(mouseX>0 && mouseX<width && mouseY>0 && mouseY<height) {
    bird.up();
    if(mouseX<250 || mouseX>350 || mouseY<300 || mouseY>350) return false; //disable double tap zoom on mobile but allow click of reset button
  }
}
