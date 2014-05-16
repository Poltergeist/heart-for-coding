function draw_cube(ctx, x, y, size){
  size = size || 10
  ctx.moveTo(x,y);
  ctx.lineTo(x+size,y-size);
  ctx.lineTo(x+(size*2),y);
  ctx.lineTo(x+size,y+size);
  ctx.lineTo(x,y);
  ctx.stroke();
  // 3D
  ctx.lineTo(x,y+size);
  ctx.lineTo(x+size,y+(size*2));
  ctx.lineTo(x+(size*2),y+size);
  ctx.lineTo(x+(size*2),y);
  ctx.stroke();
}
function draw_heart(x, y, size, first, last){
  if (first) { draw_cube(ctx, x, y, size); }
  draw_cube(ctx, x+size, y+size, size);
  draw_cube(ctx, x+(size*2), y, size);
  if (!last) {draw_cube(ctx, x+size, y-size, size);}

}
function resizeCanvas() {
  c.width = width;
  c.height = height;

}
var c = document.getElementById("C"),
  w = window,
  width = w.innerWidth,
  height = w.innerHeight,
  ctx=c.getContext("2d"),
  max = 128,
  x = (width / 2) - (max * 4),
  y = (height / 2) - (max),
  size = 1;

resizeCanvas();
draw_heart(x, y, size, true);
size = size * 2;
draw_heart(x, y, size);
size = size * 2;
while (size < max) {
  draw_heart(x, y, size);
  size = size * 2;
}
draw_heart(x, y, size);
size = size * 2;
draw_heart(x, y, size, false, true);

/*
ctx.moveTo(width / 2, 0);
ctx.lineTo(width / 2, height);
ctx.moveTo(0, height / 2);
ctx.lineTo(width, height / 2);
*/
ctx.stroke();
