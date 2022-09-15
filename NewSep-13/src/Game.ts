import {Application, Sprite} from 'pixi.js';
import {gsap} from 'gsap';
export class Game extends Application{
    private spin:boolean;
    private sliceAngle = 360/12;
    constructor(opts:any) {
        super(opts);
        this.preload([
            {name:'wheel', url:'assets/my_wheel.png'},
            {name:'triangle',url:'assets/triangle.png'},
        ], this.onLoad.bind(this));
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
        });

        const point = new Sprite(this.loader.resources['triangle'].texture);
        point.scale.set(0.4);
        this.stage.addChild(point);
        point.x=410;
        point.y=50;
    }
}