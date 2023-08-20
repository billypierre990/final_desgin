// StartBtn = document.getElementById('startBtn');
// StopBtn = document.getElementById('stopBtn');
MemeImage = document.getElementById('memeImage');



StopBtn.addClickListener("click", Stop());

// StartBtn.addClickListener("click", StartImgMover());


// calls function to reset image and clear out the my time
function stop(){
    clearTimeout(my_Time);
    MemeImage.style.top = "100px";
    MemeImage.style.left = "50px";
    }

// calls the timer which calls the offset and then  adds 10 milliseconds to the timer
function timer(){
offset();
my_Time = setTimeout("timer()",10);
}

// responsible for moving image
function offset(){
// the is number of steps per my time
var step = 1;
// declare y variable for movement
var y = MemeImage.offsetTop;
// declare x variable for movement
var x =  MemeImage.offsetLeft;


// if image on the y axis is less than 400
if(y<400 ){
    //sets y axis by adding current position + step
    y=y+step;
    //moves image to y axis
    MemeImage.style.top =  y +"px";
    
    // if image on the x axis is less than 800 
}else if(x<400){
        //sets x axis by adding current position + step
        x=x+step;
        //moves image to x axis
        MemeImage.style.left = x +"px";
    }

}



