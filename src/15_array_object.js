// 구조분해할당 : 배열이나 객체의 요소 및 프로퍼티들을 분해해, 그 값들을 각각의 변수에 할당하는 자바스크립트 표현식

// 배열의 구조분해할당 : 요소들을 분해해 순서대로 각각 다른 변수에 할당
let colors=["green","blue","purple"];
let c1=colors[0];
let c2=colors[1];
let c3=colors[2];
console.log(c1);
console.log(c2);
console.log(c3);
let [co1, co2, co3]=colors;
console.log(co1);
console.log(co2);
console.log(co3);

// 변수를 한 번에 선언하고 배열을 선언하지 않고 바로 할당
let col1, col2, col3; 
// 변수의 선언을 분리해서 배열의 값을 할당하는 방식을 선언분리할당
[col1, col2, col3]=["green","blue","purple"];
console.log(col1);
console.log(col2);
console.log(col3);

// 배열의 길이와 다른 개수의 변수에 값 할당
//적은 경우
let li1, li2;
[li1, li2]=["green","blue","purple"];
console.log(li1, li2);
//많은 경우
let lo1, lo2, lo3, lo4;
[lo1, lo2, lo3, lo4]=["green","blue","purple"];
console.log(lo1, lo2, lo3, lo4);

// undefined 대신 출력될 기본값 설정 -> 지정된 변수만 기본 값 존재
[lo1, lo2, lo3, lo4="yellow"]=["green","blue","purple"];
console.log(lo1, lo2, lo3, lo4);

// 두 개의 변수 값을 서로 바꿀 때 사용하기도 함
let a=10;
let b=5;
let tmp;
tmp=a;
a=b;
b=tmp;
console.log(a,b);

let c=10; 
let d=5;
[c, d]=[d, c];
console.log(c,d);


// 객체의 구조분해 할당
let colorsObject={
    cobj1: "green",
    cobj2:"blue",
    cobj3:"purple"
};
let oc1=colorsObject.c1;
let oc2=colorsObject.c2;
let oc3=colorsObject.c3;
console.log(oc1, oc2, oc3);
// 인덱스 순이 아니라 키의 이름을 기준으로 할당
let{cobj1, cobj2, cobj3}=colorsObject; 
console.log(cobj1, cobj2, cobj3);

// 키의 이름과 다른 것에 할당하는 법 = clone 사용
let color1=colorsObject.cobj1;
let color2=colorsObject.cobj2;
let color3=colorsObject.cobj3;
console.log(color1, color2, color3);

let{cobj1:clone1, cobj2:clone2, cobj3:clone3}=colorsObject;
console.log(clone1);
console.log(clone2);
console.log(clone3);

// 기본값 지정
let colorsObject2={
    cobj01: "green",
    cobj02:"blue",
    cobj03:"purple"
};
let{cobj01, cobj02, cobj03, cobj04="yellow"}=colorsObject2;
console.log(cobj01);
console.log(cobj02);
console.log(cobj03);
console.log(cobj04);