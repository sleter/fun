// main file of the application
// all dependencies are declared in index.html
// structure for positions
class Pos {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    static calculateDistance(a, b) {
        return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
    }
}
// main class
class Game {
    constructor() {
        this.holder = document.getElementById('content');
        this.arena = new Arena.Arena(this.holder.clientHeight);
        this.holder.appendChild(this.arena.canvas);
    }
    update() {
        this.arena.redraw();
    }
}
// start the app
function start() {
    let game = new Game();
    game.update();
}
// initialize app - when browser load all files
window.onload = start;
