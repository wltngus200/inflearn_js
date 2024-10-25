// 검색어를 입력해 검색할 수 있는 기능

// 즉시 실행 함수
(function(){
    // input 태그에 접근
    const searchInput=document.getElementById("search-input");

    // 아래 두 함수로 검색어 입력하고 엔터를 누르면 해당 페이지로 이동
    const showSearchResult=()=>{
        let searchWord=searchInput.value;
        // 특정 페이지로 이동할 수 있는 기능(백틱으로 입력된 값을 대입)
        location.href=`https://www.google.com/search?q=${searchWord}`;
        searchWord="";
    }
    // 그 중 엔터를 누르면 위의 함수 실행
    const enterKey=(event)=>{if(event.code=="Enter"){showSearchResult();}}

    // 키가 눌릴 때마다 위의 함수를 실행
    searchInput.addEventListener("keypress",(event)=>{enterKey(event)});
})();


// clock.js에서 선언된 전역 변수 timeElement를 수정
// timeElement.textContent="12:34";
// 동일한 이름을 갖는 함수나 변수가 있었다면 문제 발생 => 즉시실행 함수
// 즉시실행함수란? 함수의 호출문을 작성하지 않고도 선언과 동시에 바로 실행
// 즉시실행함수 내부에 코드를 넣게 되면 함수를 바로 실행 할 수 있고,
// 함수 내부 전역변수들은 함수 내부에 선언되어있어 함수 스코프(다른 js에서 접근 불가)
// => search.js:20 Uncaught ReferenceError: timeElement is not defined 가 표시됨