console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// for문 : 조건에 따라 일정 횟수만큼 같은 코드를 반복
// 초기화, 조건, 증감식, 실행해야 할 코드
for(let i=1; i<6; i++){
    console.log(i);
}
// 역순
for(let i=5; i>=1; i--){
    console.log(i);
}

// while문 : 조건을 만족할 때까지 동일한 코드 반복
let i=1;
while(i<6){
    console.log(i)
    i++;
}
// for문을 통해 배열의 모든 요소에 접근
let arr1=[2,4,6,8,10];
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);   
}

// 객체의 프로퍼티를 순회하기 위해선 배열 형식으로 변경 필요
let person={name:"홍길동", age:25, height:180};
// 객체 -> 배열 방법 1 : Object.keys(); 메소드 활용 객체의 key를 모두 배열로 반환
let newArray=Object.keys(person);
for(let i=0; i<newArray.length; i++){
    let nowKey=newArray[i];
    console.log(`key : ${nowKey}, value:${person[nowKey]}`)
}         // 대문자
console.log(Object.keys(person));

// 객체 -> 배열 방법 2 : Object.values(); 메소드 활용 객체의 value들을 모두 배열로 반환
let newArray2=Object.values(person);
for(let i=0; i<newArray2.length; i++){
    console.log(`value: ${newArray2[i]}`);
}
console.log(Object.values(person));

// 객체 -> 배열 방법 3 : Object.entries(); 메소드 활용 객체를 key-value 형태의 배열을 담은 배열 반환
let newArray3=Object.entries(person);
for(let i=0; i<newArray3.length; i++){
    console.log(`key: ${newArray3[i][0]}, value: ${newArray3[i][1]}`);
}
console.log(Object.entries(person));

console.log("혼자 한 거")
// 객체 -> 배열 번외 : 키 값을 뽑아서 새로운 배열에 키에 해당하는 값들을 차례로 넣음
let keysArr=Object.keys(person);
let firstArr=new Array(); // 여기서 숫자를 주면 빈 공간 뒤를 이어나가게 됨
for(let i=0; i<keysArr.length; i++){
    let nowKey= keysArr[i];
    let tmp=person[nowKey];
    firstArr.push(tmp);
}
console.log(firstArr);


// 추가적인 반복문 1: for-of 주로 배열의 모든 요소에 접근해야 할 때 사용
let addArr=[3,6,9,12,15];
for(let i of addArr){
    console.log(i);
}
// 추가적인 반복문 2: for-in 객체의 모든 프로퍼티들을 순환
let person2={name:"이순신", age:36, height:174};
for(let key in person2){
    console.log(`key:${key}, value:${person2[key]}`)
}