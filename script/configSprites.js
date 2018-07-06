// This documents define the features of each character
// Image of character is loaded in file imagesSprites.js
// In this file we specify the position of each frame, identifying by a code
// and the sequence of frames to show in order to make different actions: normal, jumping, attack, defense

var configRedHulk = {
  imageSprite: redHulk,
  imageSpriteFliped: redHulkFliped,
  rowsSprite: 4, // number of rows of sprite
  colsSprite: 5, // number of cols of sprite
  widthPixel: 2000, // width image in pixels
  heigthPixel: 1550, //height of image in pixels
  restPosition: 13,
  framesFeatures: [{
    numberFrame: 0,
    row:1, //row of the sprite. To identify the image inside the sprite
    col:3, // col of the sprite. To identify the image inside the sprite
    posX:750,
    posY:0,
    widthFrame: 500,
    heigthFrame: 300
  },
  {
    numberFrame: 1,
    row:1, //row of the sprite. To identify the image inside the sprite
    col:1, // col of the sprite. To identify the image inside the sprite
    posX:30,
    posY:30,
    widthFrame: 250,
    heigthFrame: 240
  },
  { 
    numberFrame: 2,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:7, // col of the sprite. To identify the image inside the sprite
    posX:1755,
    posY:455,
    widthFrame: 220,
    heigthFrame: 240
  },
  { 
    numberFrame: 3,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:6, // col of the sprite. To identify the image inside the sprite
    posX:1465,
    posY:465,
    widthFrame: 240,
    heigthFrame: 230
  },
  { 
    numberFrame: 4,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:1140,
    posY:455,
    widthFrame: 300,
    heigthFrame: 240
  },
  { 
    numberFrame: 5,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:880,
    posY:350,
    widthFrame: 240,
    heigthFrame: 340
  },
  { 
    numberFrame: 6,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:3, // col of the sprite. To identify the image inside the sprite
    posX:560,
    posY:435,
    widthFrame: 300,
    heigthFrame: 260
  },
  { 
    numberFrame: 7,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:2, // col of the sprite. To identify the image inside the sprite
    posX:260,
    posY:390,
    widthFrame: 270,
    heigthFrame: 300
  },
  { 
    numberFrame: 8,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:1, // col of the sprite. To identify the image inside the sprite
    posX:10,
    posY:480,
    widthFrame: 230,
    heigthFrame: 210 
  },
  { 
    numberFrame: 9,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:1540,
    posY:880,
    widthFrame: 390,
    heigthFrame: 230
  },
  { 
    numberFrame: 10,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:1160,
    posY:730,
    widthFrame: 350,
    heigthFrame: 380            
  },  
  { 
    numberFrame: 11,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:3, // col of the sprite. To identify the image inside the sprite
    posX:880,
    posY:720,
    widthFrame: 250,
    heigthFrame: 400 
  },
  { 
    numberFrame: 12,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:2, // col of the sprite. To identify the image inside the sprite
    posX:470,
    posY:700,
    widthFrame: 390,
    heigthFrame: 420  
  },
  { 
    numberFrame: 13,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:1, // col of the sprite. To identify the image inside the sprite
    posX:60,
    posY:780,
    widthFrame: 220,
    heigthFrame: 330
  },      
  { 
    numberFrame: 14,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:1620,
    posY:1270,
    widthFrame: 280,
    heigthFrame: 270  
  },
  { 
    numberFrame: 15,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:1185,
    posY:1265,
    widthFrame: 260,
    heigthFrame: 270 
  },
  { 
    numberFrame: 16,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:3, // col of the sprite. To identify the image inside the sprite
    posX:775,
    posY:1370,
    widthFrame: 270,
    heigthFrame: 170   
  },
  { 
    numberFrame: 17,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:2, // col of the sprite. To identify the image inside the sprite
    posX:490,
    posY:1300,
    widthFrame: 265,
    heigthFrame: 240
  },
  { 
    numberFrame: 18,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:1, // col of the sprite. To identify the image inside the sprite
    posX:40,
    posY:1260,
    widthFrame: 210,
    heigthFrame: 280
  },
  { 
    numberFrame: 19, // es el missil
    row:3, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:40,
    posY:1130,
    widthFrame: 360,
    heigthFrame: 110          
  
  }],

  framesFeaturesFliped: [{
    numberFrame: 0,
    row:1, //row of the sprite. To identify the image inside the sprite
    col:3, // col of the sprite. To identify the image inside the sprite
    posX:800,
    posY:0,
    widthFrame: 500,
    heigthFrame: 300
  },
  {
    numberFrame: 1,
    row:1, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:1730,
    posY:30,
    widthFrame: 250,
    heigthFrame: 240
  },
  { 
    numberFrame: 2,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:1, // col of the sprite. To identify the image inside the sprite
    posX:20,
    posY:450,
    widthFrame: 230,
    heigthFrame: 250
  },
  { 
    numberFrame: 3,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:2, // col of the sprite. To identify the image inside the sprite
    posX:290,
    posY:460,
    widthFrame: 255,
    heigthFrame: 235
  },
  { 
    numberFrame: 4,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:3, // col of the sprite. To identify the image inside the sprite
    posX:570,
    posY:455,
    widthFrame: 295,
    heigthFrame: 240
  },
  { 
    numberFrame: 5,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:880,
    posY:350,
    widthFrame: 245,
    heigthFrame: 345
  },
  { 
    numberFrame: 6,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:1140,
    posY:440,
    widthFrame: 300,
    heigthFrame: 250
  },
  { 
    numberFrame: 7,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:6, // col of the sprite. To identify the image inside the sprite
    posX:1460,
    posY:390,
    widthFrame: 280,
    heigthFrame: 300
  },
  { 
    numberFrame: 8,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:7, // col of the sprite. To identify the image inside the sprite
    posX:1740,
    posY:470,
    widthFrame: 250,
    heigthFrame: 220 
  },
  { 
    numberFrame: 9,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:1, // col of the sprite. To identify the image inside the sprite
    posX:70,
    posY:880,
    widthFrame: 390,
    heigthFrame: 230
  },
  { 
    numberFrame: 10,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:2, // col of the sprite. To identify the image inside the sprite
    posX:490,
    posY:720,
    widthFrame: 350,
    heigthFrame: 395
  },
  { 
    numberFrame: 11,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:3, // col of the sprite. To identify the image inside the sprite
    posX:870,
    posY:710,
    widthFrame: 250,
    heigthFrame: 410 
  },
  { 
    numberFrame: 12,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:1140,
    posY:920,
    widthFrame: 430,
    heigthFrame: 200  
  },
  { 
    numberFrame: 13,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:1720,
    posY:870,
    widthFrame: 220,
    heigthFrame: 240
  },
  { 
    numberFrame: 14,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:1, // col of the sprite. To identify the image inside the sprite
    posX:90,
    posY:1270,
    widthFrame: 290,
    heigthFrame: 270  
  },
  { 
    numberFrame: 15,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:2, // col of the sprite. To identify the image inside the sprite
    posX:555,
    posY:1265,
    widthFrame: 255,
    heigthFrame: 270 
  },
  { 
    numberFrame: 16,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:3, // col of the sprite. To identify the image inside the sprite
    posX:950,
    posY:1370,
    widthFrame: 280,
    heigthFrame: 170   
  },
  { 
    numberFrame: 17,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:1250,
    posY:1300,
    widthFrame: 260,
    heigthFrame: 240
  },
  { 
    numberFrame: 18,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:1750,
    posY:1260,
    widthFrame: 210,
    heigthFrame: 280
  },
  { 
    numberFrame: 19, // es el missil
    row:3, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:1590,
    posY:1120,
    widthFrame: 360,
    heigthFrame: 110                                          
  }],
  movements: [{
    name: 'moveRight',
    available: true,
    repeatAction: false,
    frameSpeed: 15, // number of frames to show during the Time Interval
    speedMovementUp: 0,
    speedMovement: 150, //pixels per seconds to advance
    timeMovementInterval: 200, // time duration of movement in miliseconds
    frames: [13,13]
  },
  {
    name: 'moveLeft',
    available: true,
    repeatAction: false,
    frameSpeed: 15,
    speedMovementUp: 0,
    speedMovement: 150, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 200, // time duration of movement in miliseconds
    frames: [13,13]
  },
  {
    name: 'jump',
    available: false,
    repeatAction: false,
    frameSpeed: 9,
    speedMovementUp: 350,
    speedMovement: 200, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 2000, // time duration of movement in miliseconds
    frames: [2,7,7,7,15,5,5,4,4] //the number of frames has to be an odd number
  },
  {
    name: 'moveDown',
    available: true,
    repeatAction: false,
    frameSpeed: 5,
    speedMovementUp: 0,
    speedMovement: 0, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 1500, // time duration of movement in miliseconds
    frames: [13,16,16,16,16]
  },
  {
    name: 'beat',
    available: true,
    repeatAction: false,
    frameSpeed: 7,
    speedMovementUp: 0,
    speedMovement: 50, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 1000, // time duration of movement in miliseconds
    frames: [2,5,4,5,4,5,4,2]
  },
  {
    name: 'beat2',
    available: true,
    repeatAction: false,
    frameSpeed: 6,
    speedMovementUp: 0,
    speedMovement: 50, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 1000, // time duration of movement in miliseconds
    frames: [13,7,6,5,4,5,4,13,13]
  },
  {
    name: 'beat3',
    available: true,
    repeatAction: false,
    frameSpeed: 6,
    speedMovementUp: 0,
    speedMovement: 50, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 1500, // time duration of movement in miliseconds
    frames: [12,13,14]
  },
  {
    name: 'throwObject',
    available: true,
    repeatAction: false,
    frameSpeed: 10,
    speedMovementUp: 0,
    speedMovement: 30, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 3000, // time duration of movement in miliseconds
    frames: [13,12,12,11,10,10,9,9,9,9]
  }],
  objects: [{
    frames: [19,-1,-1,-1,-1,-1,19,19,19,19],
    speed: 30, //  pixels per second. The object has to move until gets out the viewport or there's collision
    relativePosition: [
    {
      numberFrame: 0,
      incrementPosX: 100,
      incrementPosY: 200
    },
    {
      numberFrame: 1,
      incrementPosX: 100,
      incrementPosY: 260
    }, 
    {
      numberFrame: 2,
      incrementPosX: 100,
      incrementPosY: 270
    },  
      {
        numberFrame: 3,
        incrementPosX: 0,
        incrementPosY: -50
    },  
      {
        numberFrame: 4,
        incrementPosX: 0,
        incrementPosY: -50
      },  
      {
        numberFrame: 5,
        incrementPosX: 0,
        incrementPosY: -50
      },  
      {
        numberFrame: 6,
        incrementPosX: 320,
        incrementPosY: 0
      },  
      {
        numberFrame: 7,
        incrementPosX: 620,
        incrementPosY: 0
      },  
      {
        numberFrame: 8,
        incrementPosX: 920,
        incrementPosY: 0
      },  
      {
        numberFrame: 9,
        incrementPosX: 1120,
        incrementPosY: 0
               
                       
    }]
  }]  
}


var configGreenHulk2 = {
  imageSprite: greenHulk2,
  imageSpriteFliped: greenHulk2Fliped,
  rowsSprite: 4, // number of rows of sprite
  colsSprite: 9, // number of cols of sprite
  widthPixel: 2465, // width image in pixels
  heigthPixel: 1387, //height of image in pixels
  restPosition: 19,
  framesFeatures: [{
    numberFrame: 0,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:1, // col of the sprite. To identify the image inside the sprite
    posX:0,
    posY:1170,
    widthFrame: 220,
    heigthFrame: 150
  },
  {
    numberFrame: 1,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:2, // col of the sprite. To identify the image inside the sprite
    posX:220,
    posY:1130,
    widthFrame: 240,
    heigthFrame: 220
  },
  {
    numberFrame: 2,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:3, // col of the sprite. To identify the image inside the sprite
    posX:470,
    posY:1170,
    widthFrame: 250,
    heigthFrame: 180
  },
  {
    numberFrame: 3,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:730,
    posY:1000,
    widthFrame: 255,
    heigthFrame: 360
  },
  {
    numberFrame: 4,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:990,
    posY:1000,
    widthFrame: 255,
    heigthFrame: 360
  },
  {
    numberFrame: 5,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:6, // col of the sprite. To identify the image inside the sprite
    posX:1245,
    posY:1000,
    widthFrame: 255,
    heigthFrame: 360
  },
  {
    numberFrame: 6,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:7, // col of the sprite. To identify the image inside the sprite
    posX:1500,
    posY:1160,
    widthFrame: 325,
    heigthFrame: 190
  },
  {
    numberFrame: 7,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:8, // col of the sprite. To identify the image inside the sprite
    posX:1825,
    posY:1160,
    widthFrame: 315,
    heigthFrame: 190
  },
  {
    numberFrame: 8,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:9, // col of the sprite. To identify the image inside the sprite
    posX:2150,
    posY:1160,
    widthFrame: 315,
    heigthFrame: 190 
  },
  {
    numberFrame: 9,
    row:1, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:980,
    posY:110,
    widthFrame: 225,
    heigthFrame: 230
  },
  {
    numberFrame: 10,
    row:1, //row of the sprite. To identify the image inside the sprite
    col:6, // col of the sprite. To identify the image inside the sprite
    posX:1480,
    posY:90,
    widthFrame: 260,
    heigthFrame: 255  
  },
  {
    numberFrame: 11,
    row:1, //row of the sprite. To identify the image inside the sprite
    col:7, // col of the sprite. To identify the image inside the sprite
    posX:1770,
    posY:20,
    widthFrame: 195,
    heigthFrame: 320 
  },
  {
    numberFrame: 12,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:3, // col of the sprite. To identify the image inside the sprite
    posX:1220,
    posY:370,
    widthFrame: 270,
    heigthFrame: 280
  },
  {
    numberFrame: 13,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:1500,
    posY:440,
    widthFrame: 345,
    heigthFrame: 210 
  },
  {
    numberFrame: 14,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:1995,
    posY:370,
    widthFrame: 220,
    heigthFrame: 270 
  },
  {
    numberFrame: 15,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:1, // col of the sprite. To identify the image inside the sprite
    posX:0,
    posY:750,
    widthFrame: 270,
    heigthFrame: 250
  },
  {
    numberFrame: 16,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:2, // col of the sprite. To identify the image inside the sprite
    posX:670,
    posY:770,
    widthFrame: 270,
    heigthFrame: 225 
  },
  {
    numberFrame: 17,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:1600,
    posY:680,
    widthFrame: 185,
    heigthFrame: 315 
  },
  {
    numberFrame: 18,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:7, // col of the sprite. To identify the image inside the sprite
    posX:2120,
    posY:840,
    widthFrame: 300,
    heigthFrame: 150
  },
  {
    numberFrame: 19,
    row:1, //row of the sprite. To identify the image inside the sprite
    col:1, // col of the sprite. To identify the image inside the sprite
    posX:0,
    posY:5,
    widthFrame: 275,
    heigthFrame: 270                             
  }],
  framesFeaturesFliped: [{
    numberFrame: 0,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:1, // col of the sprite. To identify the image inside the sprite
    posX:0,
    posY:1170,
    widthFrame: 220,
    heigthFrame: 150
  },
  {
    numberFrame: 1,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:2, // col of the sprite. To identify the image inside the sprite
    posX:220,
    posY:1000,
    widthFrame: 250,
    heigthFrame: 360
  },
  {
    numberFrame: 2,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:3, // col of the sprite. To identify the image inside the sprite
    posX:470,
    posY:1000,
    widthFrame: 260,
    heigthFrame: 360
  },
  {
    numberFrame: 3,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:730,
    posY:1000,
    widthFrame: 255,
    heigthFrame: 360
  },
  {
    numberFrame: 4,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:990,
    posY:1000,
    widthFrame: 255,
    heigthFrame: 360
  },
  {
    numberFrame: 5,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:6, // col of the sprite. To identify the image inside the sprite
    posX:1245,
    posY:1000,
    widthFrame: 255,
    heigthFrame: 360
  },
  {
    numberFrame: 6,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:7, // col of the sprite. To identify the image inside the sprite
    posX:1500,
    posY:1000,
    widthFrame: 325,
    heigthFrame: 360
  },
  {
    numberFrame: 7,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:8, // col of the sprite. To identify the image inside the sprite
    posX:1825,
    posY:1000,
    widthFrame: 325,
    heigthFrame: 360
  },
  {
    numberFrame: 8,
    row:4, //row of the sprite. To identify the image inside the sprite
    col:9, // col of the sprite. To identify the image inside the sprite
    posX:2150,
    posY:1000,
    widthFrame: 325,
    heigthFrame: 360 
  },
  {
    numberFrame: 9,
    row:1, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:960,
    posY:0,
    widthFrame: 270,
    heigthFrame: 360
  },
  {
    numberFrame: 10,
    row:1, //row of the sprite. To identify the image inside the sprite
    col:6, // col of the sprite. To identify the image inside the sprite
    posX:1500,
    posY:0,
    widthFrame: 250,
    heigthFrame: 360  
  },
  {
    numberFrame: 11,
    row:1, //row of the sprite. To identify the image inside the sprite
    col:7, // col of the sprite. To identify the image inside the sprite
    posX:1750,
    posY:0,
    widthFrame: 250,
    heigthFrame: 360 
  },
  {
    numberFrame: 12,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:3, // col of the sprite. To identify the image inside the sprite
    posX:1220,
    posY:360,
    widthFrame: 280,
    heigthFrame: 300
  },
  {
    numberFrame: 13,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:4, // col of the sprite. To identify the image inside the sprite
    posX:1490,
    posY:360,
    widthFrame: 360,
    heigthFrame: 300 
  },
  {
    numberFrame: 14,
    row:2, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:1900,
    posY:360,
    widthFrame: 320,
    heigthFrame: 300 
  },
  {
    numberFrame: 15,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:7, // col of the sprite. To identify the image inside the sprite
    posX:2200,
    posY:750,
    widthFrame: 270,
    heigthFrame: 250
  },
  {
    numberFrame: 16,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:2, // col of the sprite. To identify the image inside the sprite
    posX:670,
    posY:750,
    widthFrame: 270,
    heigthFrame: 250 
  },
  {
    numberFrame: 17,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:5, // col of the sprite. To identify the image inside the sprite
    posX:1600,
    posY:650,
    widthFrame: 230,
    heigthFrame: 350 
  },
  {
    numberFrame: 18,
    row:3, //row of the sprite. To identify the image inside the sprite
    col:7, // col of the sprite. To identify the image inside the sprite
    posX:2120,
    posY:750,
    widthFrame: 320,
    heigthFrame: 250
  },
  {
    numberFrame: 19,
    row:1, //row of the sprite. To identify the image inside the sprite
    col:8, // col of the sprite. To identify the image inside the sprite
    posX:2190,
    posY:0,
    widthFrame: 300,
    heigthFrame: 280                             
  }],
  movements: [{
    name: 'moveRight',
    available: true,
    repeatAction: false,
    frameSpeed: 15, // number of frames to show during the Time Interval
    speedMovementUp: 0,
    speedMovement: 150, //pixels per seconds to advance
    timeMovementInterval: 200, // time duration of movement in miliseconds
    frames: [19,19]
  },
  {
    name: 'moveLeft',
    available: true,
    repeatAction: false,
    frameSpeed: 15,
    speedMovementUp: 0,
    speedMovement: 150, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 200, // time duration of movement in miliseconds
    frames: [19,19]
  },
  {
    name: 'jump',
    available: false,
    repeatAction: false,
    frameSpeed: 7,
    speedMovementUp: 250,
    speedMovement: 200, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 2000, // time duration of movement in miliseconds
    frames: [15,17,17,12,17,18,18] //the number of frames has to be an odd number
  },
  {
    name: 'moveDown',
    available: true,
    repeatAction: false,
    frameSpeed: 2,
    speedMovementUp: 0,
    speedMovement: 30, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 1000, // time duration of movement in miliseconds
    frames: [1,2]
  },
  {
    name: 'beat',
    available: true,
    repeatAction: false,
    frameSpeed: 6,
    speedMovementUp: 0,
    speedMovement: 50, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 1000, // time duration of movement in miliseconds
    frames: [16,17,18]
  },
  {
    name: 'beat2',
    available: true,
    repeatAction: false,
    frameSpeed: 6,
    speedMovementUp: 0,
    speedMovement: 50, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 1500, // time duration of movement in miliseconds
    frames: [9,10,11]
  },
  {
    name: 'beat3',
    available: true,
    repeatAction: false,
    frameSpeed: 6,
    speedMovementUp: 0,
    speedMovement: 50, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 1500, // time duration of movement in miliseconds
    frames: [12,13,14]
  },
  {
    name: 'throwObject',
    available: true,
    repeatAction: false,
    frameSpeed: 12,
    speedMovementUp: 0,
    speedMovement: 30, //pixels to advance during the timeMovementInterval
    timeMovementInterval: 3000, // time duration of movement in miliseconds
    frames: [19,1,2,3,4,5,6,7,8,12,12,12]
  }],
  objects: [{
    frames: [0,0,0,0,0,0,0,0,0,0,0,0],
    speed: 30, //  pixels per second. The object has to move until gets out the viewport or there's collision
    relativePosition: [
    {
      numberFrame: 0,
      incrementPosX: 100,
      incrementPosY: 200
    },
    {
      numberFrame: 1,
      incrementPosX: 100,
      incrementPosY: 260
    }, 
    {
      numberFrame: 2,
      incrementPosX: 100,
      incrementPosY: 270
    },  
      {
        numberFrame: 3,
        incrementPosX: 0,
        incrementPosY: -50
    },  
      {
        numberFrame: 4,
        incrementPosX: 0,
        incrementPosY: -50
      },  
      {
        numberFrame: 5,
        incrementPosX: 0,
        incrementPosY: -50
      },  
      {
        numberFrame: 6,
        incrementPosX: 320,
        incrementPosY: 0
      },  
      {
        numberFrame: 7,
        incrementPosX: 620,
        incrementPosY: 0
      },  
      {
        numberFrame: 8,
        incrementPosX: 920,
        incrementPosY: 0
      },  
      {
        numberFrame: 9,
        incrementPosX: 1120,
        incrementPosY: 0
      },  
      {
        numberFrame: 10,
        incrementPosX: 1250,
        incrementPosY: 0
      },  
      {
        numberFrame: 11,
        incrementPosX: 1350,
        incrementPosY: 0                   
                       
    }]
  }]
}
