// 열고 닫을 수 있는 북마크 탭

// 즉시 실행 함수
(function(){
    const bookmarkBar=document.getElementById("bookmark-bar");
    const bookmarkOpen=document.getElementById("bookmark-open");
    const bookmarkClose=document.getElementById("bookmark-close");
    
    // 웹페이지에 접근 했을 때 로컬스트리지 값에 따라 북마크의 열고 닫힘 설정
    const isBookMarkBarOpen=localStorage.getItem("isBookMarkBarOpen")
    if(isBookMarkBarOpen==="close"){
        bookmarkBar.style.display ="none";
        bookmarkOpen.style.display ="none";
        bookmarkClose.style.display ="flex";
    }else{
        bookmarkBar.style.display ="block";
        bookmarkOpen.style.display ="flex";
        bookmarkClose.style.display ="none";
    }
    
    // 버튼을 눌렀을 때 북마크를 열고 닫는 기능
    const bookmarkBarToggle=()=>{
        // 브라우저 종료 시점에서 어떠한 상태였는지 기억
        const isBookMarkBarOpen=localStorage.getItem("isBookMarkBarOpen");
        // 북마크 바를 여는 상황 = isBookMarkBarOpen가 close
        // 얼리리턴
        if(isBookMarkBarOpen==="close"){
            localStorage.setItem("isBookMarkBarOpen","open");
            bookmarkBar.style.display ="block";
            bookmarkOpen.style.display ="flex";
            bookmarkClose.style.display ="none";
            return;
        }
        localStorage.setItem("isBookMarkBarOpen","close");
        bookmarkBar.style.display ="none";
        bookmarkOpen.style.display ="none";
        bookmarkClose.style.display ="flex";
    }
        // if(isBookMarkBarOpen){ // 존재 여부
        //     if(isBookMarkBarOpen==="open"){ // 로컬 스토리지의 값이 open -> 닫도록 작성
        //         localStorage.setItem("isBookMarkBarOpen","close");
        //         bookmarkBar.style.display ="none";
        //         bookmarkOpen.style.display ="none";
        //         bookmarkClose.style.display ="flex";
        //     }else{ // 로컬 스트리지의 값이 close -> 열도록 작성
        //         localStorage.setItem("isBookMarkBarOpen","open");
        //         bookmarkBar.style.display ="block";
        //         bookmarkOpen.style.display ="flex";
        //         bookmarkClose.style.display ="none";
        //     }
        // }else{ // 로컬 스토리지에 값이 존재하지 않음 -> 닫아야 함
        //     localStorage.setItem("isBookMarkBarOpen","close");
        //     bookmarkBar.style.display ="none";
        //     bookmarkOpen.style.display ="none";
        //     bookmarkClose.style.display ="flex";
        // }
    
    // 버튼이 클릭되었을 때
    document.getElementById("bookmark-open-btn").addEventListener("click", bookmarkBarToggle);
    document.getElementById("bookmark-close-btn").addEventListener("click", bookmarkBarToggle);
})();
