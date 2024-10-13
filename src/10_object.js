// 생성자를 통한 객체 생성
let person1=new Object();
console.log(person1);

// 객체리터럴 방식의 객체 생성
let person2={};
console.log(person2);

// 객체의 프로퍼티(속성) : 중괄호 내부에 들어가는 값으로 key-value쌍으로 이루어짐
// key로 찾기 때문에 고유해야 함 value는 어떠한 값이 들어가도 상관 없음
let person3={name:"홍길동", age:25, 
            phone:undefined,etc:function(){console.log("hello world");}}; 

let person4={name:"홍길동", age:20, pet:"cat"};
// 프로퍼티의 값 꺼내기1 : 점 표기법 .
console.log(person4.name);
console.log(person4.age);
console.log(person4.pet);

// 프로퍼티의 값 꺼내기2 : 괄호 표기법 []
console.log(person4["name"]);
console.log(person4["age"]);
console.log(person4["pet"]);

// 주로 점 표기법을 사용하나, key값이 특정함수의 매개변수에 의해 결정되는 등 동적인 경우 사용 
// key값을 매개변수가 결정하는 코드, person4 객체 아래 getValue라는 함수를 화살표함수로
    //Camel 표기법 준수
const getValue=(key)=>{console.log(person4[key]);}
// 호이스팅(아직 선언되지 않은 함수나 변수를 해당 스코프 맨 위로 끌어올림)
getValue("name") //호출문

// 추가, 수정, 삭제 -> 점 표기법, 괄호 표기법 사용
// 추가
person4.phone="01012341234";
person4["height"]=100;

console.log(person4);

// 수정
person4.age=30;
person4["pet"]="강아지";

console.log(person4);

// const는 상수 생성, let은 변수 생성
// 객체의 프로퍼티 값을 수정하는 경우에는 const로 생성된 객체도 변경 가능
// 객체 프로퍼티를 수정하는 것이 person객체 자체를 수정하는 것이 X <-> 객체 고유의 id
const conPerson={name:"홍길동", age:20, pet:"cat"};
conPerson.age=60; 
conPerson["pet"]="댕댕이"
console.log(conPerson);

// 객체 고유의 ID 변경
// conPerson이라는 객체 자체에 새로운 프로퍼티를 저장하려 한다면 객체의 고유한 아이디 변경
// conPerson={pet:"dog"}

// 삭제 : delete 키워드
delete conPerson.age;
delete conPerson["name"]

console.log(conPerson);

// 프로퍼티의 값이 함수일 때 = 메소드
const conPerson2={name:"홍길동", age:28, pet:"cat",
            print:function(){console.log("hello world");}
};
// key 값을 통해 호출
conPerson2.print();
conPerson2["print"]();
console.log(conPerson2);

// 메소드의 활용
const conPerson3={name:"홍길동", age:28, pet:"cat",
    // 화살표 함수 X : 자신이 속한 객체를 가리킬 수 없음
    print:function(){console.log(`제 이름은 ${this.name}입니다.`);}
};
conPerson3.print();
conPerson3["print"]();
