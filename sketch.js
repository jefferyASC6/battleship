function setup(){
    createCanvas(700,700);
    background(85,130,230);
}

let redA10 = 85
let greenA10 = 130
let blueA10 = 230

let redB10 = 85
let greenB10 = 130
let blueB10 = 230

let redC10 = 85
let greenC10 = 130
let blueC10 = 230

let redB4 = 85
let greenB4 = 130
let blueB4 = 230

let redC4 = 85
let greenC4 = 130
let blueC4 = 230

let redG1 = 85
let greenG1 = 130
let blueG1 = 230

let redG2 = 85
let greenG2 = 130
let blueG2 = 230

let redD6 = 85
let greenD6 = 130
let blueD6 = 230

let redE6 = 85
let greenE6 = 130
let blueE6 = 230 

let redF6 = 85
let greenF6 = 130 
let blueF6 = 230

let redG6 = 85
let greenG6 = 130 
let blueG6 = 230

let redH6 = 85
let greenH6 = 130 
let blueH6 = 230

let redJ5 = 85
let greenJ5 = 130 
let blueJ5 = 230

let redJ6 = 85
let greenJ6 = 130 
let blueJ6 = 230

let redJ7 = 85
let greenJ7 = 130 
let blueJ7 = 230

let redJ8 = 85
let greenJ8 = 130 
let blueJ8 = 230

let redJ9 = 85
let greenJ9 = 130 
let blueJ9 = 230

function draw(){
    stroke (255);
    // vertical lines
    line(70,0, 70,700);
    line(140,0,140,700);
    line(70,0, 70,700);
    line(210,0, 210,700);
    line(280,0, 280,700);
    line(350,0, 350,700);
    line(420,0,420,700);
    line(490,0, 490,700);
    line(560,0, 560,700);
    line(630,0, 630,700);
    line(700,0, 700,700);
    //horizontal lines
    line(0,70, 700,70);
    line(0,140, 700,140);
    line(0,210, 700,210);
    line(0,280, 700,280);
    line(0,350, 700,350);
    line(0,420, 700,420);
    line(0,490, 700,490);
    line(0,560, 700,560);
    line(0,630, 700,630);
    line(0,700, 700,700);  
    //ships
    //A10
    fill(redA10,greenA10,blueA10)
        square(0,630,70);
    //B10
    fill(redB10,greenB10,blueB10)
        square(70,630,70);
    //C10
    fill(redC10,greenC10,blueC10)
        square(140,630,70);
    //B4
    fill(redB4,greenB4,blueB4)
        square(70,140,70);
    //C4
    fill(redC4,greenC4,blueC4)
        square(140,140,70);
    //G1
    fill(redG1,greenG1,blueG1);
        square(420,0,70);
    //G2
    fill(redG2, greenG2, blueG2);
        square(420,70,70);
    //D6
    fill(redD6, greenD6, blueD6);
        square(210,350,70);
    //E6
    fill(redE6, greenE6, blueE6);
        square(280,350,70);
    //F6
    fill(redF6, greenF6, blueF6);
        square(350,350,70);
    //G6
    fill(redG6, greenG6, blueG6);
        square(420,350,70);
    //H6
    fill(redH6, greenH6, blueH6);
        square(490,350,70);
    //J5
    fill(redJ5, greenJ5, blueJ5);
        square(630,280,70);
    //J6
    fill(redJ6, greenJ6, blueJ6);
        square(630,350,70);
    //J7
    fill(redJ7, greenJ7, blueJ7);
        square(630,420,70);
    //J8
    fill(redJ8, greenJ8, blueJ8);
        square(630,490,70);
    //J9
    fill(redJ9, greenJ9, blueJ9);
        square(630,560,70);
}

function mouseClicked(){
    if(mouseX>=70 && mouseX<=140 && mouseY>=140 && mouseY<=210){
        redB4 = 255
        greenB4 = 0
        blueB4 = 0
    }
    else if(mouseX>=140 && mouseX<=210 && mouseY>=140 && mouseY<=210){
        redC4 = 255
        greenC4 = 0
        blueC4=0
    }
    else if (mouseX>=0 && mouseX<=70 && mouseY>=630 && mouseY<=700){
        redA10 = 255
        greenA10 = 0
        blueA10 = 0
    }
    else if (mouseX>=70 && mouseX<=140 && mouseY>=630 && mouseY<=700){
        redB10 = 255
        greenB10 = 0
        blueB10 = 0
    }
    else if (mouseX>=140 && mouseX<=210 && mouseY>=630 && mouseY<=700){
        redC10 = 255
        greenC10 = 0
        blueC10 = 0
    }
    else if (mouseX>=420 && mouseX<=490 && mouseY>=0 && mouseY<=70){
        redG1 = 255
        greenG1 = 0
        blueG1 = 0
    }
    else if (mouseX>=420 && mouseX<=490 && mouseY>=70 && mouseY<=140){
        redG2 = 255
        greenG2 = 0
        blueG2 = 0
    }
    else if (mouseX>=210 && mouseX<=280 && mouseY>=350 && mouseY<=420){
        redD6 = 255
        greenD6 = 0
        blueD6 = 0
    }
}