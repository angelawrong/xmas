var counter1 = 0;
var counter2 = 0
var counter3 = 0;
var counter4 = 0
var counter5 = 0;



function mousePressed() {
clear();
background('#111111');
blendMode(LIGHTEST);
	

for (var n=0; n<100 ; n++){
	
	var gradient = color('hsba(225, 80%, 100%, ' + (100-n)/100 + ')');
	stroke(gradient);
	strokeWeight(1);
	
	line(0, 1080-n/2, 1080, 1080-n/2);
	
	}


}

function setup() {
  createCanvas(1080, 1080);
  background('#111111');
  cursor(CROSS);
  frameRate(24);
	

  
for (var n=0; n<100 ; n++){
	
	var gradient = color('hsba(225, 80%, 100%, ' + (100-n)/100 + ')');
	stroke(gradient);
	strokeWeight(1);
	
	line(0, 1080-n/2, 1080, 1080-n/2);
	
	}

}

function draw() {
	
	//if (counter1 * counter2 * counter3 * counter4 * counter5 > 1){
	
	textSize(32);
	textAlign(CENTER);
	text("merry x'mas & happy 2019", 0, 0, 1080, 30);
		
	//}
	
	

	var shadesGray = [66, 77, 88, 99];

	var gray = random(shadesGray);
	
	var g = color('hsb(0, 0%, ' + gray + '%)');
	
	stroke('#8f98ff');
	strokeWeight(1);
	
	noFill();
	
	var xPos = [580, 560, 540, 520, 500, mouseX];
	var yPos = [140, 240, 380, 560, 780, mouseY];
	
	for (var i=0; i<yPos.length; i++){
	
	xPosCurrent = xPos[i];
	yPosCurrent = yPos[i];
	
	if (i == 5){
	
		blendMode(SOFT_LIGHT);
		
	
		if (mouseX < xPos[0]+5 && mouseX > xPos[0]-5 && mouseY < yPos[0]+5 && mouseY > yPos[0]-5){

			var green = color('hsba(180, 60%, 100%, 0.25)');
			
			fill(green);
			
			counter1++;
			
		} else if (mouseX < xPos[1]+5 && mouseX > xPos[1]-5 && mouseY < yPos[1]+5 && mouseY > yPos[1]-5){
			
			var green = color('hsba(100, 60%, 100%, 0.25)');
			
			fill(green);
			
			counter2++;
	
		} else if (mouseX < xPos[2]+5 && mouseX > xPos[2]-5 && mouseY < yPos[2]+5 && mouseY > yPos[2]-5){
			
			var green = color('hsba(150, 60%, 100%, 0.25)');
			
			fill(green);
			
			counter3++;
	
		} else if (mouseX < xPos[3]+5 && mouseX > xPos[3]-5 && mouseY < yPos[3]+5 && mouseY > yPos[3]-5){
			
			var green = color('hsba(90, 60%, 100%, 0.25)');
			
			fill(green);
			
			counter4++;
	
		} else if (mouseX < xPos[4]+5 && mouseX > xPos[4]-5 && mouseY < yPos[4]+5 && mouseY > yPos[4]-5){
			
			var green = color('hsba(100, 60%, 100%, 0.25)');
			
			fill(green);
			
			counter5++;
	
		}else{

			
			noFill()
			
		}
	
	}
	
	triangle(xPosCurrent, yPosCurrent, xPosCurrent-10-(yPosCurrent/3),  yPosCurrent+50+(1080-yPosCurrent)/5, xPosCurrent+5+(yPosCurrent/2), yPosCurrent+(1080-yPosCurrent)/5);
	
	
	
	
	


  
}
