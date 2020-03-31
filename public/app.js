console.log("Testing !")

const PADDLE_WIDTH = 20;
const PADDLE_HEIGHT = 80;

function startGame() {
    myGameArea.start();
    playerOne = new rectangle("red", PADDLE_WIDTH,PADDLE_HEIGHT,10,120);
    playerTwo = new rectangle("blue", PADDLE_WIDTH,PADDLE_HEIGHT,410,120);
  }
  
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
  }

  function rectangle(color,width, height, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

function updateGameArea(){
    myGameArea.clear();
    playerOne.update();
    playerTwo.update();
}