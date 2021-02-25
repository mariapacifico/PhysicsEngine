
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Components of the ball
var ballRadius = 10;
var mass = 2;

//Starting location of ball
//x and y Position
var x = canvas.width/2;
var y = 0;

//Velocity 
//vx = x component; vy = y component 
var vx = 3;
var vy = 5;

//Force
//Viscosity constant of sea water
var Uwater = 0.00107;
//Fx = x component; Fy = y component
var Fx = -6 * 3.14 * Uwater * ballRadius * vx;
var Fy = -6 * 3.14 * Uwater * ballRadius * vy;

//Acceleration
//Gravity's acceleration in this scenario, only impacts the y component
var grav = 0.2;
//ax = x component; ay = y component
var ax = Fx / mass;
var ay = Fy / mass + grav;

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();

//Bounce

	if(x + vx > canvas.width-ballRadius ) {
		x = canvas.width-ballRadius;
		vx = -vx;
	}
	
	if(x + vx < ballRadius){
		x = ballRadius;
		vx = -vx;
	}

	if(y + vy > canvas.height-ballRadius){
		y = canvas.height-ballRadius;
		vy = -vy;
	}

	if (y + vy < ballRadius) {
        	y = ballRadius;
		vy = -vy;
	}
	
	//assume time = 1
	//update force
	Fx = -6 * 3.14 * Uwater * ballRadius * vx;
	Fy = -6 * 3.14 * Uwater * ballRadius * vy;

	//update acceleration
	ax = Fx / mass;
	ay = Fy / mass + grav;

	//update velocity
	vx += ax;
	vy += ay;
	
	//update position
	x += vx;
	y += vy;
	
}

setInterval(draw, 20);