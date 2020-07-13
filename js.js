const colors = ["white", "yellow", "orange", "red", "green", "blue"];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(200);
  orbitControl(2, 2, 2);

  for (let x = -1; x <= 1; ++x) {
    for (let y = -1; y <= 1; ++y) {
      for (let z = -1; z <= 1; ++z) {
        // yellow and white
        if (y == -1) {
          push();
          translate(x * 70, y * 70, z * 70);
          fill(colors[0]);
          quad(0, 0, 70, 70, 0, 70, 70, 0, 0, 0, 0, 0);
          pop();
          push();
          translate(x * -70, y * -70, z * -70);
          fill(colors[1]);
          quad(0, 70, 70, 70, 70, 70, 70, 70, 0, 0, 70, 0);
          pop();
        }

        //orange and red
        if (x == -1) {
          push();
          translate(x * 70, y * 70, z * 70);
          fill(colors[2]);
          quad(0, 0, 70, 0, 70, 70, 0, 70, 0, 0, 0, 0);
          pop();

          push();
          translate(x * -70, y * -70, z * -70);
          fill(colors[3]);
          quad(70, 0, 70, 70, 70, 70, 70, 70, 0, 70, 0, 0);
          pop();
        }

        // blue and green
        if (z == -1) {
          push();
          translate(x * -70, y * -70, z * -70);
          fill(colors[4]);
          quad(0, 0, 70, 0, 70, 70, 70, 70, 70, 70, 0, 70);
          pop();

          push();
          translate(x * 70, y * 70, z * 70);
          fill(colors[5]);
          quad(0, 0, 0, 0, 70, 0, 70, 70, 0, 70, 0, 0);
          pop();
        }
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
