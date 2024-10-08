//산술 연산자(사칙연산 + 나머지 연산 + 증감연산자)
let num1=10;
let num2=5;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

let num3=10;
console.log(num3++); //후위연산 : 연산을 끝내고 증감
console.log(num3);
console.log(++num3); //전위연산 : 연산을 하기 전 증감

console.log("=====");

let num4=10;

console.log(num4--);
console.log(num4);
console.log(--num4);

// 대입연산자와 복합대입연산자
let num5=20;
num5=num5+5;
console.log(num5);
num5+=5;
console.log(num5)

// 논리 연산자
let isOpen=false;
let isClicked=true;
console.log(!isOpen);
console.log(!isClicked);
//or연산자 하나라도 true라면 true
let a= true || true;
let b= true || false;
let c= false || true;
let d= false || false;
console.log(a,b,c,d);
//and 연산자 모두 true일 때 true
let a1= true && true;
let b1= true && false;
let c1= false && true;
let d1= false && false;
console.log(a1,b1,c1,d1);


// 비교연산자(일치, 불일치, 대소비교)
let num6=10;
let num7="10";
console.log(num6===num7); 
console.log(num6==num7); 
console.log("=====");
console.log(num6!==num7); 
console.log(num6!=num7); 
// 대소비교 연산자
let a2=10;
let b2=20;
let c2=10;
console.log(a2<b2);
console.log(a2>b2);
console.log(b2>=c2);
console.log(b2>c2);
console.log(a2<=c2);
console.log(a2>c2);

// 연결연산자 문자열과 문자열을 이음
let a3="안녕";
let b3="자바스크립트";
console.log(a3+b3);

// null병합 연산자 ??
// 지정한 변수의 값이 null, undifined일 경우 뒤의 값을 대입
let num; 
num=num ?? 20; 
console.log(num);
let numA=100; 
numA=numA ?? 20; 
console.log(numA);

// 삼항연산자
let numB=100;
console.log(num%2===0?"짝수":"홀수");