function Sprite(){
 this.x = 0;
 this.y = 0;
 this.vx = 10;
 this.vy = 10;
 this.color ="blue";    
}

Sprite.prototype.desenhar = function(contexto){
 contexto.fillStyle = this.color;
 contexto.fillRect(this.x,this.y,15,15);
 contexto.strokeStyle = "black";
 contexto.strokeRect(this.x,this.y,15,15);
};

Sprite.prototype.mover = function(dt){
 this.x = this.x + this.vx*dt;
 this.y = this.y + this.vy*dt;
};