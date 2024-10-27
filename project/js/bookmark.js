// 새로운 북마크를 작성하는 폼
(function(){
    const newBookmarkForm=document.getElementById("bookmark-item-input-form");
    // 로컬스토리지에 저장해 종료 후 다시 열어도 표시되도록
    let bookmarkList=[];
    if(localStorage.getItem("bookmarkList")){
        bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"));
    }else{
        localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
    }
    
    // 북마크 추가 버튼을 눌러야 인풋 폼 나오게
    let isAddBtnClick=false;
    newBookmarkForm.style.display="none";
    
    const newBookmarkToggle=()=>{ // 탭을 열고 닫음
        isAddBtnClick=!isAddBtnClick;
        isAddBtnClick?(newBookmarkForm.style.display="block"):(newBookmarkForm.style.display="none");
    };
    
    document.getElementById("bookmark-item-add-btn").addEventListener("click", newBookmarkToggle);
    
    // 실제 북마크 아이템 추가
    const addBookmarkItem=()=>{
        let bookmarkList=[];
        if(localStorage.getItem("bookmarkList")){
            bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"));
        }
        let name=document.getElementById("new-bookmark-name-input").value;
        let url=document.getElementById("new-bookmark-url-input").value;
        let createdAt=Date.now(); // 1970.01.01~ 경과한 ms 값
        bookmarkList.push({name:name, url:url, createdAt:createdAt}); // 배열을 직렬화
        localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
        // 이름, 주소, 생성날짜를 북마크리스트 배열에 객체로 추가 + 로컬 스토리지 저장
    
        // input 폼의 값을 초기화
        document.getElementById("new-bookmark-name-input").value="";
        document.getElementById("new-bookmark-url-input").value="";
        
        // 북마크가 추가될 때 마다 실행
        setBookmarkItem({name:name, url:url, createdAt:createdAt});
        
        newBookmarkToggle(); // 함수 실행 -> 입력 폼 닫음
    }
    
    document.getElementById("add-btn").addEventListener("click", addBookmarkItem);
    document.getElementById("cancel-btn").addEventListener("click", newBookmarkToggle);
    
    // 북마크 요소 출력 -> 추가 될 때마다, 페이지가 로드 될 때마다 실행
    const bookmarkItemList=document.getElementById("bookmark-list");
    
    // 삭제 버튼을 누르면 지워지게
                        // ms단위로 고유한 값
    const deleteBookmarkItem=(id)=>{
                            // 특정 문자열을 넣으면 확인 취소버튼 있는 경고창 리턴
        const isDelete=window.confirm("정말 삭제하시겠습니까?");
        if(isDelete){
            let bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"));
                                            // 배열 내장함수
            let nowBookmarkList=bookmarkList.filter((elm)=>elm.createdAt!==id);
            localStorage.setItem("bookmarkList", JSON.stringify(nowBookmarkList));
            // 지정된 북마크 아이템을 지움 setBookmarkItem(createdAt) 참조
            document.getElementById(`bookmark-item-${id}`).remove();
        }
    } // 호이스팅 방지를 위해 위쪽으로
    
    // 로컬 스토리지에 저장된 아이템들을 꺼냄
    const setBookmarkList=()=>{
      bookmarkList.forEach((item)=>{
        setBookmarkItem(item);
      })
    };
     
    
    // 북마크 리스트에 나타내는 함수
    const setBookmarkItem=(item)=>{
        console.log(item);
        // 요소 node 생성
    
        // 북마크 1개
        const bookmarkItem=document.createElement("div");
        bookmarkItem.classList.add("bookmark-item");
        bookmarkItem.id=`bookmark-item-${item.createdAt}`
    
        // 북마크 정보
        const bookmarkInfo=document.createElement("div");
        bookmarkInfo.classList.add("bookmark-info");
    
        // 북마크 주소
        const bookmarkUrl=document.createElement("a");
        bookmarkUrl.classList.add("bookmark-url");
        bookmarkUrl.href=item.url;
    
        // 북마크 아이콘
        const urlIcon=document.createElement("div");
        urlIcon.classList.add("url-icon");
    
        // 새로운 이미지 태그
        const urlIconImg=document.createElement("img");
        urlIconImg.src=`https://www.google.com/s2/favicons?domain_url=${item.url}`;
    
        // 북마크 이름
        const nameElement=document.createElement("div");
        nameElement.classList.add("name");
        nameElement.textContent=item.name;
    
        // 북마크 삭제
        const bookmarkDelBtn=document.createElement("div");
        bookmarkDelBtn.textContent="삭제";
        bookmarkDelBtn.classList.add("del-btn");
        bookmarkDelBtn.addEventListener("click", ()=>{deleteBookmarkItem(item.createdAt)});
    
        // node tree에 설정(부모-자식 관계 설정)
        bookmarkItem.appendChild(bookmarkInfo);
        bookmarkItem.appendChild(bookmarkDelBtn);
        bookmarkInfo.appendChild(bookmarkUrl);
        bookmarkUrl.appendChild(urlIcon);
        bookmarkUrl.appendChild(nameElement);
        urlIcon.append(urlIconImg);
        bookmarkItemList.appendChild(bookmarkItem);
    }
    setBookmarkList(); // 함수 호출
})();
