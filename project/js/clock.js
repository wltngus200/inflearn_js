const dateElement=document.getElementById("date");
const timeElement=document.getElementById("time");

// 한 자리 숫자의 앞에 0을 붙이는 함수
                                    // 묵시적 형변환 변수 number에 어떤 값이 들어오던지 숫자로 변경
const modifyNumber=(number)=>{return parseInt(number)<10?"0"+number:number};

// 현재 날짜를 불러옴
const getNowDate=()=>{
    const nowDate=new Date();
    let month=modifyNumber(nowDate.getMonth()+1);
    let date=modifyNumber(nowDate.getDate());
    let week=["일요일", "월요일", "화요일","수요일","목요일","금요일","토요일"]
    let day=nowDate.getDay();

    // console.log(month, date, week[day]);
    setNowDate(month, date, week[day]);
};

// 오늘의 날짜를 요소에 설정
const setNowDate=(month, date, day)=>{dateElement.textContent=`${month}월 ${date}일 ${day}`};

// 현재 시간을 불러옴
const getNowTime=()=>{
    const nowDate=new Date();
    let hour=modifyNumber(nowDate.getHours());
    let minute=modifyNumber(nowDate.getMinutes());
    setNowTime(hour, minute);
}

// 지금 시간을 요소에 설정
const setNowTime=(hour, minute)=>{timeElement.textContent=`${hour}:${minute}`};


getNowDate();
getNowTime();
// 일정 시간 간격으로 함수를 반복 시행하는 내장함수 setInterval(실행될 함수, ms) ≒ setTimeOut
setInterval(getNowTime, 1000);
