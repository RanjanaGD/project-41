class Drop {
    constructor(x,y) {
        
            friction:0.1
        
            var maxDrops=100;
            for(var i=0;i<maxDrops;i++){
                drops.push(new createDrop(random(0,400),random(0,400)))
            }
         
        this.body=Bodies.circle(20,50)
    }
    
   update(){
       if(this.rain.position.y>height){
           Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
       }
   }

  
}