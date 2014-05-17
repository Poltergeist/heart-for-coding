function draw_cube(ctx, x, y, size){
  return function(){
    size = size || 10
    ctx.moveTo(x,y);
    ctx.lineTo(x+size,y-size);
    ctx.lineTo(x+(size*2),y);
    //ctx.lineTo(x+size,y+size);
    //ctx.lineTo(x,y);

    ctx.lineTo(x+(size * 2),y);
    ctx.lineTo(x+(size * 2),y+size);
    ctx.lineTo(x+size,y+(size * 2));
    ctx.lineTo(x,y+size);
    ctx.fill();
  }
  //ctx.stroke();
}
function draw_heart(ctx, x, y, size, first, last){
  if (!first) {
    setTimeout(draw_cube(ctx, x+(size / 2), y-(size / 2), (size / 2)), 0);
  } else {
    setTimeout(draw_cube(ctx, x, y, size), 0);
  }
  setTimeout(draw_cube(ctx, x+size, y+size, size), 200);
  setTimeout(draw_cube(ctx, x+(size*2), y, size), 400);
  setTimeout(draw3D(ctx, x, y, size), 400);
  setTimeout(next, 600);

}
function draw3D(ctx, x, y, size){
  return function(){
    ctx.moveTo(x,y);
    ctx.lineTo(x, y+size);
    ctx.lineTo(x+(size*2),y+(size*3));
    ctx.lineTo(x+(size*4),y+size);
    ctx.lineTo(x+(size*4),y);
    ctx.fill();
  }

}
function resizeCanvas() {
  c.width = width;
  c.height = height;

}
function draw(runs, start){
  max = Math.pow(2, runs) || 64;
  x = (width / 2) - (max * 2);
  y = (height / 2) - (max);

  x = Math.random() * width;
  y = Math.random() * height;
  ctx.closePath();
  ctx.beginPath();
  console.log('#' + (Math.ceil(Math.random()*16777215)).toString(16));
  ctx.fillStyle = '#' + (Math.ceil(Math.random()*16777215)).toString(16);
  draw_heart(ctx, x, y, size, true);
  size += size;

}
function next(){
  if (size <= max) {
    console.log('run');
    draw_heart(ctx, x, y, size, false, size >= max);
    size += size ;
    return;
  }
  size = 1;
  setTimeout(function(){draw(7);},2000);

}
var c = document.getElementById("C"),
  w = window,
  ctx=c.getContext("2d"),
  start = 1,
  size = 1,
  maxSize = start,
  width = w.innerWidth,
  height = w.innerHeight,
  max, x, y;
resizeCanvas();
draw(7);
//setInterval(function(){
  //draw(maxSize);
  //maxSize += maxSize;
//},1000);
/*
ctx.moveTo(width / 2, 0);
ctx.lineTo(width / 2, height);
ctx.moveTo(0, height / 2);
ctx.lineTo(width, height / 2);
*/
//ctx.stroke();
