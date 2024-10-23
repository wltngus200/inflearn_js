// 로컬 스토리지 : 웹브라우저에 사용가능한 저장소, 사용자가 브라우저 종료해도 유지(로그인 정보, 설정)
let idElement=document.getElementById("id");

let pwdElement=document.getElementById("pwd");
let loginButton=document.getElementById("login-btn");

loginButton.addEventListener("click",()=>{
    console.log(idElement.value); console.log(pwdElement.value);
    
    // 성공이라는 메세지를 띄우고 로컬스토리지에 저장 -> 개발자도구의 application 탭에서 확인
    alert("성공");
    // localStorage객체는 key-value쌍으로 값을 저장 -> setItem()이라는 메소드 사용
    localStorage.setItem("id", idElement.value);
    localStorage.setItem("pwd",pwdElement.value);

    // 일반적으로 로컬스토리지를 이용해 저장할 때에는 객체, 배열의 형태로 하나의 키값에 저장
    let userInfo={id:idElement.value, pwd:pwdElement.value};
    localStorage.setItem("userInfo", userInfo);
    
    // 위의 방식대로 저장하면 Object로 저장되어 애플리케이션탭에서 확인 할 수 없음 -> Json으로 변경해 저장
    localStorage.setItem("userInfo2", JSON.stringify(userInfo));
});

// 스토리지에 저장한 값을 input창 아래에서 확인
let userIdElement=document.getElementById("userId");
let userPwdElement=document.getElementById("userPwd");

// let userLoginInfo=localStorage.getItem("userInfo2");
// 저장 당시 Json 문자열로 저장했기 때문에 undefined로 출력됨
let userLoginInfo=JSON.parse(localStorage.getItem("userInfo2"));
console.log(userLoginInfo);
userIdElement.textContent=`id: ${userLoginInfo.id}`;
userPwdElement.textContent=`pwd: ${userLoginInfo.pwd}`;
