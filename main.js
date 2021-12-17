// HTML 요소를 저장함
const resultText = document.querySelector('#resultText'); // 결과메세지
const youWinCounter = document.querySelector('#youWinCounter'); // 내가 이긴 횟수
const computerWinCounter = document.querySelector('#computerWinCounter'); // 컴퓨터가 이긴 횟수
const youSubmit = document.querySelector('#youSubmit'); // 내가 제출한 것
const computerSubmit = document.querySelector('#computerSubmit'); // 컴퓨터가 제출한 것
const rockButton = document.querySelector('#rockButton'); // 주먹 버튼
const paperButton = document.querySelector('#paperButton'); // 보 버튼
const scissorsButton = document.querySelector('#scissorsButton'); // 가위 버튼
const rockPer = document.querySelector('#rockPer'); // 주먹낼 확률
const paperPer = document.querySelector('#paperPer'); // 보낼 확률
const scissorsPer = document.querySelector('#scissorsPer'); // 가위낼 확률

// 이미지 파일 저장
const rockImg = "./img/rock.png";
const paperImg = "./img/paper.png";
const scissorsImg = "./img/scissors.png";

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

//퍼센트 합이 100% 초과, 미달하는지 확인..
const validatePercentSum = (per) => {  
    let perSum = Number(rockPer.value) + Number(paperPer.value) + Number(scissorsPer.value); 
    if (perSum > 100) {
        alert('100%를 초과할 수 없습니다.');
        per.value = Number(per.value) - (perSum - 100);
        return false
    } else if(perSum < 100) {
        alert('100%보다 작을 수  없습니다.');
        per.value = Number(per.value) - (perSum - 100);
        return false
    } else{
        return true;
    }
};


//컴퓨터 랜덤 제출
const randomComputer = function() {

    //랜덤 값 생성
    const randomValue = Math.floor(Math.random() * 100);

    //랜덤값이 해당 범위에 있으면 처리할 로직?
    if(randomValue < rockPer.value){
        computerSubmit.src = rockImg;
        computerSubmit.alt = rock;
    } else if (randomValue < Number(rockPer.value) + Number(paperPer.value)){
        computerSubmit.src = paperImg;
        computerSubmit.alt = paper;
    } else if (randomValue < Number(rockPer.value) + Number(paperPer.value) + Number(scissorsPer.value)){
        computerSubmit.src = scissorsImg;
        computerSubmit.alt = scissors;
    };

    //랜덤값 확인
    console.log(`랜덤 값은 : ${randomValue}`);
};

//가위바위보 결과 함수
const matchResult = function() {

    let youWin = 0;
    let computerwin = 0;

    //매치 결과에 따라 나 혹은 컴퓨터가 1 증가
    if (youSubmit.alt == rock) {
        if(computerSubmit.alt == scissors){
            youWin += 1;
        }
        if(computerSubmit.alt == paper){
            computerwin += 1;        
        }
        if(computerSubmit.alt == rock){
            youWin += 0;
            computerwin += 0;
        }
    };

     if (youSubmit.alt == paper) { 
        if(computerSubmit.alt == scissors){
            computerwin += 1;
        } 
        if(computerSubmit.alt == rock){
            youWin += 1;
        } 
        if(computerSubmit.alt == paper) {
            youWin += 0;
            computerwin += 0;
        }
    };
    
    if (youSubmit.alt == scissors){
        if(computerSubmit.alt == rock){
            computerwin += 1;
        } 
        if(computerSubmit.alt == paper){
            youWin += 1;
        } 
        if(computerSubmit.alt == scissors) {
            youWin += 0;
            computerwin += 0;
        }
    };
   
    // 값이 큰사람이 승리, 같으면 동점
    if (youWin > computerwin) {
        youWinCounter.value = Number(youWinCounter.value) + youWin;
        resultText.textContent = "You Win!"
    } else if (youWin < computerwin) {
        computerWinCounter.value = Number(computerWinCounter.value) + computerwin;
        resultText.textContent = "Computer Win!"
    } else if (youWin == 0 && computerwin == 0) {
        resultText.textContent = "The game ended in a tie. try again !"
    };


    
};


const startMatch = (srcImg, alt) => {
        youSubmit.src = srcImg; //이미지 출력
        youSubmit.alt = alt; // alt 값 수정
        randomComputer(); // 컴퓨터 제출
        matchResult();  // 매치결과 출력 
}


// 주먹버튼 눌렀을때 이벤트
rockButton.addEventListener('click', () => {
    if(validatePercentSum(rockPer)){
        startMatch(rockImg, rock);
    }
});

//보버튼 눌렀을때 이벤트
paperButton.addEventListener('click', () => {
    if(validatePercentSum(paperPer)){
        startMatch(paperImg, paper);
    }
});

//가위버튼 눌렀을때 이벤트
scissorsButton.addEventListener('click', () => {
    if(validatePercentSum(scissorsPer)){
        startMatch(scissorsImg, scissors);
    }
});