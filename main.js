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
const paperPer = document.querySelector('#paperkPer'); // 보낼 확률
const scissorsPer = document.querySelector('#scissorsPer'); // 가위낼 확률


// 이미지 파일 저장
const rockImg = "./img/rock.png";
const paperImg = "./img/paper.png";
const scissorsImg = "./img/scissors.png";


//주먹낼 확률을 수정한 결과의 합이 100%이 넘어가면 경고
const rockPerSum = function() {   
    let perSum = Number(rockPer.value) + Number(paperPer.value) + Number(scissorsPer.value);
    if (perSum > 100) {
        alert('100%를 초과할 수 없습니다.');
        rockPer.value = Number(rockPer.value) - (perSum - 100);
    } 
};

//보낼 확률을 수정한 결과의 합이 100%이 넘어가면 경고
const paperPerSum = function() { 
    let perSum = Number(rockPer.value) + Number(paperPer.value) + Number(scissorsPer.value);  
    if (perSum > 100) {
        alert('100%를 초과할 수 없습니다.');
        paperPer.value = Number(paperPer.value) - (perSum - 100);
    } 
};

//가위낼 확률을 수정한 결과의 합이 100%이 넘어가면 경고
const scissorsPerSum = function() {  
    let perSum = Number(rockPer.value) + Number(paperPer.value) + Number(scissorsPer.value); 
    if (perSum > 100) {
        alert('100%를 초과할 수 없습니다.');
        scissorsPer.value = Number(scissorsPer.value) - (perSum - 100);
    } 
};

/* 내가 생각했던 코드.....
// 컴퓨터가 주먹내는 함수
const rockComputerSubmit = function() {
    computerSubmit.src = rockImg;
};

//컴퓨터가 보 내는 함수
const paperComputerSubmit = function() {
    computerSubmit.src = paperImg;
};

//컴퓨터가 가위내는 함수
const scissorsComputerSubmit = function() {
    computerSubmit.src = scissorsImg;
};*/


//컴퓨터 랜덤 제출
const randomComputer = function() {

    //랜덤 값 생성
    const randomValue = Math.floor(Math.random() * 100);

    //랜덤값이 해당 범위에 있으면 처리할 로직?
    if(randomValue < rockPer.value){
        computerSubmit.src = rockImg;
        computerSubmit.alt = "rock"
    } else if (randomValue < Number(rockPer.value) + Number(paperPer.value)){
        computerSubmit.src = paperImg;
        computerSubmit.alt = "paper";
    } else if (randomValue <Number(rockPer.value) + Number(paperPer.value) + Number(scissorsPer.value)){
        computerSubmit.src = scissorsImg;
        computerSubmit.alt = "scissors";
    };

    //랜덤값 확인
    console.log(`랜덤 값은 : ${randomValue}`);




/* 내가 생각했던 코드.....
    //배열에 저장
    const perArray = [
        {title : '주먹', value : rockPer.value}, 
        {title : '보', value : paperPer.value},
        {title : '가위', value : scissorsPer.value}
    ];
  
    //값이 큰 순서대로 재배치
    for(let i = 0; i < perArray.length; i++){
        for(let j = i+1; j <perArray.length; j++){
            if(perArray[i].value < perArray[j].value){
                const titleTemp = perArray[i].title;
                const valueTemp = perArray[i].value;
                perArray[i].title = perArray[j].title;
                perArray[i].value = perArray[j].value;
                perArray[j].title = titleTemp;
                perArray[j].value = valueTemp;
            }
        }
    }

    
    if(randomValue < perArray[0].value){
        if(perArray[0].title === "주먹"){
            rockComputerSubmit();
            computerSubmit.alt = "rock";
        } else if(perArray[0].title === "보"){
            paperComputerSubmit();
            computerSubmit.alt = "paper";
        } else if(perArray[0].title === "가위"){
            scissorsComputerSubmit();
            computerSubmit.alt = "scissors";
        }
    } else if(randomValue < perArray[0].value + perArray[1].value){
        if(perArray[1].title === "주먹"){
            rockComputerSubmit();
            computerSubmit.alt = "rock";
        } else if(perArray[1].title === "보"){
            paperComputerSubmit();
            computerSubmit.alt = "paper";
        } else if(perArray[1].title === "가위"){
            scissorsComputerSubmit();
            computerSubmit.alt = "scissors";
        }
    } else if(randomValue < perArray[0].value + perArray[1].value + perArray[2].value){
        if(perArray[2].title === "주먹"){
            rockComputerSubmit();
            computerSubmit.alt = "rock";
        } else if(perArray[2].title === "보"){
            paperComputerSubmit();
            computerSubmit.alt = "paper";
        } else if(perArray[2].title === "가위"){
            scissorsComputerSubmit();
            computerSubmit.alt = "scissors";
        }
    }*/

};

//가위바위보 결과 함수
const matchResult = function() {

    let youWin = 0;
    let computerwin = 0;

    //주먹, 가위, 보 적혀있는 alt값 저장
    const youAlt = youSubmit.alt;
    const computerAlt = computerSubmit.alt;

    //매치 결과에 따라 나 혹은 컴퓨터가 1 증가
    if (youAlt === "rock" && computerAlt === "scissors"){
        youWin += 1;
    } else if (youAlt === "rock" && computerAlt === "paper"){
        computerwin += 1;        
    } else if (youAlt === "rock" && computerAlt === "rock"){
        youWin += 0;
        computerwin += 0;
    } else if (youAlt === "paper" && computerAlt === "scissors"){
        computerwin += 1;
    } else if (youAlt === "paper" && computerAlt === "rock"){
        youWin += 1;
    } else if (youAlt === "paper" && computerAlt === "paper") {
        youWin += 0;
        computerwin += 0;
    } else if (youAlt === "scissors" && computerAlt === "rock"){
        computerwin += 1;
    } else if (youAlt === "scissors" && computerAlt === "paper"){
        youWin += 1;
    } else if (youAlt === "scissors" && computerAlt === "scissors") {
        youWin += 0;
        computerwin += 0;
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

// 주먹버튼 눌렀을때 이벤트
rockButton.addEventListener('click', () => {
    //주먹 이미지 출력
    youSubmit.src = rockImg;
    //alt 값 수정
    youSubmit.alt = "rock";
    //컴퓨터 랜덤 제출 함수 실행
    randomComputer();
    //매치 결과 출력
    matchResult();
});

//보버튼 눌렀을때 이벤트
paperButton.addEventListener('click', () => {
    //보 이미지 출력
    youSubmit.src = paperImg;
    //alt 값 수정
    youSubmit.alt = "paper";
    //컴퓨터 랜덤 제출 함수 실행
    randomComputer();
    //매치 결과 출력
    matchResult();
});

//가위버튼 눌렀을때 이벤트
scissorsButton.addEventListener('click', () => {
    //가위 이미지 출력
    youSubmit.src = scissorsImg;
    //alt 값 수정
    youSubmit.alt = "scissors";
    //컴퓨터 랜덤 제출 함수 실행
    randomComputer();
    //매치 결과 출력
    matchResult();
});