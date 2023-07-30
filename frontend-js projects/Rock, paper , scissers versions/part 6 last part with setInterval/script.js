 // const score = {
        //     wins :0,
        //     losses:0,
        //     ties:0
        // }
       // we dont make score obj in func because
        // whenever func runs it will make new score


        // json convert back to obj
        let score =  JSON.parse(localStorage.getItem('score')) || {
            wins :0,
            losses :0,
            ties:0
        }; 
        // document.querySelector('.js-score').innerHTML=`Wins : ${score.wins} , Losses : ${score.losses}, Tie : ${score.ties}`;

       

    //   if(score === null){  /*(!score)*/
    //     score = {
    //         wins : 0,
    //         losses: 0,
    //         ties :0
    //     };
       
       updateScoreElement();

       let isAutoPlaying = false;
       let intervalId;
       function autoPlay(){
        if(!isAutoPlaying){
            intervalId=setInterval(function(){
                const playerMove=pickCompMove();
                playGame(playerMove);
            },1000);
            isAutoPlaying=true;

        }
        else{
            clearInterval(intervalId);
            isAutoPlaying=false;

        }
       
       }
    
      function playGame(userMove){


     const compMove = pickCompMove();
   //   console.log(compMove);

     let result = '';
   //   for scissors
      if(userMove === 'scissors'){ 

     if(compMove==='rock'){
        result='you lose'
     }else if(compMove==='paper'){
        result='you win'
     }else if (compMove==='scissors'){
        result='tie';
     }
   }
   // for paper
   if(userMove === 'paper'){ 
   if(compMove==='rock'){
        result='you win'
     }else if(compMove==='paper'){
        result='tie'
     }else if (compMove==='scissors'){
        result='you lose';
     }
   }

   // for rock

   if(userMove === 'rock'){ 
   if(compMove==='rock'){
        result='tie'
     }else if(compMove==='paper'){
        result='you lose'
     }else if (compMove==='scissors'){
        result='you win';
     }
   }

   if(result === 'you win'){
    score.wins += 1;
   }else if(result === 'you lose'){
    score.losses +=1;
   }else if(result === 'tie'){
    score.ties+=1;
   }
    // localStorage dont sport obj it only store string
    // so we will convert obj to string using json 
    localStorage.setItem('score', JSON.stringify(score));

   

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = `You: ${result}`;
    document.querySelector('.js-moves').innerHTML = ` You
        <img src="${userMove}.png">
        <img src="${compMove}.png" >
        computer`;
    

    //  alert(`You picked ${userMove} , Computer picked ${compMove}. ${result} 
    //  Wins : ${score.wins} , Losses : ${score.losses}
    // , Tie : ${score.ties}`);
    
    
      }

        function updateScoreElement(){
            document.querySelector('.js-score').innerHTML = `Wins : ${score.wins} , Losses : ${score.losses}
            , Tie : ${score.ties}`;

        };



        function pickCompMove() {
            const randomNumber= Math.random();

            let compMove='';
    
     if(randomNumber >=0 && randomNumber < 1/3){
         compMove= 'rock';
     }
     else if(randomNumber >= 1/3 && randomNumber < 2/3){
         compMove = 'paper';
     }
     else if(randomNumber >= 2/3 && randomNumber < 1){
         compMove = 'scissors';
     }

     return compMove;
        }
// return statement -> lets us get a value out of the function

 