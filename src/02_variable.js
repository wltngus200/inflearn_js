// 변수 선언 (let 변수이름 = 값;)
let color = "skyblue";
// 중도 변경
color = "yellow"
console.log(color);

// 변수 이름 규칙: $와 _를 제외한 기호는 사용 불가, 변수명 시작은 숫자 X, 예약어 사용 불가

// 긴 변수명은 카멜케이스(camelCase) 기법 사용
let isCatOrDog;

// C, JAVA와 달리 변수의 타입을 선언하지 않음 -> 타입 변경이 자유로움
let typed="cat";
typed=1;

// typeof 연산자로 현재 타입을 알 수 있음
let nowType="안녕하세요";
console.log(typeof nowType);
// 변수의 동적타입 지원
nowType=100;
console.log(typeof nowType);

// 상수 선언은 const
const color2="skyblue";
color2="yellow"; // 에러
console.log(color);
// 상수는 변경될 수 없다고 확신하는 값(생일, 이름), 기억하기 어려운 값(대문자로 선언) 등을 기록