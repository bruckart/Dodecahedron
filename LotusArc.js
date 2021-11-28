
//---
// Given 2 points, draw a semicircle of 180 degrees between the 2 points.
//---
class LotusArc
{
  constructor(pnt1, pnt2)
  {  
    this.pnt1 = pnt1;
    this.pnt2 = pnt2;
    
    // Find the midpoint between these 2 points.
    this.mp = createVector((pnt1.x + pnt2.x)/2,
                           (pnt1.y + pnt2.y)/2,
                           (pnt1.z + pnt2.z)/2);
    
  }
    
  display()
  {
    push();
    strokeWeight(7);
    stroke("#F0C346");
    point(this.pnt1.x, this.pnt1.y, this.pnt1.z);
    point(this.pnt2.x, this.pnt2.y, this.pnt2.z);
    point(this.mp.x, this.mp.y, this.mp.z);
    
    strokeWeight(0.3);
    line(this.pnt1.x, this.pnt1.y, this.pnt1.z,
         this.pnt2.x, this.pnt2.y, this.pnt2.z);
    let radius = (this.pnt2.dist(this.pnt1))/2;
    //line(this.mp.x, this.mp.y, this.mp.z,
    //     this.mp.x, this.mp.y, d);    
    
    // Square out the angle.
    line(this.pnt1.x, this.pnt1.y, this.pnt1.z,
         this.pnt2.x, this.pnt1.y, this.pnt1.z);
    line(this.pnt2.x, this.pnt1.y, this.pnt1.z,
         this.pnt2.x, this.pnt2.y, this.pnt2.z);  
    let tmp = createVector(this.pnt2.x, this.pnt1.y, this.pnt1.z);
    let opp = tmp.dist(this.pnt2);
    // console.log("Opposite distance is: " + opp);
    let hyp = radius*2;
    // console.log("Hyptenouse distance is: " + hyp);
    
    let ang = asin(opp/hyp);
    let adj = this.pnt1.dist(tmp);
    // console.log("Adjacent distance is:" + adj);
    console.log("ang=" + degrees(ang));
    
    push();
    stroke(0, 255, 0);
    strokeWeight(1);
    
    let xrange = this.pnt2.x - this.pnt1.x;
    console.log("xrange=" + xrange);
    // also iterate from 0 to PI (3.14159)
    let piincrements = TWO_PI / xrange;
    let pistep = 0;
    
    
    // Draw a circle from the midpoint based upon the radius.
    // for (let )



    // let lotusArcPnts = [];

    // for (let xstep = 0; xstep < xrange; xstep++)
    // {
    //   let xcord = this.pnt1.x + xstep;
    //   let ycord = tan(ang) * xstep;
    //   let zcord = 0;

    //   // point(xdist, 0, 0);
    //   // point(0, this.pnt1.y - disty, 0);
      
    //   point(xcord, ycord, zcord); 

    //   pistep += piincrements;
    // }
    
    
    
    // for (let b = 0; b < TWO_PI; b+=0.03)
    // {
    //   let x = this.mp.x + (radius * cos(b));
    //   let y = 0;
    //   let z = this.mp.z + (radius * sin(b));
    //   point(x, y, z);
    // }
    
    
    
    
    //for (let startx = this.pnt1.x; startx <= this.pnt2.x; startx++)
    //{
    //  let xdist = startx - this.pnt1.x;
    //  let ydist = tan(ang) * xdist;
    //  // console.log("ydist is: " + ydist);

    //  point(startx, this.pnt1.y-ydist, 0);
    //}
    pop();
         
    strokeWeight(2);
    stroke(0, 255, 255);
    //for (let i = 0; i < PI; i = i + 0.2)
    //{
    //  // Rotate with z being 0.
    //  //point(cos(i)*20, sin(i)*20, 0);
    //}
    let steps = PI / 180;
    //for (let i = this.pnt1; i
    
    strokeWeight(0.3);

    //console.log("d=" + d);

    for (let j = 0; j < PI; j = j + 0.5)
    {
      // point(this.mp.x + cos(j) * d , 0, this.mp.z + sin(j) * d);
    }
    let xstep = (this.pnt2.x - this.pnt1.x) / 180;
    let ystep = (this.pnt2.y - this.pnt1.y) / 180;
    let zstep = (this.pnt2.z - this.pnt1.z) / 180;
    
    let travelingPnt = this.pnt1.copy();

    for (let j = 0; j < PI; j = j + steps)
    {
      travelingPnt.x += xstep;
      travelingPnt.y += ystep;
      // travelingPnt.z += zstep;

      //point(travelingPnt.x, 
      //      travelingPnt.y,
      //      18); // this value needs to be a function of 
      //           // 0 to d as we move towards the midpoint
      //           // and then back down to 0 from the midpoint
      //           // to the end. which would be linear. THis needs
      //           // to be a circle.
    }

    // Rotate with y being 0.
    // for (let j = 0; j < PI; j = j+=0.5)
    // {
    //   point(cos(j) * radius, 0, sin(j) * radius);
    // }
    pop();


    // push();
    // strokeWeight(2);
    
    // stroke("#2AD8D7");

    // for (let l = PI; l > 0; l -= 0.1)
    // {
    //   let x = this.mp.x + (radius * cos(l));
    //   let y = 0;
    //   let z = this.mp.z + (radius * sin(l));
    //   point(x, y, z);
    // }
    
    
    //stroke("#FE36FF");
    //for (let k = PI; k > 0 ; k -= 0.1)
    //{
      
      
    //  let x = this.mp.x + (d * cos(k));
    //  let y = this.mp.y;
    //  let z = this.mp.z + (d * sin(k));
      
      
    //  point(x, y, z);
    //}
    // pop();


  }
}
