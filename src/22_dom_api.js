// 21강은 이론만 함
// DOM(Document Object Model) : 문서 객체 모델로 HTML을 자바스크립트가 이해할 수 있게 객체로 변환한 것
// 자바스크립트는 DOM을 통해 HTML요소 생성 수정 삭제
// DOM API : DOM이 제공하는 DOM에 접근하고 조작할 수 있는 방법
// 요소를 찾을 때 문서->요소->속성->텍스트 순으로 조회

// 요소 노드에 접근
// getElementById() 특정 요소를 ID값으로 가져오고 반환
// querySelector() ID가 아닌 CSS선택자로 요소를 반환
console.log(document.getElementById("date")); // 여러개 있을 경우 가장 위의 요소만 가져옴
console.log(document.querySelector("div.date"));

// querySelectorAll() 여러 요소 반환
console.log(document.querySelectorAll("div.date")); // Node 리스트 출력
console.log(document.getElementsByClassName("date")); // HTML 콜렉션 출력

// getElementsByTagName tag의 이름으로 여러개 한 번에 조회
console.log(document.getElementsByTagName("div")); // HTML 콜렉션 출력

// attribute node에 접근(요소 노드에 접근->해당 요소 속성 조작)
console.log(document.getElementById("date").className);
// class이름 변경
console.log(document.getElementById("date").className);
// const dateElement=document.getElementById("date");
// dateElement.className="change";
// console.log(dateElement);
// 위와 아래는 같은 태그
// console.log(document.querySelector("div.date").id);
// const dateElement=document.querySelector("div.date");
// dateElement.className="change";
// console.log(dateElement);

// 요소의 class값에 접근
console.log(document.getElementById("date").classList);
// classList의 메소드 add, remove,item, toggle,contains, replace
const dateElement=document.getElementById("date");
dateElement.classList.add("change"); // 추가됨
dateElement.classList.remove("date");
console.log(dateElement); 

// text node textContect를 통해 새로운 텍스트 할당
const clockElement=document.getElementById("clock");
clockElement.textContent="12:00"
const dateElement2=document.querySelector("div.change");
dateElement2.textContent="3월 29일 수요일"