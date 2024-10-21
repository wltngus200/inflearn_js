// creatElement 새로운 요소 추가
const seasonElement=document.createElement("div");
// classList를 통해 class 이름 생성
seasonElement.classList.add("season");

// 텍스트를 넣는 방법 1 textContent
seasonElement.textContent="spring";
// 텍스트를 넣는 방법 2 createTextNode
const seasonText=document.createTextNode(", summer") //2가지 모두 들어가있음

console.log(document.getElementsByTagName("div"));
// appendChild 생성만 하고 DOM 트리에 추가 되지 않은 요소를 추가
const todayInfoElement=document.querySelector("div.today-info");
todayInfoElement.appendChild(seasonElement);
seasonElement.appendChild(seasonText);
console.log(document.getElementsByTagName("div"));

// 설명만 듣고 혼자 해보기
// class이름이 clock인 요소의 아래쪽에 class이름이 button이고 버튼이라고 적힌 div추가
const buttonElement=document.createElement("div");
buttonElement.classList.add("button"); //className 대신 classList, classList는 괄호X
buttonElement.textContent="버튼"; //buttonElement.textContent("버튼");
// 방법 1 buttonElement.textContent="버튼" (대입) // 요소에 직접 대입(부모-자식 성립)
// 방법 2 const example=document.createTextNode("버튼") (파라미터)
const clockElement=document.querySelector("div.clock"); //getElementsByClassName("clock");
clockElement.appendChild(buttonElement);
// buttonElement.appendChild(buttonText);

console.log(document.getElementsByTagName("div"));
//풀이
// 1. 새로운 요소노드를 생성 : createdElement("태그이름") 
// 2. class이름은 className 또는 classList로 추가
// 3. text node를 생성하지 않고 element에 textContent 사용
// => 여기까지가 생성만 하고 DOM 트리에 추가되지 않은 상태
// 4. 부모 노드인 today-info엘리먼트를 querySelector를 통해 가져옴
// 5. 부모 노드에 생성한 element를 추가
// 6. 확인을 위해 getElementsByTagName를 사용해 div 태그를 모두 출력

// 버튼을 클릭시 이벤트 발생(어떠한 작업이 실행되도록 하기)
// DOM에는 이벤트를 추가할 수 있는 addEventListener라는 DOM API 제공
                            //(이벤트, listener(실행될 함수))
                            // JS의 윈도우 객체의 alert메소드로 경고창
                            // window는 현재 사용중인 웹 브라우저창 자체 의미
buttonElement.addEventListener("click", ()=>{window.alert("클릭");})

// DOM API에는 특정 요소에 스타일을 추가하고 수정하는 API도 존재 style
buttonElement.style.background="gray";
buttonElement.style.color="white";
buttonElement.style.width="50px";
buttonElement.style.textAlign="center";
buttonElement.style.cursor="pointer";

