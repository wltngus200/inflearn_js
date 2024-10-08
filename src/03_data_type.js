// 원시타입과 비원시타입
let number=123;
number="123";
let array=[1,"2", 3];

// 숫자형(number) 사칙연산 가능
let number2=25;
console.log(number2+5);
console.log(number2-5);
console.log(number2*5);
console.log(number2/5);

// 특수한 숫자형
let number3=25;
number3=10.00123;
number3=Infinity;
number3=NaN;

let number_infinity=10; 
console.log(number_infinity/0); //Infinity
let number_NaN=10; 
console.log("hello world"/number_NaN); //NaN

//BigInt의 선언
let big1=9007199254740991n;
let bid2=BigInt("9007199254740991")
//BigInt형끼리만 연산이 가능함 
let big3=10n;
let big4=5n;
console.log(big3+big4);

// 문자열 String
let name1="hello"; // 큰 따옴표
let name2='hello'; // 작은 따옴표
let name3=`hello`; // 역따옴표(백틱)
// 백틱으로 묶을 경우 문자열 안에 특정 변수에 저장된 값 넣기 가능

// 백틱(`)의 기능 : 다른 변수값 대입(탬플릿 리터럴)
let name="hyobin";
let intro=`제 이름은 ${name}입니다.`
console.log(intro);

//boolean형
let isClicked=false;
let isOpen=true;

if(isClicked){
    console.log("클릭O");
}else{
    console.log("클릭X");
}

// null형
let typeNull=null;
// 하나의 값으로 활용하는 것이 아니라, null값만을 포함
// 존재하지 않거나 알수 없는 값

// undifined 아무런 값도 할당하지 않음
// null처럼 undifined값만을 가짐
let name4;
console.log(name4);

//형변환
// 묵시적 형변환 : 의도해서가 아니라 자동으로 형변환
// 곱하기 나누기 빼기는 문자열->숫자
let num1="15";
let num2=5;
console.log(num1/num2);
// 명시적 형변환 : parseInt 내장함수
// 더하기는 숫자->문자열
console.log(num1+num2);
console.log(parseInt(num1)+num2);
