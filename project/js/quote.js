// api를 통해 명언을 불러와 표시

// 즉시 실행 함수
(function(){
    const API_URL="https://random-quote.hyobb.com/"

    const quoteElement=document.getElementById("quote");
    const quoteItem=localStorage.getItem("quote");
    
    // 로컬스토리지에 명언을 저장하여 동일한 날짜라면 새로 호출하지 않고, 저장된 명언을 표시
    const nowDate=new Date();
    const month=nowDate.getMonth()+1;
    const date=nowDate.getDate();
                                
    // API에서 명언을 불러오는 기능
    const getQuote=async ()=>{
        try{
                            // API 호출(promise 반환)-> await -> await은 async 함수 내부에서만 사용
            const data=await fetch(API_URL).then((res)=>res.json());
                                                // 결과를 자바스크립트 객체형태로
            console.log(data);
            const result=data[1].respond;
            console.log(result);
            setQuote(result);
        }catch(err){console.log(`err:${err}`); setQuote("임의의 명언")}
    }
    
    // 불러온 명언을 세팅
    const setQuote=(result)=>{
        // 담을 객체 : 날짜와 명언 데이터
        let quote={createDate:`${month}-${date}`, quoteData:result};
                            // 키 값, JSON 문자열 변환
        localStorage.setItem("quote", JSON.stringify(quote));
        quoteElement.textContent=result;
    }
    
    if(quoteItem){// null, undefined, NaN, 0 등을 체크함
            // 구조분해할당         객체로 변환
        let {createDate, quoteData}=JSON.parse(quoteItem);
        // 로컬 스토리지 날짜와 오늘 날짜가 동일
        if(createDate ===`${month}-${date}`){
            quoteElement.textContent=`"${quoteData}"`;
        }else{getQuote();}
    }else{getQuote();}
    
})();



