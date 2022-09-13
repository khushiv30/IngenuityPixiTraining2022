// console.log("Hello World!");
import { Game } from './Game';
import { Application } from 'pixi.js';
import './css/main.css';
window.onload = () => {
    const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById(`game`);
    const app:Application = new Game({
        resizeTo: Window,
        backgroundColor: 0x996633,
        sharedTicker: true,
        sharedLoader: true
    });
    gameDiv.appendChild(app.view);
}
