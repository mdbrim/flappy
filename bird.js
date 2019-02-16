function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.7;
  this.lift = -20;
  this.velocity = 0;
  
  this.show = function() {
    push();
      translate(this.x, this.y);
      rotate(this.angle);
      fill(255, 255, 90);
      ellipse(0, 0, 40, 30);
      fill(250, 250, 199);
      ellipse(-15, -3, 20, 18);
      fill(255,255,255);
      ellipse(11, -5, 20, 18);
      fill(232,118,35);
      ellipse(14, 7, 25, 13);
      fill(0);
      ellipse(15, -5, 2, 6);
      ellipse(16, 7, 20, 1);
    pop();
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    if (this.velocity < -10) this.velocity = -10;
    if (this.velocity > 20) this.velocity = 20;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
    this.angle = map(this.velocity, -10, 20, -.7, .7);

  }
}
