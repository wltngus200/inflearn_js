// date : 특정 날짜의 시간과 현재 날짜의 시간을 알 수 있음
let nowdate=new Date("2024-04-22");
console.log(nowdate)
let nowdate2=new Date();
console.log(nowdate2)

// 오늘이 몇월 며칠 무슨 요일인지 출력 
let nowdate3=new Date();
// 0~11의 값으로 월을 표기
let month=nowdate3.getMonth()+1;
let date=nowdate3.getDate();
// 0~6까지로 요일 표현
let day=nowdate3.getDay();
let week=["日","月","火","水","木","金","土"]
console.log(`${month}월 ${date}일 ${week[day]}요일`)

// 시간까지 출력
let hour=nowdate3.getHours(); // 0~24
let minutes=nowdate3.getMinutes(); // 0~59
console.log(`${hour}시 ${minutes}분 입니다.`)