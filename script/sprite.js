  function SpriteSheetMarvel(ctx,configCharacter) {
    this.configCharacter = configCharacter;
    this.existObjecttoThrow = false;
    this.currentObjecttoThrow = undefined;
    this.currentFrame = undefined;  // should be called currentIndexFrame. It keeps the tracking of the current index of frames array
    this.currentConfigFrame = undefined;
    this.ctx = ctx;
    this.currentPosition = [0,250];
    this.distanceFromBottom = undefined;
    this.currentMovement = undefined;
    this.doingMovement = false;
    this.directionMovement = 'left';
    this.canMove = true;
    this.index = 0;
    this.intervalFrame = undefined;
    // this.imageSprite.src = path;
  }

  SpriteSheetMarvel.prototype.update = function(dt) {
    this._index += this.speed*dt;
}

  SpriteSheetMarvel.prototype.drawSprite = function() {
    
    switch(this.directionMovement)
    {
    case "left":
      framesFeatures = this.configCharacter.framesFeaturesFliped;
      break;
    case "right":
      framesFeatures = this.configCharacter.framesFeatures;
    }

    var framePosition = this.currentConfigFrame;
    console.log("el valor de FramePosition es:", framePosition);
    
    var posX= framesFeatures[framePosition].posX;
    var posY= framesFeatures[framePosition].posY;
    var widthFrame= framesFeatures[framePosition].widthFrame;
    var heigthFrame= framesFeatures[framePosition].heigthFrame;
    var spritePosX = this.currentPosition[0];
    var spritePosY = this.currentPosition[1];
 


    // var SpriteObjPosX = spritePosX+this.configCharacter.objects[0].relativePosition[8].incrementPosX;
    // var SpriteObjPosY = spritePosY+this.configCharacter.objects[0].relativePosition[8].incrementPosY;
    // var objPosX= this.configCharacter.framesFeatures[0].posX;
    // var objPosY= this.configCharacter.framesFeatures[0].posY;
    // var widthObject = this.configCharacter.framesFeatures[0].widthFrame;
    // var heigthObject = this.configCharacter.framesFeatures[0].heigthFrame;

    // console.log("la posicio X de la pedra es:", objPosX, " i la Y es:", objPosY);

    //we update the position of the object in property CurrentPosition
    
    // console.log("El distance from bottom es:",this.distanceFromBottom);

    // console.log("la SpritePosY es:",spritePosY);

    // console.log("la posX es:",posX);
    // console.log("la posY es:",posY);
    // console.log("el widthFrame es:",widthFrame);
    // console.log("el heightFrame es:",heigthFrame);
    // newflippedImage = new Image();

    switch(this.directionMovement)
  {
    case "left":
    this.ctx.drawImage(this.configCharacter.imageSpriteFliped,posX,posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
      break;
    case "right":
    this.ctx.drawImage(this.configCharacter.imageSprite,posX,posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
  }
    
    // this.ctx.drawImage(this.configCharacter.imageSprite,posX,posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
    this.ctx.fillStyle = 'red';
    // this.ctx.strokeRect(spritePosX,spritePosY,widthFrame,heigthFrame);
   
  }

  SpriteSheetMarvel.prototype.render = function(framePosition,spritePosX) {
    var frame;
     
    // var img = new Image();
    // img.onload = function(){
    //   ctx.drawImage(img,0,0,160,270,0,0,160,270); // Or at whatever offset you like
    // };
    // img.src = "https://www.spriters-resource.com/resources/sheets/45/48389.png";

    // var framePosition = 6;

    var spritePosY = viewportHeight-heigthFrame;

    var posX= this.configCharacter.framesFeatures[framePosition].posX;
    var posY= this.configCharacter.framesFeatures[framePosition].posY;
    var widthFrame= this.configCharacter.framesFeatures[framePosition].widthFrame;
    var heigthFrame= this.configCharacter.framesFeatures[framePosition].heigthFrame;
    var spritePosY = viewportHeight-heigthFrame;

    switch(this.directionMovement)
  {
    case "left":
      framesFeatures = this.configCharacter.framesFeaturesFliped;
      break;
    case "right":
      framesFeatures = this.configCharacter.framesFeatures;
  }


    // var SpriteObjPosX = spritePosX+this.configCharacter.objects[0].relativePosition[8].incrementPosX;
    // var SpriteObjPosY = spritePosY+this.configCharacter.objects[0].relativePosition[8].incrementPosY;
    // var objPosX= this.configCharacter.framesFeatures[0].posX;
    // var objPosY= this.configCharacter.framesFeatures[0].posY;
    // var widthObject = this.configCharacter.framesFeatures[0].widthFrame;
    // var heigthObject = this.configCharacter.framesFeatures[0].heigthFrame;

    // console.log("la posicio X de la pedra es:", objPosX, " i la Y es:", objPosY);

    //we update the position of the object in property CurrentPosition
    this.currentPosition[0] = spritePosX;
    this.currentPosition[1] = spritePosY; 
    this.distanceFromBottom = viewportHeight;
    this.currentConfigFrame = framePosition;
    // console.log("El distance from bottom es:",this.distanceFromBottom);

    // console.log("la SpritePosY es:",spritePosY);

    console.log("la posX es:",posX);
    console.log("la posY es:",posY);
    console.log("el widthFrame es:",widthFrame);
    console.log("el heightFrame es:",heigthFrame);
    // newflippedImage = new Image();


    // this.ctx.translate(spritePosX+widthFrame,0);
    // this.ctx.scale(-1,1);
    // this.ctx.drawImage(this.configCharacter.imageSprite,posX,posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
    // // always clean up -- reset transformations to default
    // this.ctx.setTransform(1,0,0,1,0,0);

    // this.ctx.drawImage(this.configCharacter.imageSprite,posX,posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
    
    this.ctx.drawImage(this.configCharacter.imageSprite,posX,posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
    this.ctx.fillStyle = 'red';
    // this.ctx.strokeRect(spritePosX,spritePosY,widthFrame,heigthFrame);
    
    // this.ctx.drawImage(this.configCharacter.imageSprite,objPosX,objPosY,widthObject,heigthObject,SpriteObjPosX,SpriteObjPosY,widthObject,heigthObject);

    // Este codigo de aqui debajo no funciona
    
    // this.image.src = this.path;
    
}

SpriteSheetMarvel.prototype.renderFliped = function(framePosition,spritePosX) {
  var frame;
   
  // var img = new Image();
  // img.onload = function(){
  //   ctx.drawImage(img,0,0,160,270,0,0,160,270); // Or at whatever offset you like
  // };
  // img.src = "https://www.spriters-resource.com/resources/sheets/45/48389.png";

  // var framePosition = 6;
  var positionIndexObject = 6;
  var framesObject = this.configCharacter.objects[0].frames;
  
  var spritePosY = viewportHeight-heigthFrame;

  var posX= this.configCharacter.framesFeaturesFliped[framePosition].posX;
  var posY= this.configCharacter.framesFeaturesFliped[framePosition].posY;
  var widthFrame= this.configCharacter.framesFeaturesFliped[framePosition].widthFrame;
  var heigthFrame= this.configCharacter.framesFeaturesFliped[framePosition].heigthFrame;
  var spritePosY = viewportHeight-heigthFrame;


  var SpriteObjPosX = spritePosX-this.configCharacter.objects[0].relativePosition[9].incrementPosX;
  var SpriteObjPosY = spritePosY+this.configCharacter.objects[0].relativePosition[9].incrementPosY;
  var objPosX= this.configCharacter.framesFeaturesFliped[19].posX;
  var objPosY= this.configCharacter.framesFeaturesFliped[19].posY;
  var widthObject = this.configCharacter.framesFeaturesFliped[19].widthFrame;
  var heigthObject = this.configCharacter.framesFeaturesFliped[19].heigthFrame;

  // console.log("la posicio X de la pedra es:", objPosX, " i la Y es:", objPosY);

  //we update the position of the object in property CurrentPosition
  this.currentPosition[0] = spritePosX;
  this.currentPosition[1] = spritePosY; 
  this.distanceFromBottom = viewportHeight;
  this.currentConfigFrame = framePosition;
  // console.log("El distance from bottom es:",this.distanceFromBottom);

  // console.log("la SpritePosY es:",spritePosY);

  console.log("la posX es:",posX);
  console.log("la posY es:",posY);
  console.log("el widthFrame es:",widthFrame);
  console.log("el heightFrame es:",heigthFrame);
  // newflippedImage = new Image();


  // this.ctx.translate(spritePosX+widthFrame,0);
  // this.ctx.scale(-1,1);
  // this.ctx.drawImage(this.configCharacter.imageSprite,posX,posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
  // // always clean up -- reset transformations to default
  // this.ctx.setTransform(1,0,0,1,0,0);

  // this.ctx.drawImage(this.configCharacter.imageSprite,posX,posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
  this.ctx.drawImage(this.configCharacter.imageSpriteFliped,posX,posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
  this.ctx.fillStyle = 'red';
  // this.ctx.strokeRect(spritePosX,spritePosY,widthFrame,heigthFrame);

  if (framesObject[positionIndexObject]!=-1) {
    // if the value of the position is -1, it means the object must not be displayed.
    // this.ctx.drawImage(this.configCharacter.imageSpriteFliped,objPosX,objPosY,widthObject,heigthObject,SpriteObjPosX,SpriteObjPosY,widthObject,heigthObject);
  }
  
  

  // Este codigo de aqui debajo no funciona
  
  // this.image.src = this.path;
  
}



SpriteSheetMarvel.prototype.updateFrame = function() {
    // var timestamp = timestamp || new Date().getTime()
    // var runtime = timestamp - starttime
    // var progress = runtime / duration
    // progress = Math.min(progress, 1)

  // this.intervalFrame = setInterval(function(){ 
  // console.log(starttime);
  
  var actualTime = Date.now();
  var runtime = actualTime - starttime;

  // console.log("el valor linia 179 de this.currentFrame es:", this.currentFrame);

  var frameCurrent;

  // Based on the movement, we will use the normal images or the fliped images
  switch(this.directionMovement)
  {
    case "left":
      framesFeatures = this.configCharacter.framesFeaturesFliped;
      break;
    case "right":
      framesFeatures = this.configCharacter.framesFeatures;
  }

  // console.log("han transcurrido:",runtime,"ms");
  // var widthFrame = this.configCharacter.framesFeatures[this.currentFrame].widthFrame;
  // var heigthFrame = this.configCharacter.framesFeatures[this.currentFrame].heigthFrame;
  
  // We assign the properties of Movement to variables to clear script
  var framesMovement = this.configCharacter.movements[this.currentMovement].frames;
  var repeatAction = this.configCharacter.movements[this.currentMovement].repeatAction;
  var frameSpeed = this.configCharacter.movements[this.currentMovement].frameSpeed;
  var speedMovementUp = this.configCharacter.movements[this.currentMovement].speedMovementUp;
  var speedMovement = this.configCharacter.movements[this.currentMovement].speedMovement;
  var timeMovementInterval = this.configCharacter.movements[this.currentMovement].timeMovementInterval;
  
  this.currentConfigFrame = framesMovement[this.currentFrame];
  // console.log("el valor linia 205 de this.currentFrame es:", this.currentFrame);
  // console.log("el valor linia 205 de this.currentConfigFrame es:", this.currentConfigFrame);

  // we get the current position in order to delete the current frame, before displaying the next frame
  var spritePosX = this.currentPosition[0];
  var spritePosY = this.currentPosition[1];

  // console.log("La posicio X per borrar es:",spritePosX," i la posY es:",spritePosY);
  
  // we get the PixelsPerFrame to increase in a movement
  var pixelsPerFrameX = speedMovement/frameSpeed;
  var pixelsPerFrameY = (speedMovementUp*2)/frameSpeed;
  
  // we first clear the actual SpriteFrame
  var widthFrameToRemove= framesFeatures[this.currentConfigFrame].widthFrame;
  var heigthFrameToRemove= framesFeatures[this.currentConfigFrame].heigthFrame;
  
  // this.ctx.clearRect(spritePosX,spritePosY,380,400);
  this.ctx.clearRect(spritePosX,spritePosY,widthFrameToRemove,heigthFrameToRemove);

  // we check if there's also an object to delete (stone, missil...)
  // console.log("el valor de existObjecttoThrow es:",this.existObjecttoThrow);
  // console.log("el valor linia 225 de this.currentFrame es:", this.currentFrame);
  
  if (this.existObjecttoThrow == true && this.configCharacter.objects[0].frames[this.currentFrame]!=-1) {
    currentIndex = this.currentFrame;
    objectFrame = this.configCharacter.objects[0].frames[currentIndex];
    var widthObjectToRemove= framesFeatures[objectFrame].widthFrame;
    var heigthObjectToRemove= framesFeatures[objectFrame].heigthFrame;
    objectPosX = this.configCharacter.objects[0].relativePosition[currentIndex].incrementPosX;
    objectPosY = this.configCharacter.objects[0].relativePosition[currentIndex].incrementPosY;
    switch(this.directionMovement)
    {
      case "left":
        this.ctx.clearRect(spritePosX-objectPosX,spritePosY+objectPosY,widthObjectToRemove,heigthObjectToRemove);
        break;
      case "right":
        this.ctx.clearRect(spritePosX+objectPosX,spritePosY+objectPosY,widthObjectToRemove,heigthObjectToRemove);
    }
      
  }

  // We calculate the index of the new frame to be displayed
  var newIndexFrames = (this.currentFrame+1) % framesMovement.length;
  this.currentFrame = newIndexFrames;
  this.currentConfigFrame = framesMovement[newIndexFrames];
  // We check if the Player can move because there is some collision
  if (this.canMove === false) {
    speedMovement = 0;
  }

  // we calculate the next X position of the next frame to display
  switch(this.directionMovement)
  {
    case "left":
      this.currentPosition[0] = this.currentPosition[0] - (speedMovement/frameSpeed);
      break;
    case "right":
      this.currentPosition[0] = this.currentPosition[0] + (speedMovement/frameSpeed);
  }
    
  spritePosX = this.currentPosition[0];
  
  // we calculate the next Y position of the next frame to display
  if (this.currentFrame == 0) {
    spritePosY = viewportHeight-framesFeatures[framesMovement[this.currentFrame]].heigthFrame;
    this.currentPosition[1] = spritePosY;
  } else {
    //Let's check if there's a Movement Jump, so then we have to update the SpritePosY
    if (speedMovementUp>0) {
      // For the jump movement, the number of frames is unpair. The first half+1 frames are for up, and the rest for the movement down
      // we check if we are in the up or down movement
      if (this.currentFrame < (framesMovement.length/2)) {
        // we are in UP movement. So we have to SUBSTRACT pixels to SpriteY
        this.distanceFromBottom = this.distanceFromBottom - (speedMovementUp*2/frameSpeed);
        spritePosY = this.distanceFromBottom-framesFeatures[framesMovement[this.currentFrame]].heigthFrame;
        this.currentPosition[1] = spritePosY;
        
        console.log("Estamos saltando y en movimiento UP. El nº de frame es:", this.currentFrame);
      } else {
        // we are in DOWN movement. So we have to ADD pixels to SpriteY
        console.log("Estamos saltando y en movimiento DOWN. El nº de frame es:", this.currentFrame);
        this.distanceFromBottom = this.distanceFromBottom + (speedMovementUp*2/frameSpeed);
        spritePosY = this.distanceFromBottom-framesFeatures[framesMovement[this.currentFrame]].heigthFrame;
        this.currentPosition[1] = spritePosY;
      }
      
    } else {
      // It's a Move Forward, Back, or Beat or ThrowObject Movement, we don't have to decrease Y position
      // console.log("el valor linia 284 de this.currentFrame es:", this.currentFrame);
      // console.log("el valor linia 285 de el nº de frame a mostrar es:", framesMovement[this.currentFrame]);
      spritePosY = this.distanceFromBottom-framesFeatures[framesMovement[this.currentFrame]].heigthFrame;
      this.currentPosition[1] = spritePosY;
    }
  }

  
  
  // console.log("la SpritePosY es:",spritePosY);
  // console.log("la distancia Y del suelo es:",this.distanceFromBottom);
  // console.log("la posicio X es:", spritePosX);
  
  // console.log("el valor del index current frame es:", this.currentFrame);
  
  

  // we update the position of the Sprite in Canvas base on the speed



  //  console.log("la nueva posicion array es:",newIndexFrames);
  //  console.log("la longitud del array es:",this.frames.length);
  
  // we upload the values of the frame
  // frames is a variable that keeps the array of frames movement
  var posX= framesFeatures[framesMovement[newIndexFrames]].posX;
  var posY= framesFeatures[framesMovement[newIndexFrames]].posY;
  var widthFrame= framesFeatures[framesMovement[newIndexFrames]].widthFrame;
  var heigthFrame= framesFeatures[framesMovement[newIndexFrames]].heigthFrame;
  
   // we calculate the Y position in viewport of the new frame, in order to align it to the bottom
  // spritePosY = viewportHeight-heigthFrame;  
  switch(this.directionMovement)
  {
    case "left":
      this.ctx.drawImage(this.configCharacter.imageSpriteFliped,posX, posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
      break;
    case "right":
      this.ctx.drawImage(this.configCharacter.imageSprite,posX, posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
  }

  // we check if there's some object displayed, that is throw
  // Also we check if for that framePosition, the object is displayed
  // console.log("el valor del array de la posicion del objeto es:", this.configCharacter.objects[0].frames[this.currentFrame]);
  // console.log("la posicion que estamos comprobando del array es:",this.currentFrame);

  if (this.existObjecttoThrow == true && this.configCharacter.objects[0].frames[this.currentFrame]!=-1) {
    currentIndex = this.currentFrame;
    objectFrame = this.configCharacter.objects[0].frames[currentIndex];
    // console.log("el current index es:", currentIndex," y el nº de frame de objeto a dibujar es:",objectFrame);

    // we get the position of the object inside the image Sprite
    var widthObject= framesFeatures[objectFrame].widthFrame;
    var heigthObject= framesFeatures[objectFrame].heigthFrame;
    var spriteObjPosX= framesFeatures[objectFrame].posX;
    var spriteObjPosY= framesFeatures[objectFrame].posY;
    // var widthObject = this.configCharacter.framesFeatures[0].widthFrame;
    // var heigthObject = this.configCharacter.framesFeatures[0].heigthFrame;
    
    // we get the relative position of the object respect the character position
    objectPosX = this.configCharacter.objects[0].relativePosition[currentIndex].incrementPosX;
    objectPosY = this.configCharacter.objects[0].relativePosition[currentIndex].incrementPosY;
    
    switch(this.directionMovement)
      {
        case "left":
        this.ctx.drawImage(this.configCharacter.imageSpriteFliped,spriteObjPosX, spriteObjPosY,widthObject,heigthObject,spritePosX-objectPosX,spritePosY+objectPosY,widthObject,heigthObject);
          break;
        case "right":
        this.ctx.drawImage(this.configCharacter.imageSprite,spriteObjPosX, spriteObjPosY,widthObject,heigthObject,spritePosX+objectPosX,spritePosY+objectPosY,widthObject,heigthObject);
      }
     
  }
  
  if (runtime<timeMovementInterval && this.canMove === true) {
    setTimeout(function(){
      requestAnimationFrame(this.updateFrame.bind(this)); 
     }.bind(this),timeMovementInterval/frameSpeed); 
  } else {
      // // we want to leave the character in a certain predifined position

      var widthFrame = framesFeatures[framesMovement[this.currentFrame]].widthFrame;
      var heigthFrame = framesFeatures[framesMovement[this.currentFrame]].heigthFrame;
      // console.log("el ultimo index frame que borramos es:",this.currentFrame);

      this.ctx.clearRect(spritePosX,spritePosY-100,widthFrame,heigthFrame+100);
      
      var restPosition = this.configCharacter.restPosition;
      posX= framesFeatures[restPosition].posX;
      posY= framesFeatures[restPosition].posY;
      widthFrame= framesFeatures[restPosition].widthFrame;
      heigthFrame= framesFeatures[restPosition].heigthFrame;
      spritePosY = viewportHeight-heigthFrame; 

      switch(this.directionMovement)
      {
        case "left":
          this.ctx.drawImage(this.configCharacter.imageSpriteFliped,posX, posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
          break;
        case "right":
          this.ctx.drawImage(this.configCharacter.imageSprite,posX, posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
      }
      
      this.currentConfigFrame = restPosition; // we update the current frame
      this.doingMovement = false; // the player can push another key again
      this.distanceFromBottom = viewportHeight;

      // Let's check if there's an object throw without collision. We have to make the object to fly until gets out the viewport
      // if (this.existObjecttoThrow === true) {
      //   objectPosX = spriteObjPosX+this.configCharacter.objects[0].relativePosition[currentIndex].incrementPosX;
      //   objectPosY = spriteObjPosX+this.configCharacter.objects[0].relativePosition[currentIndex].incrementPosY;
        
        
          
      //   var idSetInterval = setInterval(function(){
      //       console.log("ccccccccla posicion de la piedra es:",objectPosX);
      //       this.ctx.clearRect(objectPosX,objectPosY,widthObjectToRemove,heigthObjectToRemove);
      //       objectPosX += 50;
      //       this.ctx.drawImage(this.configCharacter.imageSprite,spriteObjPosX, spriteObjPosY,widthObject,heigthObject,spritePosX+objectPosX,spritePosY+objectPosY,widthObject,heigthObject);
      //     }.bind(this),1000);
        
          

      //     // objectPosX is higher, we clear the Set Interval
      //     clearInterval(idSetInterval);
          

      // }
  }  

}
 
SpriteSheetMarvel.prototype.updateFrameFliped = function() {
  // var timestamp = timestamp || new Date().getTime()
  // var runtime = timestamp - starttime
  // var progress = runtime / duration
  // progress = Math.min(progress, 1)

// this.intervalFrame = setInterval(function(){ 
// console.log(starttime);

var actualTime = Date.now();
var runtime = actualTime - starttime;
var frameCurrent;

if (this.directionMovement === 'left') {
  framesCurrent = this.configCharacter.framesFeaturesFliped;
} else {
  framesCurrent = this.configCharacter.framesFeatures;
}

// console.log("han transcurrido:",runtime,"ms");
// var widthFrame = this.configCharacter.framesFeatures[this.currentFrame].widthFrame;
// var heigthFrame = this.configCharacter.framesFeatures[this.currentFrame].heigthFrame;

// We assign the properties of Movement to variables to clear script
var frames = this.configCharacter.movements[this.currentMovement].frames;
var repeatAction = this.configCharacter.movements[this.currentMovement].repeatAction;
var frameSpeed = this.configCharacter.movements[this.currentMovement].frameSpeed;
var speedMovementUp = this.configCharacter.movements[this.currentMovement].speedMovementUp;
var speedMovement = this.configCharacter.movements[this.currentMovement].speedMovement;
var timeMovementInterval = this.configCharacter.movements[this.currentMovement].timeMovementInterval;


// we get the current position in order to delete the current frame, before displaying the next frame
var spritePosX = this.currentPosition[0];
var spritePosY = this.currentPosition[1];

// console.log("La posicio X per borrar es:",spritePosX," i la posY es:",spritePosY);

// we get the PixelsPerFrame to increase in a movement
var pixelsPerFrameX = speedMovement/frameSpeed;
var pixelsPerFrameY = (speedMovementUp*2)/frameSpeed;

// we first clear the actual SpriteFrame
var widthFrameToRemove= this.configCharacter.framesFeaturesFliped[this.currentConfigFrame].widthFrame;
var heigthFrameToRemove= this.configCharacter.framesFeaturesFliped[this.currentConfigFrame].heigthFrame;

// this.ctx.clearRect(spritePosX,spritePosY,380,400);
this.ctx.clearRect(spritePosX,spritePosY,widthFrameToRemove,heigthFrameToRemove);

// we check if there's also an object to delete (stone, missil...)
console.log("el valor de existObjecttoThrow es:",this.existObjecttoThrow);
if (this.existObjecttoThrow == true) {
  currentIndex = this.currentFrame;
  objectFrame = this.configCharacter.objects[0].frames[currentIndex];
  var widthObjectToRemove= this.configCharacter.framesFeaturesFliped[objectFrame].widthFrame;
  var heigthObjectToRemove= this.configCharacter.framesFeaturesFliped[objectFrame].heigthFrame;
  objectPosX = this.configCharacter.objects[0].relativePosition[currentIndex].incrementPosX;
  objectPosY = this.configCharacter.objects[0].relativePosition[currentIndex].incrementPosY;
  this.ctx.clearRect(spritePosX-objectPosX,spritePosY+objectPosY,widthObjectToRemove,heigthObjectToRemove);

}

// We calculate the index of the new frame to be displayed
var newIndexFrames = (this.currentFrame+1) % frames.length;
this.currentFrame = newIndexFrames;
this.currentConfigFrame = frames[newIndexFrames];

// we calculate the next X position of the next frame to display
this.currentPosition[0] = this.currentPosition[0] - (speedMovement/frameSpeed);
spritePosX = this.currentPosition[0];

// we calculate the next Y position of the next frame to display
if (this.currentFrame == 0) {
  spritePosY = viewportHeight-this.configCharacter.framesFeaturesFliped[frames[this.currentFrame]].heigthFrame;
  this.currentPosition[1] = spritePosY;
} else {
  //Let's check if there's a Movement Jump, so then we have to update the SpritePosY
  if (speedMovementUp>0) {
    // For the jump movement, the number of frames is unpair. The first half+1 frames are for up, and the rest for the movement down
    // we check if we are in the up or down movement
    if (this.currentFrame < (frames.length/2)) {
      // we are in UP movement. So we have to SUBSTRACT pixels to SpriteY
      this.distanceFromBottom = this.distanceFromBottom - (speedMovementUp*2/frameSpeed);
      spritePosY = this.distanceFromBottom-this.configCharacter.framesFeaturesFliped[frames[this.currentFrame]].heigthFrame;
      this.currentPosition[1] = spritePosY;
      
      console.log("Estamos saltando y en movimiento UP. El nº de frame es:", this.currentFrame);
    } else {
      // we are in DOWN movement. So we have to ADD pixels to SpriteY
      console.log("Estamos saltando y en movimiento DOWN. El nº de frame es:", this.currentFrame);
      this.distanceFromBottom = this.distanceFromBottom + (speedMovementUp*2/frameSpeed);
      spritePosY = this.distanceFromBottom-this.configCharacter.framesFeaturesFliped[frames[this.currentFrame]].heigthFrame;
      this.currentPosition[1] = spritePosY;
    }
    
  } else {
    // It's a Move Forward, Back, or Beat or ThrowObject Movement, we don't have to decrease Y position
    spritePosY = this.distanceFromBottom-this.configCharacter.framesFeaturesFliped[frames[this.currentFrame]].heigthFrame;
    this.currentPosition[1] = spritePosY;
  }
}

console.log("la SpritePosY es:",spritePosY);
console.log("la distancia Y del suelo es:",this.distanceFromBottom);
console.log("la posicio X es:", spritePosX);

// console.log("el valor del index current frame es:", this.currentFrame);

// we update the position of the Sprite in Canvas base on the speed

//  console.log("la nueva posicion array es:",newIndexFrames);
//  console.log("la longitud del array es:",this.frames.length);

// we upload the values of the frame
var posX= this.configCharacter.framesFeaturesFliped[frames[newIndexFrames]].posX;
var posY= this.configCharacter.framesFeaturesFliped[frames[newIndexFrames]].posY;
var widthFrame= this.configCharacter.framesFeaturesFliped[frames[newIndexFrames]].widthFrame;
var heigthFrame= this.configCharacter.framesFeaturesFliped[frames[newIndexFrames]].heigthFrame;

// we calculate the Y position in viewport of the new frame, in order to align it to the bottom
// spritePosY = viewportHeight-heigthFrame;  

this.ctx.drawImage(this.configCharacter.imageSpriteFliped,posX, posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);

// we check if there's some object displayed, that is throw

if (this.existObjecttoThrow == true) {
  currentIndex = this.currentFrame;
  objectFrame = this.configCharacter.objects[0].frames[currentIndex];
  
  // we get the position of the object inside the image Sprite
  var widthObject= this.configCharacter.framesFeaturesFliped[objectFrame].widthFrame;
  var heigthObject= this.configCharacter.framesFeaturesFliped[objectFrame].heigthFrame;
  var spriteObjPosX= this.configCharacter.framesFeaturesFliped[0].posX;
  var spriteObjPosY= this.configCharacter.framesFeaturesFliped[0].posY;
  // var widthObject = this.configCharacter.framesFeatures[0].widthFrame;
  // var heigthObject = this.configCharacter.framesFeatures[0].heigthFrame;
  
  // we get the relative position of the object respect the character position
  objectPosX = this.configCharacter.objects[0].relativePosition[currentIndex].incrementPosX;
  objectPosY = this.configCharacter.objects[0].relativePosition[currentIndex].incrementPosY;
  this.ctx.drawImage(this.configCharacter.imageSprite,spriteObjPosX, spriteObjPosY,widthObject,heigthObject,spritePosX+objectPosX,spritePosY+objectPosY,widthObject,heigthObject);
}


if (runtime<timeMovementInterval) {
  setTimeout(function(){
    requestAnimationFrame(this.updateFrameFliped.bind(this)); 
   }.bind(this),timeMovementInterval/frameSpeed); 
} else {
    // // we want to leave the character in a certain predifined position

    var widthFrame = this.configCharacter.framesFeaturesFliped[this.currentFrame].widthFrame;
    var heigthFrame = this.configCharacter.framesFeaturesFliped[this.currentFrame].heigthFrame;
  
    this.ctx.clearRect(spritePosX,spritePosY,widthFrame,heigthFrame);
    
    restPosition = 0;
    posX= this.configCharacter.framesFeaturesFliped[frames[restPosition]].posX;
    posY= this.configCharacter.framesFeaturesFliped[frames[restPosition]].posY;
    widthFrame= this.configCharacter.framesFeaturesFliped[frames[restPosition]].widthFrame;
    heigthFrame= this.configCharacter.framesFeaturesFliped[frames[restPosition]].heigthFrame;
    spritePosY = viewportHeight-heigthFrame; 

    this.ctx.drawImage(this.configCharacter.imageSpriteFliped,posX, posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);

    this.doingMovement = false; // the player can push another key again
    this.distanceFromBottom = viewportHeight;

    // Let's check if there's an object throw without collision. We have to make the object to fly until gets out the viewport
    // if (this.existObjecttoThrow === true) {
    //   objectPosX = spriteObjPosX+this.configCharacter.objects[0].relativePosition[currentIndex].incrementPosX;
    //   objectPosY = spriteObjPosX+this.configCharacter.objects[0].relativePosition[currentIndex].incrementPosY;
      
      
        
    //   var idSetInterval = setInterval(function(){
    //       console.log("ccccccccla posicion de la piedra es:",objectPosX);
    //       this.ctx.clearRect(objectPosX,objectPosY,widthObjectToRemove,heigthObjectToRemove);
    //       objectPosX += 50;
    //       this.ctx.drawImage(this.configCharacter.imageSprite,spriteObjPosX, spriteObjPosY,widthObject,heigthObject,spritePosX+objectPosX,spritePosY+objectPosY,widthObject,heigthObject);
    //     }.bind(this),1000);
      
        

    //     // objectPosX is higher, we clear the Set Interval
    //     clearInterval(idSetInterval);
        

    // }
}  

}


// Guardo el updateframe que funcionaba para tener el código
SpriteSheetMarvel.prototype.updateFrame2 = function() {
  // var timestamp = timestamp || new Date().getTime()
  // var runtime = timestamp - starttime
  // var progress = runtime / duration
  // progress = Math.min(progress, 1)

// this.intervalFrame = setInterval(function(){ 
// console.log(starttime);

var actualTime = Date.now();
var runtime = actualTime - starttime;
// console.log("han transcurrido:",runtime,"ms");
var widthFrame = this.configCharacter.framesFeatures[this.currentFrame].widthFrame;
var heigthFrame = this.configCharacter.framesFeatures[this.currentFrame].heigthFrame;

this.ctx.clearRect(400,200,widthFrame,heigthFrame);
var newIndexFrames= (this.currentFrame+1) % this.frames.length;
//  console.log("la nueva posicion array es:",newIndexFrames);
//  console.log("la longitud del array es:",this.frames.length);

var posX= this.configCharacter.framesFeatures[newIndexFrames].posX;
var posY= this.configCharacter.framesFeatures[newIndexFrames].posY;
var widthFrame= this.configCharacter.framesFeatures[newIndexFrames].widthFrame;
var heigthFrame= this.configCharacter.framesFeatures[newIndexFrames].heigthFrame;


this.ctx.drawImage(this.configCharacter.imageSprite,posX, posY,widthFrame,heigthFrame,400,200,widthFrame,heigthFrame);
this.currentFrame = newIndexFrames;

// }.bind(this),1000/this.speed);

if (runtime<4200) {
  setTimeout(function(){
    requestAnimationFrame(this.updateFrame.bind(this)); 
   }.bind(this),1000/this.speed); 
} else {
    // we want to leave the character in a certain predifined position

    var widthFrame = this.configCharacter.framesFeatures[this.currentFrame].widthFrame;
    var heigthFrame = this.configCharacter.framesFeatures[this.currentFrame].heigthFrame;
  
    this.ctx.clearRect(400,200,widthFrame,heigthFrame);
    
    restPosition = 1;
    posX= this.configCharacter.framesFeatures[restPosition].posX;
    posY= this.configCharacter.framesFeatures[restPosition].posY;
    widthFrame= this.configCharacter.framesFeatures[restPosition].widthFrame;
    heigthFrame= this.configCharacter.framesFeatures[restPosition].heigthFrame;
    this.ctx.drawImage(this.imageSprite,posX, posY,widthFrame,heigthFrame,400,200,widthFrame,heigthFrame);

    this.doingMovement = false; // the player can push another key again
}  




  
}




