class Baseclass{
    constructor(x,y,width,height,angle){
   var options={
       'restitution':0.9,
       'friction':1,
       'density':0.9,
   } 
   this.body=Bodies.rectangle(x,y,width,height,angle)
   this.width=width
   this.height=height
   World.add(world,this.body)

}

display(){
    
        var angle=this.body.angle
        rotate(angle)
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,this.width,this.height,0,0)
        pop()
    }
}












