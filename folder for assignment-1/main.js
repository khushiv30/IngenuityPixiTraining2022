// console.log('pixi', PIXI);
// const game = new PIXI.Application({
//     width: innerWidth,
//     height: innerHeight,
//     backgroundColor: 0xff0000
// });
// console.log('pixi instance', game);
// // document.body.appendChild(game.view);

// const hello = new PIXI.Text('Scenario of a Sunny Day!!');
// hello.x = innerWidth / 2;
// hello.y = 40;
// // hello.y = innerHeight/2;
// hello.anchor.set(0.5);
// // game.stage.addChild(hello);

// game.loader.add('car', 'https://cdn.pixabay.com/photo/2016/03/31/21/27/bicycle-1296435__340.png').load(
//     () => {
//         document.body.appendChild(game.view);

//         const bg = PIXI.Sprite.from('https://media.istockphoto.com/vectors/straight-empty-road-through-the-countryside-on-city-background-green-vector-id1185199335?b=1&k=20&m=1185199335&s=170667a&w=0&h=6aKVlEVTQfadvxJpO2YREAlYeFg9bdhV0JT7PPpRPlY=');
//         bg.height = innerHeight;
//         bg.width = innerWidth;
//         game.stage.addChild(bg);

//         const car = PIXI.Sprite.from('car');
//         car.height = 200;
//         car.width = 200;
//         car.x = 500;
//         car.y = 400;
//         game.stage.addChild(car);

//         // const clouds = PIXI.Sprite.from('https://cdn.pixabay.com/photo/2012/04/18/13/22/cloud-37011_960_720.png');
//         // clouds.height=150;
//         // clouds.width=150;
//         // clouds.x=100;
//         // clouds.y=10;

//         // game.stage.addChild(clouds);

//         const sun = PIXI.Sprite.from('../sun.png');
//         sun.height = 200;
//         sun.width = 200;
//         sun.x = 1000;
//         sun.y = 40;
//         game.stage.addChild(sun);

//         const cloud = PIXI.Sprite.from('https://cdn.pixabay.com/photo/2014/04/02/10/14/cloud-303181__340.png');
//         cloud.height = 120;
//         cloud.width = 170;
//         cloud.x = 1100;
//         cloud.y = 110;
//         game.stage.addChild(cloud);

//         const think = PIXI.Sprite.from('https://cdn.pixabay.com/photo/2014/04/02/10/56/cloud-304979__340.png');
//         think.height = 150;
//         think.width = 220;
//         think.x = 650;
//         think.y = 260;
//         game.stage.addChild(think);

//         const txt2 = new PIXI.Text('Too Hot Today!');
//         txt2.x = 670;
//         txt2.y = 310;
//         game.stage.addChild(txt2);

//         game.stage.addChild(hello);
//     }
// );

// let pDiv = document.getElementById('progress');
// game.loader.onProgress.add((e) => {
//     console.log('loaded', e.progress);
//     pDiv.style.width = e.progress + "%";
//     if (e.progress === 100) {
//         pDiv.style.width = 0;
//     }
// })

//             // PIXI.loader






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const game = new PIXI.Application({
  // width: 800,
  // height: 600,
  width:innerWidth,
  height:innerHeight,
  // backgroundColor: 0x3366ff,
  
});
document.getElementById("game").append(game.view);
loadAssets([
  {name :"background",url:"assets/bg.jpg"},
  // { name: "back", url: "assets/cardback.png" },
  {name: "sun", url: "assets/sun.png" },
  {name : "clouds",url:"assets/cloud.webp"},
  {name:"cycle",url:"assets/bicycle.webp"},
], start);
//------------------------------
const pBar = document.getElementById("bar");
const pText = document.getElementById("progress");
function preload(e) {
  // pBar.style.width = e.progress * 2 + "%";
  // pText.innerText = e.progress + "%";
  // console.log(e.progress);
  // if (e.progress === 100) {
  //  // console.log("hide loader");
  //   setTimeout(() => {
  //     document.getElementById("loader").style.display = "none";
  //   }, 500);
  // }
 // console.log(e.progress);

 if(e.progress===50)
 {
   pBar.style.backgroundColor = "red";
     pBar.style.width = e.progress +"%" ;
     pText.innerText = e.progress +"%" ;
     pText.style.color="black";
     pText.style.fontWeight="bold";
     pText.style.fontFamily="arial";
   console.log('hello bro');
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
//----------------------------------
function start(loader, resources) {
    console.log('params ', arguments);
    const back = PIXI.Sprite.from(resources['background'].texture);
    back.width=innerWidth;
    back.height=innerHeight;
    // back.scale.set(0.2);
    game.stage.addChild(back);
    //const bg = PIXI.Sprite.from(resources['background'].texture);
   // bg.scale.set(0.2);
   // game.stage.addChild(bg);
    // const smily = new PIXI.Texture(resources['sun'].texture,
    // // new PIXI.Rectangle(0,0,150,150));
    // const sun2 = PIXI.Sprite.from(smily);
    // // front.scale.set(0.2);
    // game.stage.addChild(front);

    const sunny = PIXI.Sprite.from(resources['sun'].texture);
    game.stage.addChild(sunny);
    sunny.scale.set(0.6);
    sunny.x=800;
    sunny.y=30;

    const cl = PIXI.Sprite.from(resources['clouds'].texture);
    game.stage.addChild(cl);
    cl.scale.set(0.4);
    cl.x=870;
    cl.y=130;

    const cyc = PIXI.Sprite.from(resources['cycle'].texture);
    game.stage.addChild(cyc);
    cyc.scale.set(0.5);
    cyc.x=500;
    cyc.y=430;


    var a=new PIXI.Text("Sunny Day!");
    game.stage.addChild(a);
    a.x=600;
}
