// 호이스팅 : 아직 선언되지 않은 함수, 변수를 해당 스코프의 맨 위로 끌어올려 사용

// 함수 호이스팅 : 함수의 선언문을 함수가 갖는 스코프(유효범위)의 가장 위로 끌어올려 코드를 해석 하는 방식
print(); //선언 전 호출

function print(){
    console.log("hello world");
}

// 변수 호이스팅 : 변수의 초기화를 제외하고 선언문만을 위로 끌어올리는 방식
console.log(num); //undefined
var num=10;
// 아래의 방식처럼 선언문만 위로 올라가는 방식으로 해석
// var num; 
// console.log(num);
// num=10; //변수 초기화

console.log(num1);
var num1=10;
// 적용 안 됨
console.log(num2);
let num2=10;
console.log(num3);
const num3=15;

// Temporal Dead Zone(일시적인 사각지대) : 변수를 사용하는 것을 허용하지 않는 공간 -> 두가지의 에러 발생 원인
//let과 const는 호이스팅이 발생하지 않는 것이 아니라 var와는 다르게 변수스코프의 맨 위에서 변수의 초기화가 완료되기까지 머무름
//var는 변수 선언 완료시 메모리 공간 할당 / let, const는 초기화가 완료 되어야 메모리에 공간 할당
//이 외에도 TDZ에 머무는 구문이 있기 때문에, 선언 후 호출하는 구조로 코드를 작성할 것을 권장(+ 가독성, 이해도)