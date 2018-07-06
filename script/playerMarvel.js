function Player(ctx,nameCharacter,configCharacter,directionMovementPlayer){
  this.sprite = new SpriteSheetMarvel(ctx,configCharacter); 
  this.ctx = ctx;
  this.nameCharacter = nameCharacter;
  // this.configCharacter = configCharacter;
  this.currentScore = 300;
  this.currentDirectionMovement = directionMovementPlayer;
  this.intervalId = undefined;
  
}

// Snake.prototype.move = function(){
//   if(!this.intervalId) 
//   {
//     this.intervalId = setInterval(this._moveForward.bind(this), 70);
//   }
// }

// Snake.prototype._moveForward = function(){
//   var head = this.body[0];
//   switch(this.direction)
//   {
//     case 'up':
//       this.body.unshift({row: ((head.row - 1) + this.maxRows) % this.maxRows, column: head.column});
//     break;
//     case 'down':
//       this.body.unshift({row: ((head.row + 1) % this.maxRows), column: head.column});
//     break;
//     case 'right':
//       this.body.unshift({row: head.row, column: ((head.column + 1) + this.maxColumns) % this.maxColumns});
//     break;
//     case 'left':
//        this.body.unshift({row: head.row, column: ((head.column - 1 + this.maxColumns)) % this.maxColumns});
//     break;
//   }
//   this.previousTail = this.body.pop();
// }

Player.prototype.goUp = function(){
  // We check that we are not on the limit of Grid
  starttime = Date.now(); 
  this.sprite.currentMovement = 2; // we assign the position of array Movements
  this.sprite.currentFrame = 0;
  this.currentConfigFrame = this.sprite.configCharacter.restPosition;
  this.existObjecttoThrow = false;
  requestAnimationFrame(this.sprite.updateFrame());
  }


Player.prototype.goDown = function(){
  starttime = Date.now(); 
  this.sprite.currentMovement = 3; // we assign the position of array Movements
  this.sprite.currentFrame = 0;
  this.currentConfigFrame = this.sprite.configCharacter.restPosition;
  this.sprite.existObjecttoThrow = false;
  requestAnimationFrame(this.sprite.updateFrame());
}

Player.prototype.goRight = function(){
  // Movement forward
  starttime = Date.now(); 
  this.sprite.currentMovement = 0; // we assign the position of array Movements
  this.sprite.currentFrame = 0;
  this.currentConfigFrame = this.sprite.configCharacter.restPosition;
  this.sprite.existObjecttoThrow = false;
  this.sprite.directionMovement = "right";
  requestAnimationFrame(this.sprite.updateFrame());
}

Player.prototype.goLeft = function(){
  // Movement back
  starttime = Date.now(); 
  this.sprite.currentMovement = 1; // we assign the position of array Movements
  this.sprite.currentFrame = 0;
  this.currentConfigFrame = this.sprite.configCharacter.restPosition;
  this.sprite.existObjecttoThrow = false;
  this.sprite.directionMovement = "left";
  requestAnimationFrame(this.sprite.updateFrame());
  
}  

Player.prototype.Beat = function(){
  // Beat
  starttime = Date.now(); 
  this.sprite.currentMovement = 4; // we assign the position of array Movements
  this.sprite.currentFrame = 0;
  this.currentConfigFrame = this.sprite.configCharacter.restPosition;
  this.sprite.existObjecttoThrow = false;
  
  switch(this.currentDirectionMovement)
  {
    case "left":
      this.sprite.directionMovement = "left";
      requestAnimationFrame(this.sprite.updateFrame());
    break;
    case "right":
      this.sprite.directionMovement = "right";
      requestAnimationFrame(this.sprite.updateFrame());
  }
  
}

Player.prototype.Beat2 = function(){
  // Beat-2
  starttime = Date.now(); 
  this.sprite.currentMovement = 5; // we assign the position of array Movements
  this.sprite.currentFrame = 0;
  this.currentConfigFrame = this.sprite.configCharacter.restPosition;
  this.sprite.existObjecttoThrow = false;
  switch(this.currentDirectionMovement)
  {
    case "left":
      this.sprite.directionMovement = "left";
      requestAnimationFrame(this.sprite.updateFrame());
    break;
    case "right":
      this.sprite.directionMovement = "right";
      requestAnimationFrame(this.sprite.updateFrame());
  }
}

Player.prototype.Beat3 = function(){
  // Beat-3
  starttime = Date.now(); 
  this.sprite.currentMovement = 6; // we assign the position of array Movements
  this.sprite.currentFrame = 0;
  this.currentConfigFrame = this.sprite.configCharacter.restPosition;
  this.sprite.existObjecttoThrow = false;
  switch(this.currentDirectionMovement)
  {
    case "left":
      this.sprite.directionMovement = "left";
      requestAnimationFrame(this.sprite.updateFrame());
    break;
    case "right":
      this.sprite.directionMovement = "right";
      requestAnimationFrame(this.sprite.updateFrame());
  }
}

Player.prototype.ThrowObject = function(){
  // Throw object
  starttime = Date.now(); 
  this.sprite.currentMovement = 7; // we assign the position of array Movements
  this.sprite.currentFrame = 0;
  this.currentConfigFrame = this.sprite.configCharacter.restPosition;
  this.sprite.existObjecttoThrow = true;
  console.log("el valor de existObjecttoThrow es:",this.existObjecttoThrow);
  this.sprite.currentObjecttoThrow = 0; // we set the position of the object element inside array in configCharacter
  switch(this.currentDirectionMovement)
  {
    case "left":
      this.sprite.directionMovement = "left";
      requestAnimationFrame(this.sprite.updateFrame());
    break;
    case "right":
      this.sprite.directionMovement = "right";
      requestAnimationFrame(this.sprite.updateFrame());
  }
}

Player.prototype.update = function(){
  // // We update the positiob of the player
  this.row = this.nextRow;
  this.col = this.nextCol;
  
}

// Player.prototype.stop = function(){
//   if(this.intervalId)
//   {
//     clearInterval(this.intervalId);
//     this.intervalId = undefined;
//   } 
// }


