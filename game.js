// Constant Elments from the game.html document
    const myBtn = document.getElementById("myBtn");
    const Total = document.getElementById("total");
    const randomOne = document.getElementById("randomOne");
    const randomTwo = document.getElementById("randomTwo");
    const Result = document.getElementById("result");
    const changeimg = document.getElementById("diceKing");



    




myBtn.addEventListener("click", function Calculate(){
    
    //Generate 1st random number between 1 thru 6 
    var answerOne = Math.floor(Math.random() * 7);

    
    //Generate 1st random number between 1 thru 6
    var answerTwo = Math.floor(Math.random() * 7);

    // Adds the 2 random numbers
    var sum = answerOne + answerTwo;



    // when the sum = 7 or 11 you lose
    if(sum == 7 || sum == 11 ){
        Result.innerHTML = "CRAPS - you lose!";
        changeimg.scr = "Pictures/Losers.jpg";


        
    // when 1st random # 1 
    }else if (answerOne == answerTwo && answerOne % 2 == 0) {
        Result.innerHTML = "You Won";
        changeimg.scr = "Pictures/winner.png";
        
    } else {
        Result.innerHTML = "You Pushed!";
        changeimg.scr = "Pictures/pngwing.com.png";
    }

    randomOne.innerHTML = "Random # 1  = " + answerOne;
    randomTwo.innerHTML = "Random # 2  = " + answerTwo;
    Total.innerHTML = "Total = " + sum;
});    






