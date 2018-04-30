// Cloud Variables

var cloudOne = 200;
var cloudTwo = 150;
var cloudThree = 300;
var cloudFour = 100;

var sunDiam = 200;

function setup() {
    createCanvas(500,500)
    background('black');
}

function draw() {

    fill('yellow');
    ellipse(250, 250, sunDiam)

    fill('white');
    ellipse(cloudOne, 100, 200, 50);
    ellipse(cloudTwo, 150, 200, 50);


    ellipse(cloudThree, 400, 200, 50);
    ellipse(cloudFour, 370, 200, 50);
    fill("red");
    stroke("black");
    textSize(40);
    textFont("chiller");
    textStyle(ITALIC);
    textAlign(RIGHT);
    text("GOOD Day", 300, 50);
    cloudOne++;
    cloudTwo++;
    cloudThree++;
    cloudFour++;
    


}

function mousePressed () {

    sunDiam = sunDiam + 5;

    if (sunDiam > 300) {
        sunDiam = 200
    }

    var bgColor = ('blue')
    background(bgColor)
}