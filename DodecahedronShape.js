

class DodecahedronShape
{
  constructor(origin)
  {
    this.origin = origin;
    this.centerLowerPentagon = new PentagonShape(this.origin, 0);

    let lowerExt0 = this.centerLowerPentagon.getExtPnt0();
    let lowerExt1 = this.centerLowerPentagon.getExtPnt1();
    let lowerExt2 = this.centerLowerPentagon.getExtPnt2();
    let lowerExt3 = this.centerLowerPentagon.getExtPnt3();
    let lowerExt4 = this.centerLowerPentagon.getExtPnt4();
    this.lowerPentagon0 = new PentagonShape(lowerExt0, 36);
    this.lowerPentagon1 = new PentagonShape(lowerExt1, 36);
    this.lowerPentagon2 = new PentagonShape(lowerExt2, 36);
    this.lowerPentagon3 = new PentagonShape(lowerExt3, 36);
    this.lowerPentagon4 = new PentagonShape(lowerExt4, 36);

    let upperOrigin = new p5.Vector(0, 0, 52); 
    this.centerUpperPentagon = new PentagonShape(upperOrigin, 36);

    let upperExt0 = this.centerUpperPentagon.getExtPnt0();
    let upperExt1 = this.centerUpperPentagon.getExtPnt1();
    let upperExt2 = this.centerUpperPentagon.getExtPnt2();
    let upperExt3 = this.centerUpperPentagon.getExtPnt3();
    let upperExt4 = this.centerUpperPentagon.getExtPnt4();
    this.upperPentagon0 = new PentagonShape(upperExt0, 0);
    this.upperPentagon1 = new PentagonShape(upperExt1, 0);
    this.upperPentagon2 = new PentagonShape(upperExt2, 0);
    this.upperPentagon3 = new PentagonShape(upperExt3, 0);
    this.upperPentagon4 = new PentagonShape(upperExt4, 0);
  }

  displayLower()
  {
    this.centerLowerPentagon.display();
    // this.lowerPentagon0.display();
    // this.lowerPentagon1.display();
    // this.lowerPentagon2.display();
    // this.lowerPentagon3.display();
    // this.lowerPentagon4.display();

    let midPntLowerExtAdd0 = this.centerLowerPentagon.getPnt0().copy().normalize().mult(20).add(this.centerLowerPentagon.getPnt0()); 
    let midPntLowerExtAdd1 = this.centerLowerPentagon.getPnt1().copy().normalize().mult(20).add(this.centerLowerPentagon.getPnt1()); 
    let midPntLowerExtAdd2 = this.centerLowerPentagon.getPnt2().copy().normalize().mult(20).add(this.centerLowerPentagon.getPnt2()); 
    let midPntLowerExtAdd3 = this.centerLowerPentagon.getPnt3().copy().normalize().mult(20).add(this.centerLowerPentagon.getPnt3()); 
    let midPntLowerExtAdd4 = this.centerLowerPentagon.getPnt4().copy().normalize().mult(20).add(this.centerLowerPentagon.getPnt4()); 
    let midPntLowerExtAdd5 = this.lowerPentagon0.getPnt4();
    let midPntLowerExtAdd6 = this.lowerPentagon1.getPnt0();
    let midPntLowerExtAdd7 = this.lowerPentagon2.getPnt1();
    let midPntLowerExtAdd8 = this.lowerPentagon3.getPnt2();
    let midPntLowerExtAdd9 = this.lowerPentagon4.getPnt3();

    // Compute the opposing point for each arc.
    let midPntLowerExtSub0 = this.centerLowerPentagon.getPnt0().copy().normalize().mult(20).sub(this.centerLowerPentagon.getPnt0()); 
    let midPntLowerExtSub1 = this.centerLowerPentagon.getPnt1().copy().normalize().mult(20).sub(this.centerLowerPentagon.getPnt1()); 
    let midPntLowerExtSub2 = this.centerLowerPentagon.getPnt2().copy().normalize().mult(20).sub(this.centerLowerPentagon.getPnt2()); 
    let midPntLowerExtSub3 = this.centerLowerPentagon.getPnt3().copy().normalize().mult(20).sub(this.centerLowerPentagon.getPnt3()); 
    let midPntLowerExtSub4 = this.centerLowerPentagon.getPnt4().copy().normalize().mult(20).sub(this.centerLowerPentagon.getPnt4()); 
    let midPntLowerExtSub5 = this.centerLowerPentagon.getPnt2()
    let midPntLowerExtSub6 = this.centerLowerPentagon.getPnt3()
    let midPntLowerExtSub7 = this.centerLowerPentagon.getPnt4()
    let midPntLowerExtSub8 = this.centerLowerPentagon.getPnt0()
    let midPntLowerExtSub9 = this.centerLowerPentagon.getPnt1()

    let lowerAs0 = new ArcShapeLower(midPntLowerExtAdd0, midPntLowerExtSub0);
    let lowerAs1 = new ArcShapeLower(midPntLowerExtAdd1, midPntLowerExtSub1);
    let lowerAs2 = new ArcShapeLower(midPntLowerExtAdd2, midPntLowerExtSub2);
    let lowerAs3 = new ArcShapeLower(midPntLowerExtAdd3, midPntLowerExtSub3);
    let lowerAs4 = new ArcShapeLower(midPntLowerExtAdd4, midPntLowerExtSub4);
    let lowerAs5 = new ArcShapeLower(midPntLowerExtAdd5, midPntLowerExtSub5);
    let lowerAs6 = new ArcShapeLower(midPntLowerExtAdd6, midPntLowerExtSub6);
    let lowerAs7 = new ArcShapeLower(midPntLowerExtAdd7, midPntLowerExtSub7);
    let lowerAs8 = new ArcShapeLower(midPntLowerExtAdd8, midPntLowerExtSub8);
    let lowerAs9 = new ArcShapeLower(midPntLowerExtAdd9, midPntLowerExtSub9);

    push();
    // lowerAs0.display();
    // lowerAs1.display();
    // lowerAs2.display();
    // lowerAs3.display();
    // lowerAs4.display();
    // lowerAs5.display();
    // lowerAs6.display();
    // lowerAs7.display();
    // lowerAs8.display();
    // lowerAs9.display();
    pop();

    let outwardLowerAngle = 25;
    let lower0 = lowerAs0.getUpwardPoint(radians(     outwardLowerAngle));
    let lower1 = lowerAs1.getUpwardPoint(radians(     outwardLowerAngle));
    let lower2 = lowerAs2.getUpwardPoint(radians(-1 * outwardLowerAngle));
    let lower3 = lowerAs3.getUpwardPoint(radians(-1 * outwardLowerAngle));
    let lower4 = lowerAs4.getUpwardPoint(radians(-1 * outwardLowerAngle));

    let outwardUpperAngle = outwardLowerAngle - 5;
    let lower5 = lowerAs5.getUpwardPoint(radians(-1 * outwardUpperAngle));
    let lower6 = lowerAs6.getUpwardPoint(radians(-1 * outwardUpperAngle));
    let lower7 = lowerAs7.getUpwardPoint(radians(-1 * outwardUpperAngle));
    let lower8 = lowerAs8.getUpwardPoint(radians(-1 * outwardUpperAngle));
    let lower9 = lowerAs9.getUpwardPoint(radians(-1 * outwardUpperAngle));

    push();
    stroke(255, 255, 255);
    strokeWeight(5);

    // point(lower0.x, 
    //       lower0.y,
    //       lower0.z);
    // point(lower1.x, 
    //       lower1.y,
    //       lower1.z);
    // point(lower2.x,
    //       lower2.y,
    //       lower2.z);
    // point(lower3.x,
    //       lower3.y,
    //       lower3.z);
    // point(lower4.x,
    //       lower4.y,
    //       lower4.z);
    // point(lower5.x,
    //       lower5.y,
    //       lower5.z);
    // point(lower6.x,
    //       lower6.y,
    //       lower6.z);
    // point(lower7.x,
    //       lower7.y,
    //       lower7.z);
    // point(lower8.x,
    //       lower8.y,
    //       lower8.z);
    // point(lower9.x,
    //       lower9.y,
    //       lower9.z);
    pop();

    push();
    stroke(255);
    strokeWeight(0.2);
    line(this.centerLowerPentagon.getPnt0().x,
         this.centerLowerPentagon.getPnt0().y,
         this.centerLowerPentagon.getPnt0().z,
         lower0.x, lower0.y, lower0.z);
    line(this.centerLowerPentagon.getPnt1().x,
         this.centerLowerPentagon.getPnt1().y,
         this.centerLowerPentagon.getPnt1().z,
         lower1.x, lower1.y, lower1.z);
    line(this.centerLowerPentagon.getPnt2().x,
         this.centerLowerPentagon.getPnt2().y,
         this.centerLowerPentagon.getPnt2().z,
         lower2.x, lower2.y, lower2.z);
    line(this.centerLowerPentagon.getPnt3().x,
         this.centerLowerPentagon.getPnt3().y,
         this.centerLowerPentagon.getPnt3().z,
         lower3.x, lower3.y, lower3.z);
    line(this.centerLowerPentagon.getPnt4().x,
         this.centerLowerPentagon.getPnt4().y,
         this.centerLowerPentagon.getPnt4().z,
         lower4.x, lower4.y, lower4.z);

    line(lower0.x, lower0.y, lower0.z,
         lower5.x, lower5.y, lower5.z);
    line(lower4.x, lower4.y, lower4.z,
         lower5.x, lower5.y, lower5.z);

    line(lower0.x, lower0.y, lower0.z,
         lower6.x, lower6.y, lower6.z);
    line(lower1.x, lower1.y, lower1.z,
         lower6.x, lower6.y, lower6.z);

    line(lower2.x, lower2.y, lower2.z,
         lower7.x, lower7.y, lower7.z);
    line(lower1.x, lower1.y, lower1.z,
         lower7.x, lower7.y, lower7.z);

    line(lower3.x, lower3.y, lower3.z,
         lower8.x, lower8.y, lower8.z);
    line(lower2.x, lower2.y, lower2.z,
         lower8.x, lower8.y, lower8.z);

    line(lower4.x, lower4.y, lower4.z,
         lower9.x, lower9.y, lower9.z);
    line(lower3.x, lower3.y, lower3.z,
         lower9.x, lower9.y, lower9.z);

    pop();
}


//--------------------------------------------------------------------------
//
//--------------------------------------------------------------------------
displayUpper()
{
    this.centerUpperPentagon.display();
    // this.upperPentagon0.display();
    // this.upperPentagon1.display();
    // this.upperPentagon2.display();
    // this.upperPentagon3.display();
    // this.upperPentagon4.display();

    let midPntUpperExtAdd0 = new p5.Vector(this.centerUpperPentagon.getPnt0().x + this.centerUpperPentagon.getPnt0().x,
                                           this.centerUpperPentagon.getPnt0().y + this.centerUpperPentagon.getPnt0().y,
                                           this.centerUpperPentagon.getPnt0().z); 
    let midPntUpperExtSub0 = new p5.Vector(this.centerUpperPentagon.getPnt0().x - this.centerUpperPentagon.getPnt0().x,
                                           this.centerUpperPentagon.getPnt0().y - this.centerUpperPentagon.getPnt0().y,
                                           this.centerUpperPentagon.getPnt0().z); 
    let midPntUpperExtAdd1 = new p5.Vector(this.centerUpperPentagon.getPnt1().x + this.centerUpperPentagon.getPnt1().x,
                                           this.centerUpperPentagon.getPnt1().y + this.centerUpperPentagon.getPnt1().y,
                                           this.centerUpperPentagon.getPnt1().z); 
    let midPntUpperExtSub1 = new p5.Vector(this.centerUpperPentagon.getPnt1().x - this.centerUpperPentagon.getPnt1().x,
                                           this.centerUpperPentagon.getPnt1().y - this.centerUpperPentagon.getPnt1().y,
                                           this.centerUpperPentagon.getPnt1().z); 
    let midPntUpperExtAdd2 = new p5.Vector(this.centerUpperPentagon.getPnt2().x + this.centerUpperPentagon.getPnt2().x,
                                           this.centerUpperPentagon.getPnt2().y + this.centerUpperPentagon.getPnt2().y,
                                           this.centerUpperPentagon.getPnt2().z); 
    let midPntUpperExtSub2 = new p5.Vector(this.centerUpperPentagon.getPnt2().x - this.centerUpperPentagon.getPnt2().x,
                                           this.centerUpperPentagon.getPnt2().y - this.centerUpperPentagon.getPnt2().y,
                                           this.centerUpperPentagon.getPnt2().z); 
    let midPntUpperExtAdd3 = new p5.Vector(this.centerUpperPentagon.getPnt3().x + this.centerUpperPentagon.getPnt3().x,
                                           this.centerUpperPentagon.getPnt3().y + this.centerUpperPentagon.getPnt3().y,
                                           this.centerUpperPentagon.getPnt3().z); 
    let midPntUpperExtSub3 = new p5.Vector(this.centerUpperPentagon.getPnt3().x - this.centerUpperPentagon.getPnt3().x,
                                           this.centerUpperPentagon.getPnt3().y - this.centerUpperPentagon.getPnt3().y,
                                           this.centerUpperPentagon.getPnt3().z); 
    let midPntUpperExtAdd4 = new p5.Vector(this.centerUpperPentagon.getPnt4().x + this.centerUpperPentagon.getPnt4().x,
                                           this.centerUpperPentagon.getPnt4().y + this.centerUpperPentagon.getPnt4().y,
                                           this.centerUpperPentagon.getPnt4().z); 
    let midPntUpperExtSub4 = new p5.Vector(this.centerUpperPentagon.getPnt4().x - this.centerUpperPentagon.getPnt4().x,
                                           this.centerUpperPentagon.getPnt4().y - this.centerUpperPentagon.getPnt4().y,
                                           this.centerUpperPentagon.getPnt4().z); 
    
    let midPntUpperExtAdd5 = this.upperPentagon0.getPnt0();
    let midPntUpperExtAdd6 = this.upperPentagon1.getPnt1();
    let midPntUpperExtAdd7 = this.upperPentagon2.getPnt2();
    let midPntUpperExtAdd8 = this.upperPentagon3.getPnt3();
    let midPntUpperExtAdd9 = this.upperPentagon4.getPnt4();

    let midPntUpperExtSub5 = this.centerUpperPentagon.getPnt2()
    let midPntUpperExtSub6 = this.centerUpperPentagon.getPnt3()
    let midPntUpperExtSub7 = this.centerUpperPentagon.getPnt4()
    let midPntUpperExtSub8 = this.centerUpperPentagon.getPnt0()
    let midPntUpperExtSub9 = this.centerUpperPentagon.getPnt1()


    let upperAs0 = new ArcShapeUpper(midPntUpperExtAdd0, midPntUpperExtSub0);
    let upperAs1 = new ArcShapeUpper(midPntUpperExtAdd1, midPntUpperExtSub1);
    let upperAs2 = new ArcShapeUpper(midPntUpperExtAdd2, midPntUpperExtSub2);
    let upperAs3 = new ArcShapeUpper(midPntUpperExtAdd3, midPntUpperExtSub3);
    let upperAs4 = new ArcShapeUpper(midPntUpperExtAdd4, midPntUpperExtSub4);
    let upperAs5 = new ArcShapeUpper(midPntUpperExtAdd5, midPntUpperExtSub5);
    let upperAs6 = new ArcShapeUpper(midPntUpperExtAdd6, midPntUpperExtSub6);
    let upperAs7 = new ArcShapeUpper(midPntUpperExtAdd7, midPntUpperExtSub7);
    let upperAs8 = new ArcShapeUpper(midPntUpperExtAdd8, midPntUpperExtSub8);
    let upperAs9 = new ArcShapeUpper(midPntUpperExtAdd9, midPntUpperExtSub9);

    push();
    strokeWeight(22);
    stroke(255, 0, 255);
    // upperAs0.display();
    // upperAs1.display();
    // upperAs2.display();
    // upperAs3.display();
    // upperAs4.display();
    // upperAs5.display();
    // upperAs6.display();
    // upperAs7.display();
    // upperAs8.display();
    // upperAs9.display();
    pop();

    push();
    stroke(255, 255, 255);
    strokeWeight(8);


    let outwardLowerAngle = 205;
    let upper0 = upperAs0.getDownwardPoint(radians(-1 * outwardLowerAngle));
    let upper1 = upperAs1.getDownwardPoint(radians(-1 * outwardLowerAngle));
    let upper2 = upperAs2.getDownwardPoint(radians(     outwardLowerAngle));
    let upper3 = upperAs3.getDownwardPoint(radians(     outwardLowerAngle));
    let upper4 = upperAs4.getDownwardPoint(radians(-1 * outwardLowerAngle));
    // point(upper0.x, 
    //       upper0.y,
    //       upper0.z);
    // point(upper1.x, 
    //       upper1.y,
    //       upper1.z);
    // point(upper2.x,
    //       upper2.y,
    //       upper2.z);
    // point(upper3.x,
    //       upper3.y,
    //       upper3.z);
    // point(upper4.x,
    //       upper4.y,
    //       upper4.z);

    let outwardUpperAngle = outwardLowerAngle - 5;
    let upper5 = upperAs5.getDownwardPoint(radians(outwardUpperAngle));
    let upper6 = upperAs6.getDownwardPoint(radians(outwardUpperAngle));
    let upper7 = upperAs7.getDownwardPoint(radians(outwardUpperAngle));
    let upper8 = upperAs8.getDownwardPoint(radians(outwardUpperAngle));
    let upper9 = upperAs9.getDownwardPoint(radians(outwardUpperAngle));
    // point(upper5.x,
    //       upper5.y,
    //       upper5.z);
    // point(upper6.x,
    //       upper6.y,
    //       upper6.z);
    // point(upper7.x,
    //       upper7.y,
    //       upper7.z);
    // point(upper8.x,
    //       upper8.y,
    //       upper8.z);
    // point(upper9.x,
    //       upper9.y,
    //       upper9.z);
    pop();

    push();
    stroke(255);
    strokeWeight(0.2);
    line(this.centerUpperPentagon.getPnt0().x,
         this.centerUpperPentagon.getPnt0().y,
         this.centerUpperPentagon.getPnt0().z,
         upper0.x, 
         upper0.y, 
         upper0.z);
    line(this.centerUpperPentagon.getPnt1().x,
         this.centerUpperPentagon.getPnt1().y,
         this.centerUpperPentagon.getPnt1().z,
         upper1.x, 
         upper1.y, 
         upper1.z);
    line(this.centerUpperPentagon.getPnt2().x,
         this.centerUpperPentagon.getPnt2().y,
         this.centerUpperPentagon.getPnt2().z,
         upper2.x, 
         upper2.y, 
         upper2.z);
    line(this.centerUpperPentagon.getPnt3().x,
         this.centerUpperPentagon.getPnt3().y,
         this.centerUpperPentagon.getPnt3().z,
         upper3.x, 
         upper3.y, 
         upper3.z);
    line(this.centerUpperPentagon.getPnt4().x,
         this.centerUpperPentagon.getPnt4().y,
         this.centerUpperPentagon.getPnt4().z,
         upper4.x, 
         upper4.y, 
         upper4.z);

    line(upper0.x, upper0.y, upper0.z,
         upper5.x, upper5.y, upper5.z);
    line(upper4.x, upper4.y, upper4.z,
         upper5.x, upper5.y, upper5.z);

    line(upper0.x, upper0.y, upper0.z,
         upper6.x, upper6.y, upper6.z);
    line(upper1.x, upper1.y, upper1.z,
         upper6.x, upper6.y, upper6.z);

    line(upper2.x, upper2.y, upper2.z,
         upper7.x, upper7.y, upper7.z);
    line(upper1.x, upper1.y, upper1.z,
         upper7.x, upper7.y, upper7.z);

    line(upper3.x, upper3.y, upper3.z,
         upper8.x, upper8.y, upper8.z);
    line(upper2.x, upper2.y, upper2.z,
         upper8.x, upper8.y, upper8.z);

    line(upper4.x, upper4.y, upper4.z,
         upper9.x, upper9.y, upper9.z);
    line(upper3.x, upper3.y, upper3.z,
         upper9.x, upper9.y, upper9.z);

    pop();
  }
}
