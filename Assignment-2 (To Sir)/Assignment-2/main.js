const game = new PIXI.Application({
    width: innerWidth,
    height: innerHeight,
    backgroundColor: 0xE06910,
  });
  
  document.getElementById("game").append(game.view);
  
  loadAssets(
    [
      { name: "back", url: "assets/cardback.png" },
      {name:"front",url:"assets/2-cardDeck.png"},
      // { name: "front", url: "assets/smilies.jpg" },
    ],
    start
  );
  
  // -------------------------------
  const pBar = document.getElementById("bar");
const pText = document.getElementById("progress");
function preload(e) {
if(e.progress===50)
 {
   pBar.style.backgroundColor = "red";
     pBar.style.width = e.progress +"%" ;
     pText.innerText = e.progress +"%" ;
     pText.style.color="black";
     pText.style.fontWeight="bold";
     pText.style.fontFamily="arial";
   setTimeout(() => {
     
 pText.innerText = e.progress +"%";
 pBar.style.width = e.progress +"%" ;
 pBar.style.backgroundColor = "darkgreen";
   }, 1000);
   

 }

 if (e.progress === 100) {
   console.log("hide loader");
   //pBar.style.backgroundColor = "red";
   
   setTimeout(() => {
     pBar.style.width = e.progress +"%" ;
     pBar.style.backgroundColor = "red";
     document.getElementById("loader").style.display = "none";
   },  2000);

  }
}
  
  function loadAssets(list, onLoadComplete) {
    game.loader.onProgress.add(preload);
    game.loader.add(list).load(onLoadComplete);
  }
  
  function start(loader, resources) {
    console.log("params ", arguments);
  
    var d = 80;
    for (var i = 0; i < 5; i++) {
      const back = PIXI.Sprite.from(resources["back"].texture);
      back.scale.set(0.12);
      back.x = d;
      back.y = 100;
      // game.stage.addChild(back);
      d = d + 250;
    }
    var x = 0;
    var y = 0;
    var e = 80;
    for (var i = 0; i < 5; i++) {
      const card = new PIXI.Texture(
        resources["front"].texture,
        new PIXI.Rectangle(2,2,77,106) 
        // new PIXI.Rectangle(0, 0, 125, 181)
      );
      const front = PIXI.Sprite.from(card);
      front.scale.set(1.7);
      front.x = e;
      front.y = 100;
      game.stage.addChild(front);
      e = e + 250;
      x += 125;
      y += 181;
    }
    var d = 80;
    for (var i = 0; i < 5; i++) {
      const back = PIXI.Sprite.from(resources["back"].texture);
      back.scale.set(0.12);
      back.x = d;
      back.y = 360;
      // game.stage.addChild(back);
      d = d + 250;
    }
    var x = 0;
    var y = 0;
    var e = 80;
    for (var i = 0; i < 5; i++) {
      const card = new PIXI.Texture(
        resources["front"].texture,
        new PIXI.Rectangle(2,2,77,106)
        // new PIXI.Rectangle(0,0,125,181)
      );
      const front = PIXI.Sprite.from(card);
      front.scale.set(1.7);
      front.x = e;
      front.y = 360;
      game.stage.addChild(front);
      e = e + 250;
      x += 125;
      y += 181;
    }
  }