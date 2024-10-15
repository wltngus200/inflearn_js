// 배열의 모든 요소에 접근(for문)
let arr=[1,2,3,4,5];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// 배열의 모든 요소에 접근(forEach문)
// 함수를 매개변수로 사용하는 콜백함수(콜백함수를 화살표함수로 작성)
// 콜백함수에 3가지의 파라미터 전달 가능
// 1. 처리할 현재 요소(current value) -> elm=arr배열의 각 요소
arr.forEach((elm)=>{
    console.log(elm)
});
// 2. 실제 배열 요소의 순서를 나타내는 값(index)
// 선택적인 매개변수로 첫 번째 매개변수 옆에 두번째 매개변수로 작성
arr.forEach((elm, idx)=>{
    console.log(`${idx}번째 요소는 ${elm}입니다.`)
});
// 3. 배열(array) : 실제 배열 자체가 출력
arr.forEach((elm, idx, array)=>{
    console.log(`${idx}번째 요소는 ${elm}입니다.`)
    console.log(array);
});

// 배열의 모든 요소에 *10을 하는 코드
let newArr=[]; // 빈 array
for(let i=0; i<arr.length; i++){
    newArr.push(arr[i]*10);
}
console.log(newArr);

// map 내장함수를 통해 모든 요소를 변화
// 전달한 callback함수를 호출한 결과를 모아서 새로운 배열로 반환
// (배열의 모든 요소에 연산을 적용하고 새로운 배열로 돌려받을 수 있음)
// forEach와 마찬가지로 콜백함수의 파라미터로 3가지 받을 수 있음
let newArr2=arr.map((elm)=>{
    return elm*10
});
console.log(newArr2);

// 혼자 한 것 기존 배열을 대체할 수 없었다
// arr.forEach((elm)=>{
//     arr.push(elm*=10);
//     arr.shift;
// });
// console.log(arr);


// ========배열에서 특정 요소 조회========
let colors=["green", "blue", "purple"];
console.log(colors[2]);
console.log(colors[colors.length-1]); // 마지막 요소 출력
// at 메소드 : 배열의 마지막 값을 호출할 때 간편
console.log(colors.at(-1));

//includes : 매개변수로 받은 요소를 배열이 포함하고 있는지 확인(boolean)
console.log(colors.includes("blue"));
console.log(colors.includes("yellow"));
// 추가적으로 index값 전달 -> 해당 인덱스부터 조회함
console.log(colors.includes("blue",2));
console.log(colors.includes("blue",1));

// indexOf: 특정 값을 지닌 요소의 인덱스 번호를 리턴
console.log(colors.indexOf("purple"));
console.log(`${colors.indexOf("purple")}번째에 있습니다`); // 백틱 활용
// 배열에 존재하지 않으면 -1을 리턴
console.log(colors.indexOf("yellow"));
// 찾기 시작할 위치를 지정 가능
console.log(colors.indexOf("blue",1));
console.log(colors.indexOf("blue",2));
// 요소가 객체거나 배열일 경우 조회할 수 없다
let colors2=[
    {id:1, color:"green"},
    {id:2, color:"blue"},
    {id:3, color:"purple"},
]

console.log(colors2.indexOf("purple"));

// findIndex 함수 -> 배열의 모든 요소에 순차적으로 콜백함수를 수행 가장 먼저 만족하는 값
// 콜백함수의 파라미터로 요소, 인덱스, 배열을 작성 가능
let idx=colors2.findIndex((elm)=>elm.color==="purple");
console.log(idx);
// 콜백함수의 파라미터로 요소, 인덱스, 배열을 작성 가능
colors2.findIndex((elm, idx, arr)=>
    console.log(`${idx}번째 값은 id:${elm.id}, color:${elm.color}}입니다.`));
colors2.findIndex((elm, idx, arr)=>console.log(arr));

// find 찾아낸 값 그 자체를 반환 첫 번째로 조회되는 값, 콜백함수로 3개의 파라미터, 찾을 수 없으면 undefined
let idx2=colors2.find((elm)=>elm.color==="purple");
console.log(idx2);

// ========배열에서 원하는 요소 추출========
// filter : 특정 조건을 만족하는 요소만 추출해 새로운 배열
let filterArr=colors2.filter((elm, idx, arr)=>elm.id>1);
console.log(filterArr);
// slice : 특정 부분만 잘라서 배열을 리턴 파라미터로 begin&end
let colors3=[
    {id:1, color:"green"},
    {id:2, color:"blue"},
    {id:3, color:"purple"},
    {id:4, color:"yellow"}
]
let sliceArr=colors3.slice(1,3);
console.log(sliceArr);