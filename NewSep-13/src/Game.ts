import {Application, Sprite,Text} from 'pixi.js';
import * as PIXI from 'pixi.js'

import {gsap} from 'gsap';
export class Game extends Application{
    private spin:boolean;
    private sliceAngle = 360/12;
    constructor(opts:any) {
        super(opts);
        this.preload([
            {name:'wheel', url:'assets/my_wheel.png'},
            {name:'triangle',url:'assets/arrow-1.webp'},
        ],this.onLoad.bind(this));
    }
    preload(list:any[], cb:()=>{}):void {
        this.loader.add(list);
        this.loader.load(cb);
    }
    onLoad():void {
        const wheel = new Sprite(this.loader.resources['wheel'].texture);
        wheel.anchor.set(0.5);
        wheel.scale.set(1.1);
        wheel.x = this.screen.width/2;
        wheel.y = this.screen.height/2;
        this.stage.addChild(wheel);
        wheel.interactive = true;
        wheel.buttonMode = true;
        console.log(this.stage);
        wheel.on('pointerup', ()=>{
            let random = Math.floor(Math.random()*12);
            console.log(random);
            let stopAngle = random * this.sliceAngle;
            gsap.fromTo(wheel,{angle:0},{angle:3600+stopAngle, duration:5, ease:'expo.out'});

            const myTimeout = setTimeout(myStopFunction.bind(this),5000);

            function myStopFunction():void{
                var i=0;
                var arr :number[] = [1,12,11,10,9,8,7,6,5,4,3,2];
                let finalMessage = new PIXI.Text("YOU WON "+arr[random]);

                i++;
                finalMessage.x=innerWidth/2;
                finalMessage.y=innerHeight/2;
                finalMessage.anchor.set(0.5);
                finalMessage.style.fontFamily="arial";
                finalMessage.style.fontWeight="bold";
                finalMessage.style.fontSize="100px";
                this.stage.addChild(finalMessage);

                console.log(arr[random]);
                setTimeout(display,3000);

                function display():void{
                    finalMessage.visible=false;
                }
            }
        });

        const point = new Sprite(this.loader.resources['triangle'].texture);
        point.scale.set(0.4);
        this.stage.addChild(point);
        point.x=690;
        point.y=5;
    }
}
