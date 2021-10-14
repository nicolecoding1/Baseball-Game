var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4543866a-094f-4090-8399-3dda1d9e01a2","162f0ed6-a7d6-4d23-9ba5-10260a823c9e","114a1300-7da4-4d87-8a24-dfb1c493cd13","e7e86e75-3cee-4f3b-b9cc-4d5806c8eb5f","19f2fee2-775b-4c37-bc89-935101067ca2","9c06046d-c018-48e0-9841-64362c7d681d","27624066-6610-490f-bc29-1854d6eba0da","d2804c6e-fc7f-422f-8dd1-6d1c36bd0f58","a235480e-d891-433b-b96f-a8fe48590ac5"],"propsByKey":{"4543866a-094f-4090-8399-3dda1d9e01a2":{"name":"sports_baseball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yL8.WhSOiAPQwNYS9Z.KXNCfoyd3Bu0g/category_backgrounds/sports_baseball.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"yL8.WhSOiAPQwNYS9Z.KXNCfoyd3Bu0g","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yL8.WhSOiAPQwNYS9Z.KXNCfoyd3Bu0g/category_backgrounds/sports_baseball.png"},"162f0ed6-a7d6-4d23-9ba5-10260a823c9e":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":20,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"qhN81Tfv2jTCeH.5_EOTWNZHN6ZnS9bv","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":12},"rootRelativePath":"assets/162f0ed6-a7d6-4d23-9ba5-10260a823c9e.png"},"114a1300-7da4-4d87-8a24-dfb1c493cd13":{"name":"animation_1_copy_2","sourceUrl":null,"frameSize":{"x":11,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"tvPmbVe6hc2CBDq.7fbYNQtw2u4oHjOa","loadedFromSource":true,"saved":true,"sourceSize":{"x":11,"y":12},"rootRelativePath":"assets/114a1300-7da4-4d87-8a24-dfb1c493cd13.png"},"e7e86e75-3cee-4f3b-b9cc-4d5806c8eb5f":{"name":"catcher","sourceUrl":null,"frameSize":{"x":11,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"rug1ZgSP4IBIdGZ7gGJY_L80E6VKtMZk","loadedFromSource":true,"saved":true,"sourceSize":{"x":11,"y":12},"rootRelativePath":"assets/e7e86e75-3cee-4f3b-b9cc-4d5806c8eb5f.png"},"19f2fee2-775b-4c37-bc89-935101067ca2":{"name":"catcher_copy_1","sourceUrl":null,"frameSize":{"x":11,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"SIaDEUX6B7XRAoqpyczCRdS_hxQUV56S","loadedFromSource":true,"saved":true,"sourceSize":{"x":11,"y":12},"rootRelativePath":"assets/19f2fee2-775b-4c37-bc89-935101067ca2.png"},"9c06046d-c018-48e0-9841-64362c7d681d":{"name":"catcher_2","sourceUrl":null,"frameSize":{"x":11,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"noHfNP32dtNw6vNDU8qVqSMMnTH2Fv16","loadedFromSource":true,"saved":true,"sourceSize":{"x":11,"y":12},"rootRelativePath":"assets/9c06046d-c018-48e0-9841-64362c7d681d.png"},"27624066-6610-490f-bc29-1854d6eba0da":{"name":"animation_1_copy_1","sourceUrl":null,"frameSize":{"x":23,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"vx5ejIyA4NIDu1Og.P0MkhfwD9p35ojF","loadedFromSource":true,"saved":true,"sourceSize":{"x":23,"y":16},"rootRelativePath":"assets/27624066-6610-490f-bc29-1854d6eba0da.png"},"d2804c6e-fc7f-422f-8dd1-6d1c36bd0f58":{"name":"baseball_1","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"SwNPLfdd076DbHsnKJMZpqoJZ2bK4m3B","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/d2804c6e-fc7f-422f-8dd1-6d1c36bd0f58.png"},"a235480e-d891-433b-b96f-a8fe48590ac5":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"nz4R64ryi61t2DK95DqxisKvYXWFRmhZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/a235480e-d891-433b-b96f-a8fe48590ac5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bac = createSprite(200, 200);
bac.setAnimation("sports_baseball_1");

var play = createSprite(200, 360);
play.setAnimation("animation_1");
play.scale = 1.4;

var ball = createSprite(200, 200);
ball.setAnimation("baseball_1");
ball.scale = 0.05;

var catcher = createSprite(200, 20);
catcher.setAnimation("catcher");
catcher.scale = 2;
catcher.velocityX = 10;

var catcher2 = createSprite(370, 30);
catcher2.setAnimation("catcher_copy_1");
catcher2.scale = 2;
catcher2.velocityY = 10;

var catcher3 = createSprite(20, 30);
catcher3.setAnimation("catcher_copy_1");
catcher3.scale = 2;
catcher3.velocityY = 10;

var hit = createSprite(500, 500);
hit.setAnimation("animation_1_copy_1");
hit.scale = 1.4;

var base = createSprite(294, 257);
base.setAnimation("animation_2");

var base1 = createSprite(197, 162);
base1.setAnimation("animation_2");

var base2 = createSprite(94, 261);
base2.setAnimation("animation_2");

var base3 = createSprite(200, 400);
base3.setAnimation("animation_2");

var score = 0;

function draw() {
  background("clear");
  if (keyDown("c")) {
    ball.velocityY = randomNumber(5, 10);
  }
  if (keyDown("space")) {
    play.visible = false;
    hit.x = 200;
    hit.y = 360;
  }
  if (ball.isTouching(hit)) {
    hit.setAnimation("animation_1_copy_2");
    hit.velocityY = -2;
    hit.velocityX = 2;
    ball.velocityY = randomNumber(-1, -20);
    ball.velocityX = randomNumber(-20, 10);
  }
  if (catcher.x > 380) {
    catcher.velocityX = -10;
  }
  if (catcher.x < 10) {
    catcher.velocityX = 10;
  }
  if (catcher2.y > 300) {
    catcher2.velocityY = -10;
  }
  if (catcher3.y > 300) {
    catcher3.velocityY = -10;
  }
  if (catcher2.y < 30) {
    catcher2.velocityY = 10;
  }
  if (catcher3.y < 30) {
    catcher3.velocityY = 10;
  }
  if (hit.isTouching(base)) {
    hit.velocityX = -2;
  }
  if (hit.isTouching(base1)) {
    hit.velocityY = 2;
    hit.velocityY = 2;
  }
  if (hit.isTouching(base2)) {
    hit.velocityX = 1.3;
  }
  if (hit.y == 400) {
    score = score + 1;
    play.x = 200;
    play.y = 360;
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    play.velocityX = 0;
    play.velocityY = 0;
    play.visible = true;
    hit.setAnimation("animation_1_copy_1");
  }
  if (keyDown("up")) {
    play.x = 200;
    play.y = 360;
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    play.velocityX = 0;
    play.velocityY = 0;
    play.visible = true;
    hit.setAnimation("animation_1_copy_1");
  }
  drawSprites();
  if (catcher.isTouching(ball)) {
    background("black");
    text("game over", 100 , 200);
    textSize(40);
    catcher.velocityX = 0;
    ball.velocityX = 0;
    ball.velocityY = 0;
    hit.velocityY = 0;
    hit.velocityX = 0;
  }
  if (catcher2.isTouching(ball)) {
    background("black");
    text("game over", 100, 200);
    textSize(40);
    catcher2.velocityY = 0;
    ball.velocityX = 0;
    ball.velocityY = 0;
    hit.velocityY = 0;
    hit.velocityX = 0;
  }
  if (catcher3.isTouching(ball)) {
    background("black");
    text("game over", 100, 200);
    textSize(40);
    catcher3.velocityY = 0;
    ball.velocityX = 0;
    ball.velocityY = 0;
    hit.velocityY = 0;
    hit.velocityX = 0;
  }
  if (ball.y > 400) {
    background("black");
    text("game over", 100, 200);
    textSize(40);
    catcher3.velocityY = 0;
    ball.velocityX = 0;
    ball.velocityY = 0;
    hit.velocityY = 0;
    hit.velocityX = 0;
  }
  if (hit.isTouching(base3)) {
    background("blue");
    hit.velocityX = 0.15;
    hit.velocityY = 0.15;
    textSize(50);
    text("HOMERUN!!!!", 59, 200);
  }
  textSize(30);
  text(score, 115, 27);
  textSize(30);
  text("points:", 10, 25);
  textSize(20);
  text("c=pitch space=hit", 5, 382);
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
