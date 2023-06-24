
function setup() {
  if(change) {
    setup1();
  } else {
    setup2();
  }
}

function draw() {
  if(change) {
    if(!setupDrawning) {
      setup1();
    }
    draw1();

  } else {
    if(!setupDrawning) {
      setup2();
    }
    draw2();
  }
}