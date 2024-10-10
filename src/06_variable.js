// 함수 변수 지역변수 외부변수

// 함수 : 여러번 등장하는 코드를 묶어 하나의 명령으로 실행
let num1=10;
let num2=15;
let sum= num1+num2;
console.log(sum);

let num3=1;
let num4=5;
let sum2= num3+num4;
console.log(sum2);

// 함수의 선언
function add(num1, num2){
//function 함수 이름(매개 변수)
    console.log(num1+num2);
    //바로 결과값 출력
}
//함수 호출(인수) 
add(10, 15);

function add1(num1, num2){
    //실행 시킬 코드는 리턴문 위로
    console.log("함수 호출")
    //리턴을 통해 활용
    return num1+num2;
}
console.log(`두 숫자를 더한 결과는 ${add1(10, 15)}입니다.`)

//얼리리턴 패턴 : 특정 조건에 부합하지 않으면 바로 리턴
function func(num){
    if(num>0){
        if(num>=10){
            console.log("num의 값이 10보다 크거나 같습니다.");
        }else{
            console.log("num의 값이 0보다 크고 10보다 작습니다");
        }
    }else if(num===0){
        console.log("num의 값이 0입니다.");
    }else{
        console.log("num의 값이 0보다 작습니다.");
    }
}
func(15);

// 얼리리턴 : if와 return으로만 코드를 작성
function func2(num){
    if(num===0) return "num의 값이 0입니다.";
    if(num<0) return "num의 값이 0보다 작습니다.";
    if(num>=0) return "num의 값이 10보다 크거나 같습니다.";
    return "num의 값이 0보다 크고 10보다 작습니다." ;
}
console.log(func2(15));

// 즉시 실행 함수
function print(){
    console.log("자바스크립트");
}
print(); //함수 호출

//선언과 동시에 실행 (IIFE)
(function(){
    console.log("자바스크립트2");
})();

// 호출문의 위치에 따라 코드 흐름이 변경되기도 함
function func3(){
    console.log("2");
    console.log("3");
}
console.log("1");
func3();
console.log("4");

// 지역변수 : 함수블록의 내부에서만 유효한 변수
function add2(num1, num2){
    let sum3=num1+num2;
    return sum3;
}
add2(10, 15);
// console.log(sum3); sum3은 내부에서 선언되어 바깥에서는 쓸 수 없음

// 외부변수 : 함수의 외부에서 선언된 변수
let sum4=0;
function add3(num1, num2){sum4=num1+num2;}
add3(10,15);
console.log(sum4);