function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(200,200,250);
  
  textSize(12);
  text('Copyright, 2024 KyzutoSKETCH',10,470);
  
  textSize(100);
  text('🛬',100,300);
  textSize(24);
  text('9 September 2001, 8:46 UTC',300,50);
  
  fill(255,204,0);
  ellipse(100,100,50,50);
  
  stroke(255,204,0);
  strokeWeight(4);
  for(let i = 0; i < 360; i+= 15){
    let x1 = 100 + cos(radians(i))*30;
    let y1 = 100 + sin(radians(i))*30;
    let x2 = 100 + cos(radians(i))*50;
    let y2 = 100 + sin(radians(i))*50;
    line(x1,y1,x2,y2);
  }
  
  stroke(0,0,0);
  fill(128,128,128);
  rect(300,225,130,255);
  rect(450,225,130,255);
  fill(255,255,255);
  
  let windowWidth = 5;
  let windowHeight = 15;
  let spacing = 10;
  
  for (let i = 0; i < 255; i += windowHeight + spacing) {
    for (let j = 0; j < 130; j += windowWidth + spacing) {
      rect(300 + j, 225 + i, windowWidth, windowHeight);
    }
  }
  
  // Gambar jendela gedung kanan
  for (let i = 0; i < 255; i += windowHeight + spacing) {
    for (let j = 0; j < 130; j += windowWidth + spacing) {
      rect(450 + j, 225 + i, windowWidth, windowHeight);
    }
  }
}