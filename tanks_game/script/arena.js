var Arena;
(function (Arena_1) {
    // class for map
    class Arena {
        constructor(height) {
            this.height = height;
            this._canvas = document.createElement('canvas');
            this.canvas.width = height;
            this.canvas.height = height;
            this.canvas.style.margin = '0 auto';
            this.canvas.style.display = 'block';
            this.context = this.canvas.getContext('2d');
            Tank.Tank.setRadius(this.height / Arena.tileNumber);
        }
        get canvas() { return this._canvas; }
        ;
        redraw(redTank, blueTank) {
            this.context.beginPath();
            this.context.fillStyle = 'white';
            this.context.fillRect(0, 0, this.height, this.height);
            this.context.closePath();
            this.drawTank(redTank);
            this.drawTank(blueTank);
        }
        drawTank(tank) {
            let position = tank.position;
            let radius = Tank.Tank.getRadius();
            //tank
            this.context.beginPath();
            this.context.arc(position.x, position.y, radius, 0, 2 * Math.PI);
            this.context.fillStyle = tank.color;
            this.context.fill();
            this.context.closePath();
            //barrel
            radius *= 1.4;
            this.context.beginPath();
            this.context.fillStyle = 'black';
            this.context.lineWidth = Tank.Tank.getBarrelWidth();
            this.context.moveTo(position.x, position.y);
            let end = Util.getVector(position, radius, tank.angle);
            this.context.lineTo(end.x, end.y);
            this.context.stroke();
            this.context.closePath();
        }
    }
    Arena.tileNumber = 25; // 625
    Arena_1.Arena = Arena;
})(Arena || (Arena = {}));
