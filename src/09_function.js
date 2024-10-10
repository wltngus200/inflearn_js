//함수 선언식(function)
//함수 표현식 : 변수에 값처럼 할당
let print1=function(){
    console.log("hello world");
};
print1(); //변수지만 함수를 값으로 가져 함수처럼 호출

//함수 선언식과 표현식의 차이
//함수 선언식 호이스팅 영향 O <-> 함수 표현식 호이스팅 영향 X

print2();
function print2(){
    console.log("hello world2");
}
// print3(); Cannot access 'print3' before initialization
let print3=function(){console.log("hello world3")};
print3();

//화살표형 함수(함수 표현식의 더 간략히 표현한 형태) = function을 사용하지 X
//화살표 모양을 사용해 변수에 함수를 값처럼 저장(변수 이름으로 호출 가능 + 호이스팅 X)
const print4=()=>{console.log("hello world4");}
print4();


// 콜백함수 : 다른 함수에 매개변수로 넘겨준 함수 
function add(num1, num2){ //매개변수인 num1, num2가 함수라면 콜백함수라고 칭할 수 있음
    console.log(num1+num2);
}
add(10, 15);

//콜백함수 예문
function start(name, callback){
    console.log(`안녕하세요 ${name}입니다.`);
    callback(); //finish
}
function finish(){ // 다른 함수에 인수로 호출되는 함수 = 콜백함수
    console.log("감사합니다.");
}
start("hyobin", finish); //start 호출
