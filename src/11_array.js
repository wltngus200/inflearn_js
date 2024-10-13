// 배열은 객체와 달리 대괄호로 묶임

// 배열 생성 1 : 생성자(new 키워드)
let arr=new Array();
console.log(arr);

// 특정 요소를 여러개의 값을 넣거나, 원하는 공간의 크기
let arr1=new Array(1,2,3);
let arr2=new Array(3);
console.log(arr1);
console.log(arr2);

// 배열 생성 2 : 배열 리터럴, 값이 순서대로 배치됨
let arr3=[1,2,3];
let arr4=[3];
console.log(arr3);
console.log(arr4);

// 배열에 들어가는 값은 제한이 없음
let typeArr=[{name:"홍길동"}, 1, "array", function(){console.log("hello world");}, null, undefined]
console.log(typeArr);

// 배열에 접근, 수정, 삭제
let arr5=[1, "hello", null];
console.log(arr5[0]);
console.log(arr5[1]);
console.log(arr5[2]);
console.log(arr5[3]); //undefined

// 추가 방법 1 : push (맨 마지막에 추가)
arr5.push(4);
console.log(arr5);
// 추가 방법 2 : unshift 배열 내장 함수(맨 앞에 추가)
arr5.unshift(0);
console.log(arr5);

// 수정 : 인덱스로 직접 접근
arr5[0]=5;
arr5[2]=undefined;
console.log(arr5);

// 객체와 마찬가지로 const로 선언(상수)해도 값 변경이 이루어짐

// 삭제 1 : pop 배열 내장 함수(마지막 요소 삭제) 
const arrPop=[1, "hello", null];
console.log(arrPop.length);
arrPop.pop(); 
console.log(arrPop);
console.log(arrPop.length);

// 삭제 2 : shift 배열 내장 함수(첫 번째 요소 삭제)
arrPop.shift();
console.log(arrPop);
// 배열의 길이 : length라는 프로퍼티에 길이를 가짐
console.log(arrPop.length);

