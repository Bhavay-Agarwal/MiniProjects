let score = JSON.parse(localStorage.getItem('score'))  || {wins: 0, losses: 0, ties: 0};

updateLeaderboard();

function GenerateMove(){
    let computerMove = '';
    let move = Math.floor(Math.random() * 3);
    if(move === 0){
        computerMove = 'Rock';
    }else if(move === 1){
        computerMove = 'Paper';
    }else{
        computerMove = 'Scissor';
    }
    return computerMove;
}

function getScore(playerMove){
    const computerMove = GenerateMove();
    let status = '';
    if(playerMove === 'Rock'){
        if(computerMove === 'Scissor'){
            score.wins++;
            status = 'You Won <i class="fa-solid fa-champagne-glasses" style="color: #e84949;"></i>';
        }else if(computerMove === 'Paper'){
            score.losses++;
            status = 'You Lost <i class="fa-solid fa-face-sad-tear" style="color: #e84949;"></i>';
        }else{
            score.ties++;
            status = 'Match Tied <i class="fa-solid fa-face-meh" style="color: #FFD43B;"></i>';
        }
    }else if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            score.wins++;
            status = 'You Won <i class="fa-solid fa-champagne-glasses" style="color: #e84949;"></i>';
        }else if(computerMove === 'Scissor'){
            status = 'You Lost <i class="fa-solid fa-face-sad-tear" style="color: #e84949;"></i>';
            score.losses++;
        }else{
            score.ties++;
            status = 'Match Tied <i class="fa-solid fa-face-meh" style="color: #FFD43B;"></i>';
        }
    }else{
        if(computerMove === 'Paper'){
            status = 'You Won <i class="fa-solid fa-champagne-glasses" style="color: #e84949;"></i>';
            score.wins++;
        }else if(computerMove === 'Rock'){
            status = 'You Lost <i class="fa-solid fa-face-sad-tear" style="color: #e84949;"></i>';
            score.losses++;
        }else{
            status = 'Match Tied <i class="fa-solid fa-face-meh" style="color: #FFD43B;"></i>';
            score.ties++;
        }
    }
    localStorage.setItem('score', JSON.stringify(score));
    printResult(status);
    printScore(playerMove, computerMove, status);
    updateLeaderboard();
}

function printResult(status){
    let resultElement = document.querySelector('.js-result');
    resultElement.innerHTML = status;
}



function printScore(playerMove, computerMove, status){
    let img1 = getEmoji(playerMove);
    let img2 = getEmoji(computerMove);
    let scoreElement = document.querySelector('.js-score');
    scoreElement.innerHTML = `You picked ${img1}. Computer picked ${img2}.`;
}

function getEmoji(move){
    if(move === 'Rock'){
        return '<i class="fa-solid fa-hand-back-fist fa-2x" style="color: #FFD43B;"></i>';
    }else if(move === 'Scissor'){
        return '<i class="fa-solid fa-hand-scissors fa-2x" style="color: #FFD43B;"></i>';
    }else{
        return '<i class="fa-solid fa-hand fa-2x" style="color: #FFD43B;"></i>'
    }
}

function updateLeaderboard(){
    let element = document.querySelector('.js-leaderboard');
    element.innerHTML =  `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function alertScore(playerMove, computerMove, status){
    alert(``);
}
