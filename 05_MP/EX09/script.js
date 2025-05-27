// 변수 선언
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

// 계산기 디스플레이
let realTimeScreenValue = []

// Clear 버튼 기능
clearbtn.addEventListener("click", () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// 버튼 클릭 시 값 가져오기 및 화면에 표시
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Erase 버튼이 아닌 경우
        if (!btn.id.match('erase')) {
            // 버튼 값 화면에 표시
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // 실시간으로 계산 결과 표시
            if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }

        // Erase 버튼 클릭 시
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // Evaluate 버튼 클릭 시
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // undefined 에러 방지
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }
    })
})