
// const game = new PIXI.Application({
//     width: 800,
//     height: 600,
//     backgroundColor: 0x3366FF,
//     // canvas:document.getElementById('game')
// });
// console.log('hello!', game);
// document.getElementById('game').append(game.view);

// loadAssets([
//     { name: 'back', url: '/assets/cardback.png' },
//     // {name:'front',url:'/assets/smilies.png'}
// ], start)


// ////////////////////////////////////////////////////////////////

// const pBar = document.getElementById('bar');
// const pText = document.getElementById('progress');

// function preload(e) {
//     pBar.style.width = e.progress * 2 + "%";
//     pText.innerText = e.progress + "%";
//     if (e.progress === 100) {
//         console.log('hide loader');
//         setTimeout(() => {
//             document.getElementById('loader').style.display = "none";
//         }, 2000);
//         document.getElementById('loader').style.display = 'none';
//     }
//     console.log(e.progress);
// }

// function loadAssets(list, onLoadComplete) {
//     game.loader.onProgress.add(preload);
//     game.loader.add(list).load(onLoadComplete);
// }


// function start(loader, resources) {
//     console.log('params', arguments);
//     const back = PIXI.Sprite.from(resources['back'].texture);
//     back.scale.set(0.2);
//     game.stage.addChild(back);

//     const smily = new PIXI.Texture (resources['front'],)

//     const front = PIXI.Sprite.from(resources['front'].texture);
//     back.scale.set(0.2);
//     game.stage.addChild(front);
// }


const game = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x3366ff,
  });
  document.getElementById("game").append(game.view);
  loadAssets([
    { name: "back", url: "/assets/.png" },
    { name: "front", url: "assets/cards.png" },
  ], start);
  //------------------------------
  const pBar = document.getElementById("bar");
  const pText = document.getElementById("progress");
  function preload(e) {
    pBar.style.width = e.progress * 2 + "%";
    pText.innerText = e.progress + "%";
    if (e.progress === 100) {
      console.log("hide loader");
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
      }, 500);
    }
    console.log(e.progress);
  }
  
  function loadAssets(list, onLoadComplete) {
    game.loader.onProgress.add(preload);
    game.loader.add(list).load(onLoadComplete);
  }
  //----------------------------------
  function start(loader, resources) {
      console.log('params ', arguments);
      const back = PIXI.Sprite.from(resources['back'].texture);
      back.scale.set(0.2);
      game.stage.addChild(back);
      const smily = new PIXI.Texture(resources['front'].texture,
      new PIXI.Rectangle(0,0,150,150));
      const front = PIXI.Sprite.from(smily);
      // front.scale.set(0.2);
      game.stage.addChild(front);
  }