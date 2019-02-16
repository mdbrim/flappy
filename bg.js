function Grass(l, w) {
  if(frameCount<18) this.x = frameCount*40;
  else this.x = width+100;
  this.speed = 4;

  this.show = function() {
    push();
      noStroke();
      fill(70, 190, 67);
      ellipse(this.x, 550, l, w);
    pop();
  }

  this.update = function() {
    this.x -= this.speed;
  }

    this.offscreen = function() {
    if (this.x < -100) {
      return true;
    } else {
      return false;
    }
  }

}

function Build(w, h) {
  if(frameCount<18) this.x = frameCount*40;
  else this.x = width+100;
  this.speed = 3;
  this.neww = floor(w) * 10;
  if (this.neww % 20 == 0) this.neww = this.neww + 10;
  this.show = function() {
    push();
      stroke(0);
      fill(213, 234, 202);
      rect(this.x, 500-h, this.neww, 100+h);
      for (var j = 0; j < 200; j+=20) {
        for (var i = 0; i < this.neww - 20; i+=20) {
          fill(255);
          rect(this.x + i + 10, 500 + j - h + 10, 10, 10);
        }
      }
    pop();
  }

  this.update = function() {
    this.x -= this.speed;
  }

    this.offscreen = function() {
    if (this.x < -100) {
      return true;
    } else {
      return false;
    }
  }
}

function Cloud(l, w) {
  if(frameCount<18) this.x = frameCount*40;
  else this.x = width+100;
  this.speed = 1;

  this.show = function() {
    push();
      noStroke();
      fill(238);
      ellipse(this.x, 375, l, w);
    pop();
  }

  this.update = function() {
    this.x -= this.speed;
  }

    this.offscreen = function() {
    if (this.x < -100) {
      return true;
    } else {
      return false;
    }
  }

}
