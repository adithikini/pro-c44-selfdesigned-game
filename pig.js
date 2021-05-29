class Pig extends Baseclass{
    constructor(x,y){
        super(x,y,50,50)

       this.pigimage=loadImage("pig.png")
       this.visibility=255
        World.add(world,this.body)
    }
    display(){
       /* var position=this.body.position
        imageMode(CENTER)*/

        if(this.body.speed <3){
            super.display()

        }
        else{
            World.remove(world,this.body)
            push()
            this.visibility=this.visibility-5
            tint(255,this.visibility)
            image(this.pigimage,this.body.position.x,this.body.position.y)
            pop()
        }
        
    }
    
    score(){
        if(this.visibility <0 && this.visibility >-1003){
            score++
        }
    }

}