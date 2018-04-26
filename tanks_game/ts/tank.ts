namespace Tank{
     // class for tanks
     export class Tank{
        private static radius: number;
        public static getRadius(): number { return Tank.radius; }
        private static barrelWidth: number;
        public static getBarrelWidth(): number {return Tank.barrelWidth;}
        public static setRadius(tileWidth:number ): void {
            Tank.radius = (tileWidth/2)*.8;
            Tank.barrelWidth = tileWidth /6;
        }

        private static readonly velocity = 2;

        private _position: Pos;
        get position(): Pos {return this._position;}
        private _angle: number;
        get angle(): number {return this._angle;}

        private _color: string;
        get color(): string {return this._color;}

        constructor(position: Pos, color: string){
            this._position = position;
            this._color = color;
            this._angle = Math.random()*360;
        }
        //true - forward, false - backward
        public move(direction: boolean): void{
            if(direction) this._position = Util.getVector(this.position, Tank.velocity, this.angle);
            else this._position = Util.getVector(this.position, -Tank.velocity, this.angle);
        }

        //true - move right, false - move left
        public rotate(direction: boolean):void{
            if(direction)this._angle+=4;
            else this._angle-=4;

            if(this.angle >= 360) this._angle = this._angle%360; //niepoczebne, można też przed przekroczeniem zera się zabepieczyć

        }


    }
}