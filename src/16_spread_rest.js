// spread : 배열의 요소나 객체의 프로퍼티를 펼치는 역할
const toy={type:"bear", price: 15000};
const blueToy={type:"bear", price: 15000, color:"blue"};
const yellowToy={type:"bear", price: 15000, color:"yellow"};
// 비슷한 프로퍼티 값을 가지는 객체들 생성에 용이 : ...으로 표시
const sprBlueToy={...toy, color:"blue"};
const sprYellowToy={...toy, color:"yellow"};

console.log(blueToy);
console.log(sprBlueToy);
console.log(yellowToy);
console.log(sprYellowToy);

// spread Array : 순서에 상관 없이 여러번 반복해 사용
const color1=["red","orange","yellow"];
const color2=["blue","navy","purple"];
const rainbow=[...color1, "green", ...color2]
console.log(rainbow);

//rest : 나머지 매개변수, 특적 부분을 하나의 배열이나 객체로 묶어줌<->spread
const orangeToy={type:"bear", price: 15000, color:"orange"};
const orangeToy2={type2:"bear", price2: 15000, color2:"orange"};
// 구조 분해 할당과 함께 사용
const {type, price, color}=orangeToy;
console.log(type, price, color);
const {type2,...rest}=orangeToy2;
// const {...rest, type}=orangeToy2; 항상 맨 마지막에 작성해야함 주의필요!!
console.log(type2, rest); // 객체 형태로 출력

// rest Array
const powerRangers=["blue", "pink","red", "yellow", "black"];
// 일종의 변수 같은 이름을 사용할 수 없었음
const [c1, c2, ...rest2]=powerRangers;
console.log(c1, c2, rest2);

// rest 문법의 함수에서의 활용
const print=(a,b,c,d,e,f)=>{console.log([c,d,e,f])};
print(1,2,3,4,5,6);
// 6개보다 많은 변수를 받고 index가 빠른 두 변수 외에 모든 변수 출력
const print2=(a,b,...rest)=>{console.log(a, b, rest)};
print2(11,12,13,14,15,16,17,18);

// spread와 rest의 활용
const number=[1,2,3,4,5,6];
const print3=(a,b,c,d,e,f)=>{console.log(a,b,c,d,e,f)};
print3(number[0],number[1],number[2],number[3],number[4],number[5]);

// spread 문법은 인수로 많은 값을 넘겨줘야 할 때 용이
const number2=[1,2,3,4,5,6];
const sprPrint3=(a,b,c,d,e,f)=>{console.log(a,b,c,d,e,f)};
sprPrint3(...number2);

// rest 문법은 매개변수를 전달 받을 때 깔끔한 코드
const number3=[1,2,3,4,5,6];
// number3이 6개임을 알고 있어 파라미터를 6개로 작성 number3이 변경될 시 코드 수정 필요 및 수가 많을 경우 작성 어려움
const sprResPrint3=(...rest)=>{console.log(rest)};
sprResPrint3(...number3);