const canvas = document.getElementById("road");
const backg1 = document.getElementById("bg1");
const backg2 = document.getElementById("bg2");
const riderCanvas = document.getElementById("rider");
const ctx = canvas.getContext("2d");
const ctx1 = backg1.getContext("2d");
const ctx2 = backg2.getContext("2d");
const ctx3 = riderCanvas.getContext("2d");

const question = document.querySelector("#question");
const pScore = document.querySelector("#pScore");
const confirmBtn = document.getElementById("confirmBtn");
const ansInp = document.querySelector(".ansInp");

let screenWidth = window.innerWidth;
let screenHeight = 100;

canvas.width = screenWidth;
canvas.height = 100;
backg1.width = screenWidth;
backg1.height = 200;
backg2.width = screenWidth;
backg2.height = 300;
riderCanvas.width = screenWidth;
riderCanvas.height = 100;

// Classes

class road {
  constructor(x) {
    this.x = x;
    this.spd = 0.15 * 3;
    this.img = new Image();
    this.img.src = "../src/img/round4/Dirt road.png";
    this.loaded = false;

    this.img.onload = () => {
      this.loaded = true;
    };
  }

  draw() {
    if (this.loaded) {
      ctx.drawImage(this.img, this.x, 0);
    }
  }

  upd() {
    this.x -= this.spd;
    if (this.x + 500 <= 0) {
      this.x = 1490;
    }
  }
}

class bg1 {
  constructor(x) {
    this.x = x;
    this.spd = 0.15 * 4;
    this.img = new Image();
    this.img.src = "../src/img/round4/Background 1.png";
    this.loaded = false;

    this.img.onload = () => {
      this.loaded = true;
    };
  }

  draw() {
    if (this.loaded) {
      ctx.drawImage(this.img, this.x, 0);
    }
  }

  upd() {
    this.x -= this.spd;
    if (this.x + 500 <= 0) {
      this.x = 1500;
    }
  }
}

class bg2 {
  constructor(x) {
    this.x = x;
    this.spd = 0.15 * 2;
    this.img = new Image();
    this.img.src = "../src/img/round4/Background 2.png";
    this.loaded = false;

    this.img.onload = () => {
      this.loaded = true;
    };
  }

  draw() {
    if (this.loaded) {
      ctx1.drawImage(this.img, this.x, 0);
    }
  }

  upd() {
    this.x -= this.spd;
    if (this.x + 500 <= 0) {
      this.x = 1500;
    }
  }
}

class bg2bn {
  constructor(x) {
    this.x = x;
    this.spd = 0.15 * 2;
    this.img = new Image();
    this.img.src = "../src/img/round4/Background 2 bonus.png";
    this.loaded = false;

    this.img.onload = () => {
      this.loaded = true;
    };
  }

  draw() {
    if (this.loaded) {
      ctx1.drawImage(this.img, this.x, 0);
    }
  }

  upd() {
    this.x -= this.spd;
    if (this.x + 500 <= 0) {
      this.x = 1500;
    }
  }
}

class bg3 {
  constructor(x) {
    this.x = x;
    this.spd = 0.15;
    this.img = new Image();
    this.img.src = "../src/img/round4/Background 3.png";
    this.loaded = false;

    this.img.onload = () => {
      this.loaded = true;
    };
  }

  draw() {
    if (this.loaded) {
      ctx2.drawImage(this.img, this.x, 0);
    }
  }

  upd() {
    this.x -= this.spd;
    if (this.x + 500 <= 0) {
      this.x = 1500;
    }
  }
}

class rider {
  constructor(x) {
    this.x = x;
    this.size = 150;
    this.spd = 0;
    this.img = new Image();
    this.img.src = "../src/img/round4/rider.png";
    this.loaded = false;

    this.img.onload = () => {
      this.loaded = true;
    };
  }

  draw() {
    if (this.loaded) {
      ctx3.drawImage(this.img, this.x, -20, this.size, this.size);
    }
  }

  upd() {
    this.x += this.spd;
    if (this.x + 500 <= 0) {
      this.x = 1500;
    }
  }
}

//Functions

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx1.clearRect(0, 0, backg1.width, backg1.height);
  ctx2.clearRect(0, 0, backg2.width, backg2.height);
  ctx3.clearRect(0, 0, backg2.width, backg2.height);
  for (let i in roads) {
    roads[i].upd();
    roads[i].draw();
  }
  for (let i in background2bns) {
    background2bns[i].upd();
    background2bns[i].draw();
  }
  for (let i in background2s) {
    background2s[i].upd();
    background2s[i].draw();
  }
  for (let i in background3s) {
    background3s[i].upd();
    background3s[i].draw();
  }
  dx = goal - rider1.x;
  rider1.spd = dx * 0.05;
  rider1.upd();
  rider1.draw();
  for (let i in background1s) {
    background1s[i].upd();
    background1s[i].draw();
  }
  requestAnimationFrame(animate);
}

function pushes(arrInp, typeInp, numInp) {
  let ofset = 0;
  switch (typeInp) {
    case "road":
      ofset = 500;
      for (let i = 0; i <= numInp; i++) {
        arrInp.push(new road(i * ofset));
      }
      break;
    case "background1":
      ofset = 470;
      for (let i = 0; i <= numInp; i++) {
        arrInp.push(new bg1(i * ofset));
      }
      break;
    case "background2":
      ofset = 500;
      for (let i = 0; i <= numInp; i++) {
        arrInp.push(new bg2(i * ofset));
      }
      break;
    case "background2bn":
      ofset = 450;
      for (let i = 0; i <= numInp; i++) {
        arrInp.push(new bg2bn(i * ofset));
      }
    case "background3":
      ofset = 470;
      for (let i = 0; i <= numInp; i++) {
        arrInp.push(new bg3(i * ofset));
      }
      break;
  }
}

//Events

const roads = [];
const background1s = [];
const background2s = [];
const background2bns = [];
const background3s = [];
const rider1 = new rider(0);

pushes(roads, "road", 3);
pushes(background1s, "background1", 4);
pushes(background2s, "background2", 3);
pushes(background2bns, "background2bn", 5);
pushes(background3s, "background3", 4);

window.addEventListener("resize", () => {
  screenWidth = window.innerWidth;
  canvas.width = screenWidth;
  canvas.height = 100;
  backg1.width = screenWidth;
  backg1.height = 200;
  backg2.width = screenWidth;
  backg2.height = 300;
  riderCanvas.width = screenWidth;
  riderCanvas.height = 100;
});

let goal = 0;
let dx = goal - rider1.x;
let score = 0;
let win = false;

let numAns = 10 + Math.floor(Math.random() * 14) * 2;

question.textContent =
  "Tam giác vuông có trung tuyến AM = " + numAns / 2 + "cm. Cạnh huyền BC = ?";

confirmBtn.addEventListener("click", () => {
  if (win == false) {
    if (ansInp.value == numAns) {
      ansInp.value = null;
      numAns = 10 + Math.floor(Math.random() * 14) * 2;
      goal += 150;
      if (goal < 1200) {
        question.textContent =
          "Tam giác vuông có trung tuyến AM = " +
          numAns / 2 +
          "cm. Cạnh huyền BC = ?";
      } else {
        question.textContent = "Chúc mừng bạn đã chiến thắng";
      }
      score += 10;
    } else {
      ansInp.value = null;
      numAns = 10 + Math.floor(Math.random() * 14) * 2;
      question.textContent =
        "Tam giác vuông có trung tuyến AM = " +
        numAns / 2 +
        "cm. Cạnh huyền BC = ?";
      goal -= 75;
      score -= 5;
    }
    pScore.textContent = "Điểm: " + score;
    if (goal >= 1200) {
      win = true;
    }
  }
});

animate();
