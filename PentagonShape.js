
//***
// This class draws a pentagon based upon the origin and radius.
//***
class PentagonShape
{
  constructor(origin, rotation)
  {
    this.origin = origin;
    this.radius = 20;

    if (!rotation)
    {
      rotation = 0;
    }
    this.rotation = rotation;


    // Create the primary points.
    let numPnts = 5;
    let pentagonPnts = [];
    {
      let angle = TWO_PI / numPnts;
      
      pentagonPnts.push(new p5.Vector(this.radius * sin(angle * 1 + radians(this.rotation)), 
                                      this.radius * cos(angle * 1 + radians(this.rotation)), 0));
      pentagonPnts.push(new p5.Vector(this.radius * sin(angle * 2 + radians(this.rotation)), 
                                      this.radius * cos(angle * 2 + radians(this.rotation)), 0));
      pentagonPnts.push(new p5.Vector(this.radius * sin(angle * 3 + radians(this.rotation)), 
                                      this.radius * cos(angle * 3 + radians(this.rotation)), 0));
      pentagonPnts.push(new p5.Vector(this.radius * sin(angle * 4 + radians(this.rotation)),
                                      this.radius * cos(angle * 4 + radians(this.rotation)), 0));
      pentagonPnts.push(new p5.Vector(this.radius * sin(angle * 5 + radians(this.rotation)),
                                      this.radius * cos(angle * 5 + radians(this.rotation)), 0));
    }

    // Apply the translation.
    this.p0 = this.origin.copy().add(pentagonPnts[0]);
    this.p1 = this.origin.copy().add(pentagonPnts[1]);
    this.p2 = this.origin.copy().add(pentagonPnts[2]);
    this.p3 = this.origin.copy().add(pentagonPnts[3]);
    this.p4 = this.origin.copy().add(pentagonPnts[4]);

    // Create the midpoints as a step between primary points.
    let angle = TWO_PI / 10;
    this.pm0 = new p5.Vector(this.radius * (sin(angle * 1 + radians(this.rotation))),
                             this.radius * (cos(angle * 1 + radians(this.rotation))),
                             0);
    this.pm1 = new p5.Vector(this.radius * (sin(angle * 3 + radians(this.rotation))),
                             this.radius * (cos(angle * 3 + radians(this.rotation))),
                             0);
    this.pm2 = new p5.Vector(this.radius * (sin(angle * 5 + radians(this.rotation))),
                             this.radius * (cos(angle * 5 + radians(this.rotation))),
                             0);
    this.pm3 = new p5.Vector(this.radius * (sin(angle * 7 + radians(this.rotation))),
                             this.radius * (cos(angle * 7 + radians(this.rotation))),
                             0);
    this.pm4 = new p5.Vector(this.radius * (sin(angle * 9 + radians(this.rotation))),
                             this.radius * (cos(angle * 9 + radians(this.rotation))),
                             0);

    // distance of the size of the shape.
    let hyp = this.radius;
    let opp0 = p5.Vector.dist(this.p0, this.p1) / 2;
    //let opp1 = p5.Vector.dist(this.p1, this.p2) / 2;
    //let opp2 = p5.Vector.dist(this.p2, this.p3) / 2;
    //let opp3 = p5.Vector.dist(this.p3, this.p4) / 2;
    //let opp4 = p5.Vector.dist(this.p4, this.p0) / 2;

    let adj = cos( radians(36) ) * hyp;

    this.pm0.limit(adj);
    this.pm1.limit(adj);
    this.pm2.limit(adj);
    this.pm3.limit(adj);
    this.pm4.limit(adj);

    // Create the extension points as extensions of the midpoints.
    this.ext0 = this.pm0.copy().add(this.pm0);
    this.ext1 = this.pm1.copy().add(this.pm1);
    this.ext2 = this.pm2.copy().add(this.pm2);
    this.ext3 = this.pm3.copy().add(this.pm3);
    this.ext4 = this.pm4.copy().add(this.pm4);

    // Apply the translation.
    this.pm0 = this.origin.copy().add(this.pm0);
    this.pm1 = this.origin.copy().add(this.pm1);
    this.pm2 = this.origin.copy().add(this.pm2);
    this.pm3 = this.origin.copy().add(this.pm3);
    this.pm4 = this.origin.copy().add(this.pm4);

    this.ext0 = this.origin.copy().add(this.ext0); // this.pm0.copy().add(this.pm0);
    this.ext1 = this.origin.copy().add(this.ext1);
    this.ext2 = this.origin.copy().add(this.ext2);
    this.ext3 = this.origin.copy().add(this.ext3);
    this.ext4 = this.origin.copy().add(this.ext4);
  }

  displayPoints()
  {
    push();
    strokeWeight(5);
    stroke(255);
    point(this.p0.x, this.p0.y, this.p0.z);
    point(this.p1.x, this.p1.y, this.p1.z);
    point(this.p2.x, this.p2.y, this.p2.z);
    point(this.p3.x, this.p3.y, this.p3.z);
    point(this.p4.x, this.p4.y, this.p4.z);
    pop();
  }

  // Draw grey lines connecting the primary points.
  displayLines()
  {
    push();
    
    strokeWeight(0.1);
    stroke(214, 214, 214);
    
    line(this.p0.x, this.p0.y, this.p0.z, this.p1.x, this.p1.y, this.p1.z);
    line(this.p1.x, this.p1.y, this.p1.z, this.p2.x, this.p2.y, this.p2.z);
    line(this.p2.x, this.p2.y, this.p2.z, this.p3.x, this.p3.y, this.p3.z);
    line(this.p3.x, this.p3.y, this.p3.z, this.p4.x, this.p4.y, this.p4.z);
    line(this.p4.x, this.p4.y, this.p4.z, this.p0.x, this.p0.y, this.p0.z);
    
    pop();
  }
  
  // Draw a orange circle of points delineating the perimeter.
  displayPerimeter()
  {
    push();

    stroke(255, 126, 0); // orange
    strokeWeight(0.1);
    let circleAngle = TWO_PI / 256;

    // Draw a circle around the initial pentagon.
    for (let i = 0; i < 256; i++)
    {
      point(this.origin.x + this.radius * (sin(circleAngle * i)), 
            this.origin.y + this.radius * (cos(circleAngle * i)),
            this.origin.z + 0);
    }
    pop();
  }
  
  // Display the midpoints in purple.
  displayMidpoints()
  {
    push();
    
    stroke("#B02ED8");
    strokeWeight(5);
    
    point(this.pm0.x, this.pm0.y, this.pm0.z);
    point(this.pm1.x, this.pm1.y, this.pm1.z);
    point(this.pm2.x, this.pm2.y, this.pm2.z);
    point(this.pm3.x, this.pm3.y, this.pm3.z);
    point(this.pm4.x, this.pm4.y, this.pm4.z);
    
    pop();
  }

  // Display the extension points in yellow.
  displayExtpoints()
  {
    push();
    
    stroke("#F0C346");
    strokeWeight(3);
    
    point(this.ext0.x, this.ext0.y, this.ext0.z);
    point(this.ext1.x, this.ext1.y, this.ext1.z);
    point(this.ext2.x, this.ext2.y, this.ext2.z);
    point(this.ext3.x, this.ext3.y, this.ext3.z);
    point(this.ext4.x, this.ext4.y, this.ext4.z);

    pop(); 
  }

  display()
  {
    this.displayPoints();    // white points
    this.displayLines();     // grey lines
    // this.displayPerimeter(); // orange circle
    this.displayMidpoints(); // purple midpoints
    // this.displayExtpoints(); // yellow extension points
  }

  print()
  {
    console.log("p0=" + this.p0);
    console.log("p1=" + this.p1);
    console.log("p2=" + this.p2);
    console.log("p3=" + this.p3);
    console.log("p4=" + this.p4);
    
    console.log("mp0=" + this.pm0);
    console.log("mp1=" + this.pm1);
    console.log("mp2=" + this.pm2);
    console.log("mp3=" + this.pm3);
    console.log("mp4=" + this.pm4);
    
    console.log("ext0=" + this.ext0);
    console.log("ext1=" + this.ext1);
    console.log("ext2=" + this.ext2);
    console.log("ext3=" + this.ext3);
    console.log("ext4=" + this.ext4);
  }
  
  printOnce()
  {
  }


  getPnt0() { return this.p0.copy(); }
  getPnt1() { return this.p1.copy(); }
  getPnt2() { return this.p2.copy(); }
  getPnt3() { return this.p3.copy(); }
  getPnt4() { return this.p4.copy(); }
  
  getMidPnt0() { return this.pm0.copy(); }
  getMidPnt1() { return this.pm1.copy(); }
  getMidPnt2() { return this.pm2.copy(); }
  getMidPnt3() { return this.pm3.copy(); }
  getMidPnt4() { return this.pm4.copy(); }

  getExtPnt0() { return this.ext0.copy(); }
  getExtPnt1() { return this.ext1.copy(); }
  getExtPnt2() { return this.ext2.copy(); }
  getExtPnt3() { return this.ext3.copy(); }
  getExtPnt4() { return this.ext4.copy(); }
}
