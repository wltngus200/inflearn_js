// 동기 : 하나의 작업이 실행되는 동안은 다른 작업을 동시에 진해하지 X, 앞의 작업이 종료된 후 다음 작업 진행(순차적 방식)
// 스레드 : 프로그램에서 작업을 처리하는 주체(자바스크립트는 싱글스레드로 동작)
// 동기적 처리의 문제점을 해결하기 위해 비동기처리(하나의 스레드에서 여러 작업 동시 처리)

// 비동기 처리를 위한 내장 함수 setTimeOut(callback, 3000ms(=3s)) 지정한 시간 만큼 기다렸다가 함수 실행
setTimeout(()=>{console.log("3초만 기다리세요")}, 3000);
// 비동기 함수이기때문에 일반 함수가 먼저 실행
console.log("종료");

// work함수 정의
//work함수는 함수를 인수로 받음, 비동기 함수로 5초를 기다리고 문자 출력 및 인수로 받은 함수 실행
const work=(callback)=>{
    setTimeout(()=>{
        console.log("5초만 기다리세요");
        callback(); // 함수 호출은 괄호를 빼 먹지 말자!!
    },5000);};
// 인수로서 들어가는 callback 함수
work(()=>{console.log("종료");});

// work A, B, C를 비동기적으로 처리
const workA=()=>{setTimeout(()=>{console.log("work A");},5000);};
const workB=()=>{setTimeout(()=>{console.log("work B");},3000);};
const workC=()=>{setTimeout(()=>{console.log("work C");},10000);};
// 동기처리 함수
const workD=()=>{console.log("work D");}

workA();
workB();
workC();
workD(); // 가장 먼저 출력