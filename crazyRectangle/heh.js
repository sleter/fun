window.onload = function(){
  var crazyRectangle = {
    div: null,
    topPx: 0,
    leftPx: 0,
    vY: 4, vX: 4,
    windowHeight: 0, windowWidth: 0,

    start: function(){
        this.div = document.createElement('div');
        this.div.style.width = '69px';
        this.div.style.height = '420';
        this.div.style.background = 'magenta';
        this.div.style.position = 'absolute';
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(this.div);
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
    },

    move : function(){
      this.topPx += this.vY;
      this.div.style.top = this.topPx + 'px';
      if(this.topPx + 100 >= this.windowHeight || this.topPx <= 0) this.vY = -this.vY;


      this.leftPx += this.vX;
      this.div.style.left = this.leftPx + 'px';
      if(this.leftPx + 100 >= this.windowWidth || this.leftPx<=0)this.vX=-this.vX;

      setTimeout(function() {crazyRectangle.move();}, 0.00007)

    }
  }
  crazyRectangle.start();
  crazyRectangle.move();
}
