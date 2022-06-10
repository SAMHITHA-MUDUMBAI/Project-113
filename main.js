function preload(){

}
function setup(){
    canvas= createCanvas(640,480);
    
    canvas.position(110,250);
    video= createCapture(VIDEO);
    video.hide();

    tint_color= "";
}

function draw(){
    image(video,160,120,320,240);
    
    fill(51, 126, 232);
    stroke(51, 126, 232); 
    circle(75,75,75);
    circle(565,75,75);
    circle(75,405,75);
    circle(565,405,75);
    fill(237, 136, 36);
    stroke(237, 136, 36);
    rect( 112,65,415,20);
    rect( 111,400,419,20);
    rect(65,110,20,260);
    rect(555,110,20,260)
    
}

function take_snapshot(){
    save('student_name.png');
}

