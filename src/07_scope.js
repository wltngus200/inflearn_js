// 스코프 : 변수 혹은 함수가 갖게되는 유효범위

// 전역스코프 : 어디서든지 해당 변수에 접근 가능(외부변수가 가짐)
// 지역스코프 : 지역을 벗어난 곳에서는 접근 불가능(전역변수가 가짐)
const num=10;
function print(){
    const num=100;
    console.log(`지역 스코프 ${num}`);
}
print();
console.log(`전역 스코프 ${num}`);

//지역변수의 종류 : 블록스코프, 함수스코프
// 블록스코프{} : 같은 블록에서만 접근 가능
function print2(){
    for(let i=0; i<10; i++){ 
        console.log(`블록스코프: ${i}`);
    }
    // console.log(i); Error
}
print2();

//let과 var 변수
let num1=10;
var num2=20;
num1=100;
num2=200;
console.log(num1);
console.log(num2);
// 유사하지만 var는 오래된 변수 선언 키워드

//let과 var변수의 차이 1 : 중복 선언
//let의 중복 선언의 경우
let num3=10; 
// let num3=100; 중복된 이름으로 다시 선언할 경우 에러
console.log(num3);

//var의 중복 선언의 경우
var num4=20; 
var num4=200; //재선언해도 최종 선언된 값을 부여
// 기존 선언 변수는 무시되기 때문에, 특정 변수의 선언 및 사용 위치 파악이 어려움 
console.log(num4);

//let과 var변수의 차이 2 : let(블록스코프) vs var(함수스코프)
function print3(){
    for(var i=0; i<10; i++){ 
        console.log(`블록스코프2: ${i}`);
    }
    //let은 for문의 내부에서만 접근 가능했기에 에러
    console.log(i); //에러가 발생하지 않음
    //var 함수는 함수스코프이기 때문에 해당 함수 내에서 계속 동작
}
print3();