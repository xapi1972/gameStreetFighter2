var starttime;
var viewportHeight = $(window).height()-40;  // we wwant the sprites appear 40px from the bottom
var viewportWidth = $(window).width()

window.onload = function(){
    var canvas = document.getElementById('streetfighter');
    var ctx = canvas.getContext('2d');

    // canvas.width = viewportWidth;
    // canvas.height = viewportHeight;


    // canvas.style.background = "url('images/homs_ciudad_destrozada.jpeg')";

    // var player11 = new Player(ctx,'RedHulk',configRedHulk);
    // console.log("el nombre del nuevo jugador es: ",player11.nameCharacter);

    var game = new Game(ctx,'GreenHulk',configGreenHulk2,'right','RedHulk',configRedHulk,'right');
    
    // game.player1.sprite.render(8);
    
    

    game._drawPlayers();
    game._drawScores();
    game.start();
    
    // var path = "https://www.spriters-resource.com/resources/sheets/45/48389.png";
    // var frameWidth = 213;
    // var frameHeight = 204;

    // var sprite1 = new SpriteSheetMarvel(path,frameWidth,frameHeight,ctx,redHulk,'redHulk',configRedHulk);
    // var sprite = new SpritesheetMarvel({
    //   path: 'https://www.spriters-resource.com/resources/sheets/45/48389.png',
    //   frameWidth: 213,
    //   frameHeight: 204,
    //   ctx: ctx
    // });

//    var img1 = new Image();
//         img1.onload = function(){
//             sprite1.updateFrame();
//          }; 
//         img1.src = "https://www.spriters-resource.com/resources/sheets/45/48389.png";

        // sprite1.updateFrame();

    // console.log("la posX es:",sprite1.configCharacter.framesFeatures[0].posX);
    // console.log("la posY es:",sprite1.configCharacter.framesFeatures[0].posY);
    // console.log("el widthFrame es:",sprite1.configCharacter.framesFeatures[0].widthFrame);
    // console.log("el heightFrame es:",sprite1.configCharacter.framesFeatures[0].heigthFrame);

    // sprite1.render();
    
    // starttime = Date.now();
    // window.requestAnimationFrame(sprite1.updateFrame());
    // sprite1.render(0);  // we pass the position of Red Hulk that is in Rest

}