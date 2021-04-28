class Bob {
    constructor(x,y,r){

        var options = {
            isStatic:false,
            density:0.8,
            friction: 0,
            restitution:1
          };



          this.body=Bodies.circle(x,y,r/2,options)
          this.r=r;
          this.r=r;
          
          World.add(world, this.body);

      
      
        }
        display(){
        var pos=this.body.position
       
           
            
        push();
        translate(pos.x,pos.y)
        fill("pink")



        rectMode(CENTER)
        ellipse(0,0,this.r,this.r)
        
        pop();
    
        }
       
    }