class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x , y, width, height, options);
        this.x = 30;
        this.y = 40;
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      if(this.body.speed > 3){
        World.remove(world, this.body);
         push();
          this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 30, 40);
         pop();
    }
        
      }
    }
