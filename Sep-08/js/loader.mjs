const pBar = document.getElementById("bar");
const pText = document.getElementById("progress");
export let resources;
function preload(e) {
  // pBar.style.width = e.progress * 2 + "%";
  // pText.innerText = e.progress + "%";
  // if (e.progress === 100) {
  //   console.log("hide loader");
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

function setResources(loader, resList) {
    console.log('setting resources');
    resources = resList;
}

export function loadAssets(app, list, onLoadComplete) {
  app.loader.onProgress.add(preload);
  app.loader.onComplete.add(setResources)
  app.loader.add(list).load(onLoadComplete);
}

export function getResourceById(id) {
    return resources[id];
}

export function getTextureById(id) {
    return resources[id].texture;
}

