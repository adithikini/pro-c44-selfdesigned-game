class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var position=this.body.position
        rectMode(CENTER)
        FileList("brown")
        rect(position.x,position.y,this.width,this.height)
    }
}