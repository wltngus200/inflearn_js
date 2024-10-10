// 조건문 : 특정 조건이 성립되었을 때, 그에 해당하는 코드를 실행 

// if문 : 괄호 안 조건이 성립하면 중괄호 안 식을 수행
let num1=5;
if(num1===10){
    console.log("num1의 값은 10입니다.")
}

// if-else문 : if 문에서 else문을 추가해 그렇지 않으면
// 특정 조건에 만족할 경우와 그렇지 않을 경우를 구분해 서로 다른 코드
let num2=5; 
if(num2===10){
    console.log("num2의 값은 10입니다.")
}else{
    console.log(`num2의 값은 ${num2}입니다.`)
}

// if-else if : 만족, 불만족이 아니라 여러 조건에 따라 서로 다른 조건 실행시
let num3=5; 
if(num3===10){
    console.log("num3의 값은 10입니다.");
}else if(num3<10){
    console.log("num3의 값은 10보다 작습니다.");
}else{
    console.log("num3의 값은 10보다 큽니다.");
}

// switch-case문 : 괄호안 변수와 값과 안의 값이 일치하는 경우 해당 블록 실행 
let fruit="apple";
switch(fruit){
    case "banana": console.log("바나나");
    break; // switch문을 빠져나감
    case "orange": console.log("오렌지");
    break; //생략했을 경우 해당하는 코드 이후의 모든 코드 실행
    case "grape": console.log("포도");
    break;
    case "apple": console.log("사과");
    break;
    // 지정하지 않은 예외의 값 
    default:console.log("다른 과일");
}