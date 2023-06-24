let tree;
let particles = [];

function setup1() {
  createCanvas(400, 400);
  background(255);

  let boundary = new Rectangle(200, 200, 200, 200);
  tree = new QuadTree(boundary, 4);

  for(let i = 0; i < 300; i++) {
    let x = randomGaussian(width / 2, width / 8);
    let y = randomGaussian(height / 2, height / 8);

    let p = new Point(x, y);
    tree.insert(p);
  }
  setupDrawning = true;
}

function setup2() {
  createCanvas(600, 400);

  for(let i = 0; i < 1000; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  setupDrawning = true;
}

function draw1() {
  background(0);

  tree.show();

  stroke(0, 255, 0);
  rectMode(CENTER);

  if(mouseX < width && mouseY < height) {
    let range = new Rectangle(mouseX, mouseY, 25, 25);
    rect(range.x, range.y, range.w * 2, range.h * 2);
    points = tree.query(range);
  }

  
  for(let p of points) {
    strokeWeight(4);
    point(p.x, p.y);
  }
}

function draw2() {
  background(0);

  let boundary = new Rectangle(300, 200, 600, 400);
  let tree = new QuadTree(boundary, 4);

  for(let p of particles) {
    let point = new Point(p.x, p.y, p);
    tree.insert(point);

    p.move();
    p.render();
    p.setHighlight(false);
  }

  for(let p of particles) {
    
    let range = new Circle(p.x, p.y, p.r * 2);
    let points = tree.query(range);

    for(let point of points) {

      let other = point.userData;
      if(p !== other && p.intersects(other)) {
        p.setHighlight(true);
      }
      
    }
  }
}

