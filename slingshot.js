class Slingshot extends Baseclass{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:8
        }
        this.sling1=loaIamge("sling1.png")
        this.slng2.loadImage("sling2.png")
        this.sling3.loadImage("sling3.png")
        this.pointB=pointB
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
    attach(body){
        this.sling.bodyA=body
    }

    fly(){
        this.sling.bodyA=null
    }
display(){
    image(this.sling1,200,20)
    image(this.sling2,150,20)
    if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        push();
        stroke(40,20,8)
        if(pointA.x)
    }
}       
       

}