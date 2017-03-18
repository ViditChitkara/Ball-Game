var body=document.getElementsByTagName('body')[0];
var ball=document.getElementById('ball');
var gameBoundary=body.getBoundingClientRect();
var ballBoundary=ball.getBoundingClientRect();
var yRandom=0;
var xRandom=0;
var neg=0;
var interval;

console.log(gameBoundary);
console.log(ballBoundary);



body.addEventListener('keydown',start);

	function random(event){
		ballBoundary=ball.getBoundingClientRect();
		xRandom=Math.random(1)*4;
		yRandom=Math.random(1)*4;
		neg=Math.round(Math.random());
		console.log(neg);
		if(neg==0){
			xRandom=-1*xRandom;
			console.log("x:  "+xRandom)
		}

		neg=Math.round(Math.random());
		console.log(neg);
		if(neg==0){
			yRandom=-1*xRandom;
			console.log("y:  "+yRandom)

		}

		ball.style.left=ballBoundary.left+xRandom;
		ball.style.top=ballBoundary.top+yRandom;
		if((ballBoundary.left<gameBoundary.left)||
		(ballBoundary.top<gameBoundary.top)||
		(ballBoundary.right>gameBoundary.right)||
		(ballBoundary.bottom>gameBoundary.bottom))
	{
		alert("gameover");
		clearInterval(interval);
	}


	}

	function start (event) {
	ballBoundary=ball.getBoundingClientRect();
	if((ballBoundary.left<gameBoundary.left)||
		(ballBoundary.top<gameBoundary.top)||
		(ballBoundary.right>gameBoundary.right)||
		(ballBoundary.bottom>gameBoundary.bottom))
	{
		alert("gameover");
		clearInterval(interval);
	}


	if(event.which==32){
		interval = setInterval(random,1);
	}


	if (event.which==37){
		console.log("left");
		 ball.style.left=(ballBoundary.left-30)+"px";
	}
	else if (event.which==38){
		console.log("top");
		ball.style.top=(ballBoundary.top-30)+"px";

	}
	else if (event.which==39){
		console.log("right");
		ball.style.left=(ballBoundary.left+30)+"px";

	}
	else if (event.which==40){
		console.log("down");
		ball.style.top=(ballBoundary.top+30)+"px";
	}
}

// window.getBoundingClientRect();
//console.log(body);