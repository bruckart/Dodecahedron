


class ArcShapeLower
{
  constructor(pnt1, pnt2)
  {
    this.pnt1 = pnt1;
    this.pnt2 = pnt2;

    // Compute the angle based upon the this.start position.
    this.angle = atan(this.pnt1.y / this.pnt1.x);
    // console.log("a=" + degrees(a));
    if (this.pnt2.x < 0)
    {
      this.angle += PI;
    }

    // Determine the midpoint between the 2 points.
    this.mp = new p5.Vector((this.pnt2.x + this.pnt1.x)/2,
                            (this.pnt2.y + this.pnt1.y)/2,
                            (this.pnt2.z + this.pnt1.z)/2);


    this.dist = this.pnt2.dist(this.pnt1);
    this.radius = this.dist/2;
  }

  display()
  {
    push();
    strokeWeight(0.2);
    stroke(255, 102, 0);
    // stroke(128);
    line(this.pnt1.x, this.pnt1.y, this.pnt1.z,
         this.pnt2.x, this.pnt2.y, this.pnt2.z);

    strokeWeight(2);
    point(this.pnt1.x, this.pnt1.y, this.pnt1.z);
    point(this.mp.x,   this.mp.y,   this.mp.z);
    point(this.pnt2.x, this.pnt2.y, this.pnt2.z);


    strokeWeight(2);
    for (let j = -HALF_PI; j < HALF_PI; j = j + 0.1)
    {
      let x = this.radius * cos(this.angle) * sin(j) + this.mp.x;
      let y = this.radius * sin(this.angle) * sin(j) + this.mp.y;
      let z = this.radius *                   cos(j) + this.mp.z;
      point(x, y, z);
    }
    pop();
  }


  getUpwardPoint(angle)
  {
    let up = new p5.Vector(this.radius * cos(this.angle) * sin(angle) + this.mp.x,
                           this.radius * sin(this.angle) * sin(angle) + this.mp.y,
                           this.radius *                   cos(angle) + this.mp.z);
    return up.copy();
  }
}

