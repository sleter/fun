// main file of the application
// all dependencies are declared in index.html

// structure for positions
class Pos{
    constructor(public x: number, public y: number) {};

    public static calculateDistance(a: Pos, b: Pos): number {
        return Math.sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y));
    }
}

// main class
class Game{
    private holder: HTMLElement;
    private arena: Arena.Arena;

    private redTank: Tank.Tank;
    private blueTank: Tank.Tank;

    private keys: Map<number, boolean>;

    public constructor(){
        this.holder = document.getElementById('content');

        this.arena = new Arena.Arena(this.holder.clientHeight);
        this.holder.appendChild(this.arena.canvas);

        this.redTank = new Tank.Tank(new Pos(20,40), 'red');
        this.blueTank = new Tank.Tank(new Pos(40,20), 'blue');

        this.keys =new Map<number, boolean>();

    }

    public processKey(event: KeyboardEvent): void{
        this.keys[event.keyCode] = (event.type == 'keydown');
    }

    public update(): void {
        //redTank
        //left
        if(this.keys[37])this.redTank.rotate(false);
        //right
        if(this.keys[39])this.redTank.rotate(true);
        //forward
        if(this.keys[38])this.redTank.move(true);
        //run for your life
        if(this.keys[40])this.redTank.move(false);
        

        this.arena.redraw(this.redTank, this.blueTank);
    }
}

// start the app
function start(): void {
    let game = new Game();

    addEventListener('keydown', (event) => game.processKey(event));
    addEventListener('keyup', (event) => game.processKey(event));

    setInterval(() => game.update(), 33);
}

// initialize app - when browser load all files
window.onload = start;