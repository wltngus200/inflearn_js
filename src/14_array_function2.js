// concat : 2개의 배열을 이어 붙임
let arr1=["green","blue"];
let arr2=["purple","yellow"];
console.log(arr1.concat(arr2));

// join : 배열 요소들의 값을 문자열로 이어줌 구분자(default=,) 존재
let arr=["green","blue","purple","yellow"];
console.log(arr.join());
console.log(arr.join("/")); // 구분자 지정

// sort : 배열의 정렬
let sortArr=["green","blue","purple"];
sortArr.sort();
// 기본적으로 오름차순
sortArr.sort();
console.log(sortArr);
// 매개변수로 함수, 내림차순으로 사용하기 위해서는 비교함수를 제작
    // 내림차순: 이전 값이 다음 값보다 큰 정렬법
const compare=(a,b)=>{
    //a:다음요소, b:이전요소
    if(a>b) return -1; // a가 b 앞
    else if(a<b) return 1; // b가 a 앞
    else return 0; // 변경하지 않는다
};
sortArr.sort(compare);
console.log(sortArr);

// 숫자가 담긴 배열 정렬
let numbers=[1, 100, 25, 60, 120, 3];
numbers.sort();
console.log(numbers); // 입력된 순서 그대로 정렬됨
// compare 함수는 0보다 작은 값이 반환 되면 이전 요소와 다음 요소의 위치를 바꿈
// 작은 수부터 나열 -> 다음 요소(a) - 이전 요소(b) > 0
const compare2=(a,b)=>{
    return a-b;
};
numbers.sort(compare2);
console.log(numbers);
// 내림차순으로 정렬
const compare3=(a,b)=>{
    return b-a;
};
numbers.sort(compare3);
console.log(numbers);
// 바뀐 순서로 배열이 저장되기에 주의 필요

// reduce : 각 요소에 대해 함수를 실행하고 누적 값 산출
let numbers2=[1, 100, 25, 50];
let sum=0;
numbers2.forEach((elm) => {
    sum+=elm;
});
console.log(sum);
console.log(12345678);
// 콜백함수(accumulatior, current value, current index)와 initial value 초기값
//accumulatior: 콜백함수의 반환값을 누적하는 매개변수
//current value : 현재 처리할 요소의 값
//current index : 처리할 현재 배열 요소의 인덱스
//initial value : accumulatior가 가장 처음에 가질 값
let reduceSum=numbers2.reduce((acc, cur, idx)=>{
    console.log(acc,cur, idx);
    return acc+cur;
}, 0);
console.log(reduceSum);

// isArray : 매개변수가 배열인지 아닌지 확인
let a=Array.isArray([1, 100, 50]); // 배열
let b=Array.isArray({id:1, color: "green"}); // 객체
let c=Array.isArray("String"); // 문자열
let d=Array.isArray(undefined); // undefined
console.log(a, b, c, d);

// 추가적인 내장 함수는 developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array