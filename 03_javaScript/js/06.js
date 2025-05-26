// 이름, 나이, 전화번호, 몸무게

function my_info() {
    let name = "홍길동"; 
    let age = 22; 
    let phone = '010-1111-1111'; 

    // ` (백틱) : 문자열과 변수를 + 연결 기호를 사용하지 않고, 한번에 처리 : ${변수명}
    // 리엑트 : 코드를 간결하게 처리함. 
    alert (`\t 이름은 : ${name}, 이고 \n 
    나이는 : ${age}, 이고 \n
    핸드폰은 : ${phone} 입니다.`); 
}

function brother_info() {
    let name = "홍길순"; 
    let age = 32; 
    let phone = '010-2222-2222'; 

    // ` (백틱) : 문자열과 변수를 + 연결 기호를 사용하지 않고, 한번에 처리 : ${변수명}
    // 리엑트 : 코드를 간결하게 처리함. 
    alert (`\t 이름은 : ${name}, 이고 \n 
    나이는 : ${age}, 이고 \n
    핸드폰은 : ${phone} 입니다.`); 
}

function parent_info() {
    let name = "홍길동 아빠"; 
    let age = 52; 
    let phone = '010-3333-3333'; 

    // ` (백틱) : 문자열과 변수를 + 연결 기호를 사용하지 않고, 한번에 처리 : ${변수명}
    // 리엑트 : 코드를 간결하게 처리함. 
    alert (`\t 이름은 : ${name}, 이고 \n 
    나이는 : ${age}, 이고 \n
    핸드폰은 : ${phone} 입니다.`); 

    console.log(`\t 이름은 : ${name}, 이고 \n 
    나이는 : ${age}, 이고 \n
    핸드폰은 : ${phone} 입니다.`

    ); 

}