class Paper {

    constructor(x,y){
        var options ={
        isStatic:false,
        restitution:0.3,
    friction:0.5,
    density:1.2
    }
    
    this.Body = Bodies.circle(200,100,20, options);
    World.add(world, this.body);
}
display(){
fill("pink");
}
}