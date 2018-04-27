var Tank;
(function (Tank_1) {
    // class for tanks
    class Tank {
        constructor(position, color) {
            this._position = position;
            this._color = color;
            this._angle = Math.random() * 360;
        }
        static getRadius() { return Tank.radius; }
        static getBarrelWidth() { return Tank.barrelWidth; }
        static setRadius(tileWidth) {
            Tank.radius = (tileWidth / 2) * .8;
            Tank.barrelWidth = tileWidth / 6;
        }
        get position() { return this._position; }
        get angle() { return this._angle; }
        get color() { return this._color; }
        //true - forward, false - backward
        move(direction) {
            if (direction)
                this._position = Util.getVector(this.position, Tank.velocity, this.angle);
            else
                this._position = Util.getVector(this.position, -Tank.velocity, this.angle);
        }
        //true - move right, false - move left
        rotate(direction) {
            if (direction)
                this._angle += 4;
            else
                this._angle -= 4;
            if (this.angle >= 360)
                this._angle = this._angle % 360; //niepoczebne, można też przed przekroczeniem zera się zabepieczyć
        }
    }
    Tank.velocity = 2;
    Tank_1.Tank = Tank;
})(Tank || (Tank = {}));
