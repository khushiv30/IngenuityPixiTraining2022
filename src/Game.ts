import { Application } from 'pixi.js';
export class Game extends Application{
    view(view: any) {
        throw new Error('Method not implemented.');
    }
    constructor(opts:any){
        super(opts);
    }
}