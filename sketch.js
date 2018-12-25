    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;
    var counter5 = 0;


function mousePressed() {
    clear();
    background('#111111');
    //blendMode(LIGHTEST);

    counter1 = counter1*0;
    counter2 = counter2*0;
    counter3 = counter3*0;
    counter4 = counter4*0;
    counter5 = counter5*0;

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
	
    
	if ((counter1*counter2*counter3*counter4*counter5) > 0){
    
    strokeWeight(0.8);
    noFill();
    textSize(32);
	textAlign(LEFT);
    text("merry x'mas & happy 2019", 2, 0, 540, 30);
    textAlign(RIGHT);
    text("rooftop animation", 0, 0, 1088, 30);
    
    beginShape();
    vertex(580, 95);
    vertex(590, 120);
    vertex(615, 125);
    vertex(600, 140);
    vertex(605, 160);
    vertex(580, 155);
    vertex(555, 165);
    vertex(560, 140);
    vertex(545, 120);
    vertex(570, 120);
    endShape(CLOSE);
        
    
        
    }

	var shadesGray = [66, 77, 88, 99];

	var gray = random(shadesGray);
	
	var g = color('hsb(0, 0%, ' + gray + '%)');
	
	stroke('#8f98ff');
	strokeWeight(1);
    
    blendMode(SOFT_LIGHT);
	
	noFill();
	
	var xPos = [580, 560, 540, 520, 500, mouseX];
	var yPos = [140, 240, 380, 560, 780, mouseY];
	
	for (var i=0; i<yPos.length; i++){
	
        
            
        xPosCurrent = xPos[i];
        yPosCurrent = yPos[i];
        
        if (xPosCurrent == 0 && yPosCurrent == 0){
        
        noStroke();
            
        }
        
        

        if (i == 5){

            
            
            

           if (mouseX < xPos[0]+5 && mouseX > xPos[0]-5 && mouseY < yPos[0]+5 && mouseY > yPos[0]-5){

                var green1 = color('hsba(180, 60%, 100%, 0.25)');

                fill(green1);

                counter1++;

            } else if (mouseX < xPos[1]+5 && mouseX > xPos[1]-5 && mouseY < yPos[1]+5 && mouseY > yPos[1]-5){

                var green2 = color('hsba(100, 60%, 100%, 0.25)');

                fill(green2);
                
                counter2++;

            } else if (mouseX < xPos[2]+5 && mouseX > xPos[2]-5 && mouseY < yPos[2]+5 && mouseY > yPos[2]-5){

                var green3 = color('hsba(150, 60%, 100%, 0.25)');

                fill(green3);
                
                counter3++;

            } else if (mouseX < xPos[3]+5 && mouseX > xPos[3]-5 && mouseY < yPos[3]+5 && mouseY > yPos[3]-5){

                var green4 = color('hsba(90, 60%, 100%, 0.25)');

                fill(green4);
                
                counter4++;

            } else if (mouseX < xPos[4]+5 && mouseX > xPos[4]-5 && mouseY < yPos[4]+5 && mouseY > yPos[4]-5){

                var green5 = color('hsba(100, 60%, 100%, 0.25)');

                fill(green5);
                
                counter5++;

            }else{
  
                noFill()
            }

        }

    triangle(xPosCurrent, yPosCurrent, xPosCurrent-10-(yPosCurrent/3),  yPosCurrent+50+(1080-yPosCurrent)/5, xPosCurrent+5+(yPosCurrent/2), yPosCurrent+(1080-yPosCurrent)/5);
	
        
    }
	
}
