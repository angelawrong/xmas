    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;
    var counter5 = 0;


function keyTyped() {
    if (key === 'c'){
        save('myTree.jpg');   
    }
}

function mousePressed() {
    clear();
    background('#111111');
    blendMode(BLEND);

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
    
    var white = color(255, 255, 255);
    
        
    strokeWeight(0.5);
    noFill();
    
    
    textSize(36);
	textAlign(LEFT);
    text("merry x'mas & happy 2019", 2, 0, 540, 36);
    textAlign(RIGHT);
    text("rooftop animation", 0, 0, 1088, 36);
    

    //stroke('#8f98ff');
    noStroke();
    fill('#8f98ff');
    textSize(18); 
    text("press 'c' to capture an image", 0, 1055, 1080, 30);
    
        
    stroke(white);
    blendMode(BLEND);
    strokeWeight(1);
    
    
    var time = second();
    var rainbow = color('hsba(' + (time*10) % 360 + ', 60%, 100%, 0.5)');
    fill(rainbow);
        
    //text(time, 0, 0, 1088, 30);
    
        
    beginShape();
    vertex(580, 65);
    vertex(591, 90);
    vertex(615, 90);
    vertex(600, 110);
    vertex(605, 135);
    vertex(580, 125);
    vertex(555, 135);
    vertex(560, 110);
    vertex(545, 90);
    vertex(569, 90);
    endShape(CLOSE);
    
    noFill();
    blendMode(SOFT_LIGHT);
    
        
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
