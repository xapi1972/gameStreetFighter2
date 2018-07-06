function Game(ctx,nameCharacterPlayer1,configPlayer1,directionMovementPlayer1,nameCharacterPlayer2,configPlayer2,directionMovementPlayer2){
  this.player1 = new Player(ctx,nameCharacterPlayer1,configPlayer1,directionMovementPlayer1); 
  this.player2 = new Player(ctx,nameCharacterPlayer2,configPlayer2,directionMovementPlayer2);
  // this.player2 = options.player2; 
  // this.rows = options.maxRows;
  // this.columns = options.maxColumns;
  this.ctx = ctx;
  this.gamePlaying = false;
  this.idIntervalCollision = undefined;
  // this.loop = undefined; //MARIONA
  // this.food = undefined;
  // this.intervalGame = undefined;
}

// with this function we upload the background image, scores, and render the sprites choosen by Players
// Game.prototype._drawBoard = function (){
//   for (var columnIndex = 0; columnIndex < this.columns; columnIndex++){
//     for (var rowIndex = 0; rowIndex < this.rows; rowIndex++){
//       this.ctx.fillStyle = "black";
//       this.ctx.fillRect(columnIndex * 30, rowIndex  * 30, 30, 30);
//       this.ctx.clearRect((columnIndex * 30)+1, (rowIndex  * 30)+1, 29, 29);
//     }
//   }
  
// }

Game.prototype._drawScores = function(){
  
  // we draw scores

  var scorePlayer1 = this.player1.currentScore;
  var scorePlayer2 = this.player2.currentScore;


  this.ctx.fillStyle = 'green';
  this.ctx.font = '24px serif';
  this.ctx.fillText('GREEN HULK', 40, 30);

  this.ctx.fillStyle = 'black';
  this.ctx.fillRect(40,40,304,22);
  this.ctx.fillStyle = 'white';
  this.ctx.fillRect(42,42,300,18);
  this.ctx.fillStyle = 'green';
  this.ctx.fillRect(42,42,scorePlayer1,18);
  

  this.ctx.fillStyle = 'red';
  this.ctx.font = '24px serif';
  this.ctx.fillText('RED HULK', viewportWidth-400, 30);

  this.ctx.fillStyle = 'black';
  this.ctx.fillRect(viewportWidth-400,40,304,22);
  this.ctx.fillStyle = 'white';
  this.ctx.fillRect(viewportWidth-398,42,300,18);
  this.ctx.fillStyle = 'green';
  this.ctx.fillRect(viewportWidth-398,42,scorePlayer2,18);

}

Game.prototype._drawPlayers = function(){
  // this.ctx.fillStyle = config.snakeBodyColor;
  
  // we draw Player 1

  console.log("el nombre del player es:",this.player1.nameCharacter);
  // this.player1.sprite.render(1);
  // this.player1.sprite.render(0);
  this.player1.sprite.render(19,0);
  // this.player2.sprite.renderFliped(13,viewportWidth-250);
  this.player2.sprite.renderFliped(13,viewportWidth-280);
  
  

}

// Game.prototype._redrawPlayers = function(){
//   this.ctx.fillStyle = config.snakeBodyColor;
  
//   We delete current position of Player 1
//   this.ctx.fillStyle='rgb(255,255,255)';
//   this.ctx.fillRect(((this.player1.col-1) * 30)+2, ((this.player1.row-1) * 30)+2, 27, 27);

//   we redraw Player 1
//   this.ctx.fillStyle='rgb(30,144,255)';
//   this.ctx.fillRect(((this.player1.nextCol-1) * 30)+2, ((this.player1.nextRow-1) * 30)+2, 27, 27); //els fem de 28x28 i així ens queda un marge (que tb podriem fer amb stroke)
  
//   We delete current position of Player 1
//   this.ctx.fillStyle='rgb(255,255,255)';
//   this.ctx.fillRect(((this.player2.col-1) * 30)+2, ((this.player2.row-1) * 30)+2, 27, 27);

//   we redraw Player 2
//   this.ctx.fillStyle='rgb(124,252,0)';
//   var numCol = this.player2.col;
//   var numFila = this.player2.row;
//   this.ctx.fillRect(((this.player2.nextCol-1) * 30)+2, ((this.player2.nextRow-1) * 30)+2, 27, 27);
// }


Game.prototype._update = function(){
  this._drawBoard();
  this._drawSnake();
  if(this.snake.hasEatenFood(this.food)){
    console.log("yummie!!!");
    this._generateFood();
    this.snake.grow();
  }
  if(this.snake.hasEatenItself())
  {
    this.snake.stop();
    this.stop();
    alert('game over!');
  }
  this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
}

Game.prototype._interval = function(){
  this.loop = setInterval(function(){
    
  },500);
}

Game.prototype.restart = function () {
  var btn = document.createElement("BUTTON");
  var btn2 = document.createElement("BUTTON");
  var t = document.createTextNode("PLAY AGAIN");
  var t2 = document.createTextNode(" EXIT ");
  // btn.classList.add("button");
  btn.className += "button";
  btn2.className += "button";

  // var x = document.createElement("INPUT");
  // x.setAttribute("type", "button");
  
  // var divElem = document.getElementById("restart-game");

  btn.appendChild(t);
  btn2.appendChild(t2);
  // document.body.appendChild(btn);

  document.getElementById("restart-game").appendChild(btn);
  document.getElementById("exit-game").appendChild(btn2);

  btn.onclick = function(){window.location.reload()};
  btn2.onclick = function(){window.location.assign("index.html")};

}

Game.prototype.start = function (){
  this.gamePlaying = true;
  this._assignEventsToKeys();
  this.idIntervalCollision = setInterval(this._detectCollisions.bind(this),50);  // we pass the function as an instance, and then 
  
  
  id_valorPosX_Sprite = setInterval(this._valorPosicion.bind(this),10000); 
  // this._detectCollisions();
  // this._generateFood();
  // this._update();
  // this.snake.move();
}

Game.prototype._valorPosicion = function(){
  var posXPlayer1 = this.player1.sprite.currentPosition[0];
  var posYPlayer1 = this.player1.sprite.currentPosition[1];
  var currentFramePlayer1 = this.player1.sprite.currentConfigFrame;
  var widthFramePlayer1 = this.player1.sprite.configCharacter.framesFeatures[currentFramePlayer1].widthFrame;
  var heightFramePlayer1 = this.player1.sprite.configCharacter.framesFeatures[currentFramePlayer1].heigthFrame;
  var directionMovementPlayer1 = this.player1.sprite.directionMovement;
  var currentMovementPlayer1 = this.player1.sprite.currentMovement;
  var doingMovementPlayer1 = this.player1.sprite.doingMovement;

  var posXPlayer2 = this.player2.sprite.currentPosition[0];
  var posYPlayer2 = this.player2.sprite.currentPosition[1];
  var currentFramePlayer2 = this.player2.sprite.currentConfigFrame;
  
  switch(this.player2.sprite.directionMovement)
  {
    case "left":
      framesFeaturesPlayer2 = this.player2.sprite.configCharacter.framesFeaturesFliped;
    break;
    case "right":
      framesFeaturesPlayer2 = this.player2.sprite.configCharacter.framesFeatures;
  }
  
  var widthFramePlayer2 = framesFeaturesPlayer2[currentFramePlayer1].widthFrame;
  var heightFramePlayer2 = framesFeaturesPlayer2[currentFramePlayer1].heigthFrame;
  var directionMovementPlayer2 = this.player2.sprite.directionMovement;
  var currentMovementPlayer2 = this.player2.sprite.currentMovement;
  var doingMovementPlayer2 = this.player2.sprite.doingMovement;

  //let's calculate the square that is occupied by player 1
  
  var posX1Player1 = posXPlayer1;
  var posX2Player1 = posXPlayer1+widthFramePlayer1;
  var posY1Player1 = posYPlayer1;
  var posY1Player1 = posYPlayer1+heightFramePlayer1;

  //let's calculate the square that is occupied by player 2
  
  var posX1Player2 = posXPlayer2;
  var posX2Player2 = posXPlayer2+widthFramePlayer2;
  var posY1Player2 = posYPlayer2;
  var posY1Player2 = posYPlayer2+heightFramePlayer2;

  console.log("el valor PosX limit del player 1 es", posX2Player1);
  console.log("el valor de canMove del player1:", this.player1.sprite.canMove);
  console.log("el valor de doingMovement del player1:", doingMovementPlayer1);
  console.log("el movimiento actual del player1:", currentMovementPlayer1);
  console.log("la direccion actual del player1 es:", this.player1.sprite.directionMovement);
  console.log ("el valor del currentFrame del Player 1 es:",currentFramePlayer1);
    

  console.log("el valor PosX limit del player 2 es", posX1Player2);
  console.log("el valor de canMove del player 2:", this.player2.sprite.canMove);
  console.log("el valor de doingMovement del player 2:", doingMovementPlayer2);
  console.log("el movimiento actual del player2:", currentMovementPlayer2);
  console.log("la direccion actual del player2 es:", this.player2.sprite.directionMovement);
  console.log ("el valor del currentFrame del Player 2 es:",currentFramePlayer2);
}

Game.prototype._detectCollisions = function(){
  
  // console.log("estamos aplicando setinterval de collision");
  var posXPlayer1 = this.player1.sprite.currentPosition[0];
  var posYPlayer1 = this.player1.sprite.currentPosition[1];
  var currentFramePlayer1 = this.player1.sprite.currentConfigFrame;
  var widthFramePlayer1 = this.player1.sprite.configCharacter.framesFeatures[currentFramePlayer1].widthFrame;
  var heightFramePlayer1 = this.player1.sprite.configCharacter.framesFeatures[currentFramePlayer1].heigthFrame;
  var directionMovementPlayer1 = this.player1.sprite.directionMovement;
  var currentMovementPlayer1 = this.player1.sprite.currentMovement;
  var doingMovementPlayer1 = this.player1.sprite.doingMovement;

  var posXPlayer2 = this.player2.sprite.currentPosition[0];
  var posYPlayer2 = this.player2.sprite.currentPosition[1];
  var currentFramePlayer2 = this.player2.sprite.currentConfigFrame;
  
  switch(this.player2.sprite.directionMovement)
  {
    case "left":
      framesFeaturesPlayer2 = this.player2.sprite.configCharacter.framesFeaturesFliped;
    break;
    case "right":
      framesFeaturesPlayer2 = this.player2.sprite.configCharacter.framesFeatures;
  }
  
  var widthFramePlayer2 = framesFeaturesPlayer2[currentFramePlayer1].widthFrame;
  var heightFramePlayer2 = framesFeaturesPlayer2[currentFramePlayer1].heigthFrame;
  var posXFramePlayer2 = framesFeaturesPlayer2[currentFramePlayer1].posX;
  var posYFramePlayer2 = framesFeaturesPlayer2[currentFramePlayer1].posY;

  var directionMovementPlayer2 = this.player2.sprite.directionMovement;
  var currentMovementPlayer2 = this.player2.sprite.currentMovement;
  var doingMovementPlayer2 = this.player2.sprite.doingMovement;

  //let's calculate the square that is occupied by player 1
  
  var posX1Player1 = posXPlayer1;
  var posX2Player1 = posXPlayer1+widthFramePlayer1;
  var posY1Player1 = posYPlayer1;
  var posY1Player1 = posYPlayer1+heightFramePlayer1;

  //let's calculate the square that is occupied by player 2
  
  var posX1Player2 = posXPlayer2;
  var posX2Player2 = posXPlayer2+widthFramePlayer2;
  var posY1Player2 = posYPlayer2;
  var posY1Player2 = posYPlayer2+heightFramePlayer2;

  // let's check if theres a collision doing only forward movement
  // we set 50px overflow to considerer collision
  // if (directionMovementPlayer1 === 'right' && directionMovementPlayer2 === 'left' && posX2Player1>posX1Player2) {
  if (posX2Player1>posX1Player2) {
    // there has been overlapping. If they are only doing movement, without beating, we stop the movement
    // if ((currentMovementPlayer1 === 0 && doingMovementPlayer1 === true)  && (currentMovementPlayer2 === 1 && doingMovementPlayer2 === true)) {
    if (currentMovementPlayer1 === 0   && currentMovementPlayer2 === 1 ) {
      //no player is hitting. we force to not make any movement
      this.player1.sprite.canMove = false;
      this.player2.sprite.canMove = false;
      // console.log("se han tocado por desplazamiento");
    }

    if (doingMovementPlayer1 === false) {
      //no player is hitting. they move to same direction or Player2 is not moving. Only player2 can move. Player1 can hit
      switch (currentMovementPlayer2) 
      {
        case 0:
          this.player2.sprite.canMove = true; 
          break;
        case 1:
          this.player2.sprite.canMove = false; 
          break;  
      }
      

      switch (currentMovementPlayer2) 
      {
        case 0: //moveRight
          console.log("el player 1 es pot moure a l'esquerra");
          this.player1.sprite.canMove = false;
          break;
        case 1: //moveLeft
          this.player1.sprite.canMove = true;
          break;
        case 2:  //jump
          this.player1.sprite.canMove = false;
          break; 
        case 3: //moveDown
          this.player1.sprite.canMove = true;
          break;
        case 4: //beat-1
          this.player1.sprite.canMove = true; 
          break; 
        case 5: //beat-2
          this.player1.sprite.canMove = true;   
          break;
        case 6: //beat-3
          this.player1.sprite.canMove = true;
          break;
        case 7: //throw object
          this.player1.sprite.canMove = false;       
      }
    }

    if (doingMovementPlayer2 === false ) {
      //no player is hitting. they move to same direction or Player2 is not moving. Only player2 can move. Player1 can hit
      switch (currentMovementPlayer1) 
      {
        case 0:
          this.player1.sprite.canMove = false; 
          break;
        case 1:
          this.player1.sprite.canMove = true; 
          break;  
      }
      

      switch (currentMovementPlayer2) 
      {
        case 0: //moveRight
          // console.log("el player 2 es pot moure a la dreta");
          this.player2.sprite.canMove = true;
          break;
        case 1: //moveLeft
          this.player2.sprite.canMove = false;
          break;
        case 2:  //jump
          this.player2.sprite.canMove = false;
          break; 
        case 3: //moveDown
          this.player2.sprite.canMove = true;
          break;
        case 4: //beat-1
          this.player2.sprite.canMove = true; 
          break; 
        case 5: //beat-2
          this.player2.sprite.canMove = true;   
          break;
        case 6: //beat-3
          this.player2.sprite.canMove = true;
          break;
        case 7: //throw object
          this.player2.sprite.canMove = false;       
      }
      
      // console.log("se han tocado por desplazamiento");
    }

    // we redraw the sprites because of overlapping
    // console.log ("el valor del currentFrame del Player 1 es:",currentFramePlayer1);
    // console.log ("el valor del currentFrame del Player 2 es:",currentFramePlayer2);
    if (doingMovementPlayer1 === false) {
      this.player1.sprite.drawSprite();
    }
    
    if (doingMovementPlayer2 === false) {
      // this.player2.sprite.drawSprite();
    }
              
  }

  if ((posX2Player1-posX1Player2)>50) {
    // if there's overlapping from more than 80px, somebody has hit, lets see who is hitting
    if ((currentMovementPlayer2 === 0 || currentMovementPlayer2 === 1 || doingMovementPlayer2 === false) && (currentMovementPlayer1 === 4 || currentMovementPlayer1 === 5 || currentMovementPlayer1 === 6)) {
      //player1 beats. We decrease life by one pixel
      this.player2.currentScore-=10; //we remove life
      
      // this.ctx.save();
      // this.ctx.translate(posXPlayer2, posYPlayer2); // change origin
      // this.ctx.rotate(Math.PI); //rotate 180º
      // this.ctx.drawImage(this.player2.configCharacter.imageSpriteFliped,posX,posY,widthFrame,heigthFrame,spritePosX,spritePosY,widthFrame,heigthFrame);
      // this.ctx.restore()
      
      // we delete player2 because has been beaten and we redraw in another position
      
      this.ctx.clearRect(5,100,viewportWidth,viewportHeight);
      // this.ctx.clearRect(posX1Player2,posY1Player2,widthFramePlayer2,heightFramePlayer2);
      
      this._drawScores(); //we draw the new remaining life
      
      //we check if scoreLife = 0
      if (!(this.player2.currentScore > 0)) {
        this.gamePlaying = !this.gamePlaying;
        this.stop();
        document.getElementById("game-over").innerHTML = "GAME OVER";
        // window.alert("GAME OVER!");
        this.restart();
      }


      this.ctx.fillStyle = 'blue';
      // this.ctx.fillRect(posX1Player2,posY1Player2,widthFramePlayer2,heightFramePlayer2);
      this.player2.sprite.currentConfigFrame = this.player2.sprite.configCharacter.restPosition;
      this.player2.sprite.currentPosition[0] = viewportWidth - 300;
      this.player1.sprite.drawSprite();
      this.player2.sprite.drawSprite(); 

      // we lay player 2 on the ground for one second or more, and then, getup again
      
      
      //we have to draw player2 lying on the floor
    }
    
    if ((currentMovementPlayer1 === 0 || currentMovementPlayer1 === 1 || doingMovementPlayer1 === false) && (currentMovementPlayer2 === 4 || currentMovementPlayer2 === 5 || currentMovementPlayer2 === 6)) {
      //player2 beats. We decrease life by one pixel
      this.player1.currentScore-=10;

      this.ctx.clearRect(5,100,viewportWidth,viewportHeight);
      // this.ctx.clearRect(posX1Player2,posY1Player2,widthFramePlayer2,heightFramePlayer2);
      this._drawScores(); //we draw the new remaining life
      
      //we check if scoreLife = 0
      if (!(this.player1.currentScore > 0)) {
        this.gamePlaying = !this.gamePlaying;
        this.stop();
        document.getElementById("game-over").innerHTML = "GAME OVER";
        // window.alert("GAME OVER!");
        
        this.restart();
      }
      
      this.ctx.fillStyle = 'blue';
      // this.ctx.fillRect(posX1Player2,posY1Player2,widthFramePlayer2,heightFramePlayer2);
      this.player1.sprite.currentConfigFrame = this.player1.sprite.configCharacter.restPosition;
      this.player1.sprite.currentPosition[0] = 0;
      this.player2.sprite.drawSprite();
      this.player1.sprite.drawSprite(); 
      //we have to draw player1 lying on the floor
    }

  }

  // if there's no overlapping of Sprites, both can move
  if (posX2Player1<posX1Player2) {
    this.player1.sprite.canMove = true;
    this.player2.sprite.canMove = true;
  }
  
  
   

}

Game.prototype.stop = function(){
  if(this.idIntervalCollision)
  {
    clearInterval(this.idIntervalCollision);
    this.idIntervalCollision = undefined;
  } 
}

Game.prototype._assignEventsToKeys = function(){
  document.onkeydown = function(e){
    // console.log("hem apretat tecla cap abaix");
    // else if (e.ctrlKey && e.which == 66) {
    // var x = event.which || event.keyCode
    // unicode: F1-17 and F12-28
  console.log("la tecla F1 es:",e.key);
  if (this.gamePlaying) {
    switch(e.key.toUpperCase())
    {
      case "W":
      if (!this.player1.sprite.doingMovement) {
        this.player1.sprite.doingMovement = true; //move back
        this.player1.goUp();
      }
      break;
      case "S":
        this.player1.goDown();
        this._detectCollision();
        this._redrawPlayers();
        this.player1.update();
      break;
      case "A":
      if (!this.player1.sprite.doingMovement) {
        this.player1.sprite.doingMovement = true; //move back
        this.player2.currentDirectionMovement = 'left';
        this.player1.goLeft();
      }
      break;
      case "D":
        console.log("¿esta haciendo movimiento?:",this.player1.sprite.doingMovement);
        if (!this.player1.sprite.doingMovement) {
          this.player1.sprite.doingMovement = true; //starting movement. If player press any key, no action should be taken
          this.player2.currentDirectionMovement = 'right';
          this.player1.goRight();
        }
        break;  
      case "C":
        if (!this.player1.sprite.doingMovement) {
        this.player1.sprite.doingMovement = true; //starting movement. If player press any key, no action should be taken
        this.player1.goLeft();
      }
      break;
      // Beat-1
      case "1":
        if (!this.player1.sprite.doingMovement) {
        this.player1.sprite.doingMovement = true; //starting movement. If player press any key, no action should be taken
        this.player1.Beat();
      }
      break;

      case "2":
        if (!this.player1.sprite.doingMovement) {
        this.player1.sprite.doingMovement = true; //starting movement. If player press any key, no action should be taken
        this.player1.Beat2();
      }
      break;

      case "3":
        if (!this.player1.sprite.doingMovement) {
        this.player1.sprite.doingMovement = true; //starting movement. If player press any key, no action should be taken
        this.player1.Beat3();
      }
      break;

      case "4":
      if (!this.player1.sprite.doingMovement) {
      this.player1.sprite.doingMovement = true; //starting movement. If player press any key, no action should be taken
      this.player1.ThrowObject();
    }
    break;
      
      case "O":
        this.player2.goUp();
        this._detectCollision();
        this._redrawPlayers();
        this.player2.update();
      break;
      case "L":
      if (!this.player2.sprite.doingMovement) {
        this.player2.sprite.doingMovement = true; //starting movement. If player press any key, no action should be taken
        this.player2.goDown();
      }  
      break;
      case "K":
      if (!this.player2.sprite.doingMovement) {
        this.player2.sprite.doingMovement = true; //starting movement. If player press any key, no action should be taken
        this.player2.currentDirectionMovement = 'left';
        this.player2.goLeft();
      }
      break;  
      
      case "Ñ":
        if (!this.player2.sprite.doingMovement) {
          this.player2.sprite.doingMovement = true; //starting movement. If player press any key, no action should be taken
          this.player2.currentDirectionMovement = 'right';
          this.player2.goRight();
      }
      break;  
     
      case "0":
        if (!this.player2.sprite.doingMovement) {
        this.player2.sprite.doingMovement = true; //starting movement. If player press any key, no action should be taken
        this.player2.Beat();
      }
      break;
      case "9":
        if (!this.player2.sprite.doingMovement) {
        this.player2.sprite.doingMovement = true; //starting movement. If player press any key, no action should be taken
        this.player2.Beat2();
      }
      break;
      case "7":
      if (!this.player2.sprite.doingMovement) {
      this.player2.sprite.doingMovement = true; //starting movement. If player press any key, no action should be taken
      this.player2.ThrowObject();
      }
      break;
    }
   
  }

  console.log("el valor de la tecla apretada es:",e.key.toUpperCase());
  console.log("quin es l'estat de GamePlaying?",this.gamePlaying);

  if (e.key.toUpperCase() == "P" )  {
    // si pulsamos la tecla ESC, paramos el juego
    this.gamePlaying = !this.gamePlaying;
    if (this.gamePlaying == false) {
      clearInterval(this.idIntervalCollision);
    } else {
      this.start();
    }
  }
  
  }.bind(this);
}

// document.onkeydown = function(evt) {
//   evt = evt || window.event;
//   var isEscape = false;
//   if ("key" in evt) {
//       isEscape = (evt.key == "Escape" || evt.key == "Esc");
//   } else {
//       isEscape = (evt.keyCode == 27);
//   }
//   if (isEscape) {
//       alert("Escape");
//   }
// };

