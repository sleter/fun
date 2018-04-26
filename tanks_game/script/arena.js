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
        }
        get canvas() { return this._canvas; }
        ;
        redraw() {
            this.context.beginPath();
            this.context.fillStyle = 'white';
            this.context.fillRect(0, 0, this.height, this.height);
            this.context.closePath();
        }
    }
    Arena.tileNumber = 25; // 625
    Arena_1.Arena = Arena;
})(Arena || (Arena = {}));
