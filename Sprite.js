function Sprite(x,y,color,imgLigado,imgDesligado){
 this.x = x;
 this.y = y;
 this.vx = 0;
 this.vy = 0;
 this.ax = 0;
 this.ay = 0;
 this.color = color;  
 this.movimento = true; 
 this.imgLigado = imgLigado; 
 this.imgDesligado = imgDesligado; 
 
}

Sprite.prototype.desenhar = function(contexto,acex,acey){
 //contexto.fillStyle = this.color;
 //contexto.fillRect(this.x,this.y,15,15);
 //contexto.strokeStyle = "black";
 //contexto.strokeRect(this.x,this.y,15,15);
 if(acex == true || acey == true)
     contexto.drawImage(this.imgLigado,this.x,this.y,20,50);
 else
     contexto.drawImage(this.imgDesligado,this.x,this.y,20,50);
};


Sprite.prototype.desenharSolo = function(contexto){
 contexto.fillStyle = this.color;
 contexto.fillRect(this.x,this.y,720,80);
};

Sprite.prototype.controlaCombustivel = function(contexto,fuel){
  contexto.fillStyle = this.color; 
  if(fuel < 50)
     contexto.fillStyle = "yellow";
  if(fuel < 30)
     contexto.fillStyle = "red";
  contexto.fillRect(this.x,this.y,20,-fuel);
  contexto.fillStyle = "black";
  contexto.strokeRect(this.x,this.y,20,-200);
};


Sprite.prototype.mover = function(dt){
    
if(this.ay != 0){
   this.movimento = true;
}
	
    this.vx = this.vx + this.ax*dt;   
    this.vy = this.vy + (this.ay+60)*dt;
 
    this.x = this.x + this.vx*dt;
    this.y = this.y + this.vy*dt;

};

Sprite.prototype.colisaoSolo = function(dt){ 
contexto.fillStyle = "red";
 if(this.y >= 700)
 {
	if(!this.movimento == false){
        velDePouso = Math.floor(this.vy);
	}
		 if(velDePouso <= 50){
		     contexto.fillText("Você Conseguiu, pouso a " + velDePouso + " m/s",180,300);
		 } 
		 if(velDePouso > 50){
		     contexto.fillText("Você Fracassou, pouso a " + velDePouso + " m/s",180,300);
	     }
	     this.movimento = false;
		 this.y = 700;
		 this.vy = 0;
         this.ay = 0;	
		 this.vx = 0;
		 this.ax = 0;
   }           	
};

Sprite.prototype.colisaoCanto = function(dt){ 
 if(this.x < 0 ){
      this.x = 0;
      this.vx = 0;
      this.ax = 0;
    }           
 if(this.x > 480){
      this.x = 480;
      this.vx = 0;
      this.ax = 0;
 }
};