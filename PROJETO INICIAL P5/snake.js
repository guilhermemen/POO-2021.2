const NL = 6;
const NC = 6;
const LADO = 50;
let snakex = 2;
let snakey = 0;
let snake_vx = 0;
let snake_vy = 0; 
let snake_color;
let cell_color;
let timer = 0;

let food_x = 0;
let food_y = 0;
let food_color;
let food_count = 0;

function draw_cell(x,y,color) {
  noStroke();
  fill(color);
  square(x * LADO + 1, y * LADO + 1, LADO - 1);
}

function draw_mat() {
  fill(155);
  for(let c = 0; c < NC; c++)
    for(let l = 0; l < NC; l++) 
      draw_cell(c, l, cell_color);
}

function food_generate() {
  food_x = parseInt(random(0, NC));
  food_y = parseInt(random(0, NL));
}

function setup() {
  createCanvas(NC * LADO, NL * LADO)
  frameRate(30);
  snake_color = color("orange");
  cell_color = color("purple");
  food_color = color("black");
  food_generate();
}

function snake_walk() {
  if (frameCount - timer > 15) {
    timer = frameCount;
    snakex += snake_vx;
    snakey += snake_vy;
  }
}

function snake_loop(){
if(snakex == NC)
  snakex = 0;
if(snakey == NL)
  snakey = 0;
if(snakex == - 1)
  snakex = NC - 1;
if(snakey == - 1)
  snakey = NL - 1;
}


function draw() {
  snake_walk();
  snake_loop();

  if (snakex == food_x && snakey == food_y) {
    food_generate();
    food_count +=1;
  }

  background(255)
  draw_mat();
  draw_cell(food_x, food_y, food_color);
  draw_cell(snakex, snakey, snake_color);

  fill(0);
  textSize(20);
  text(food_count, 8, 35)
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      snake_vx = -1;
      snake_vy = 0;
    }else if (keyCode === RIGHT_ARROW) {
      snake_vx = 1;
      snake_vy = 0;
    }else if (keyCode === UP_ARROW) {
      snake_vx = 0;
      snake_vy = -1;
    }else if (keyCode === DOWN_ARROW) {
      snake_vx = 0;
      snake_vy = 1;
    }

}