// 클라이언트와 서버의 통신 과정, API호출
// API = 컴퓨터나 컴퓨터 프로그램 사이의 연결
        // client(web browser)-server사이의 연결, 원하는 데이터를 요청하고 전달받는 방법

// API 호출(client-server) 방법
// server역할을 하는 Json Place Holder (https://jsonplaceholder.typicode.com/) API예제 무료 제공

// JSON(Javascript Object Notation) 형식이란? Javascript의 객체 표기법 key:value의 구조
// resources에서 /posts를 사용 -> 주소창의 url을 활용해 API를 호출한 결과

// API 호출 시 fetch 내장함수 -> promise 객체 반환
const response=fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{console.log(res);}) // response라는 성공 객체 자체를 반환
    .catch((error)=>{console.log(error)});
console.log(response); // promise 객체를 반환하는 비동기 처리 함수 -> then 메소드 활용

// 원하는 데이터 전송
const getData=async()=>{
    // 비동기적으로 처리되기 때문에 API호출이 끝난 후 실행하기 위해 await
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    // 자바스크립트 내에서 데이터를 사용하기 위해 파싱처리 (JSON->Object) json 메소드 사용
    const data=await res.json();
    // 위의 코드에 await을 적어 res json데이터를 전부 파싱 한 후 실행 하도록 함
    console.log(data);
};
getData();

// API 호출은 필요한 데이터를 얻기 위해 데이터를 요청하는 작업
// 데이터 요청은 다른 서버 프로그램의 데이터 요청하는 경우 많기 때문에 네트워크 오류, 인터넷 속도 등으로 실패 가능성
// 성공/실패의 여부를 알 수 없거나 작업이 언제 완료 될 지 모르는 것을 비동기 작업으로 처리 및 오류 처리

// 에러 처리
const getData2=async()=>{
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/posts");
        const data=await res.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
};
getData2();