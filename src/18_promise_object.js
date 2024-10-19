// 문자열과 그 문자열을 출력하는 callback 함수를 인수로 받는 workA,B,C 
const workA=(value, callback)=>{setTimeout(()=>{callback(value)},5000);};
const workB=(value, callback)=>{setTimeout(()=>{callback(value)},3000);};
const workC=(value, callback)=>{setTimeout(()=>{callback(value)},10000);};
// 동기적 처리
const workD=(value, callback)=>{callback(value);};

workA("work A", (res)=>{console.log(res);})
workB("work B", (res)=>{console.log(res);})
workC("work C", (res)=>{console.log(res);})
workD("work D", (res)=>{console.log(res);})

// 함수가 리턴하는 값을 다시 받아 수식 처리
const work1=(value, callback)=>{setTimeout(()=>{callback(value+5)},5000);};
const work2=(value, callback)=>{setTimeout(()=>{callback(value-3)},3000);};
const work3=(value, callback)=>{setTimeout(()=>{callback(value+10)},10000);};

const work4=(value, callback)=>{callback(value);};

// 1번에 10을 전달 5초 기다리고 5를 더함 = 15
work1(10, (resA)=>{console.log(`1. ${resA}`);
                                // 탬플릿 리터럴
    // 15가 된 수치에 3초 뒤 3을 뺌 = 12
    work2(resA, (resB)=>{console.log(`2. ${resB}`);
        // 12가 된 수치에 10초 뒤 10을 더함
        work3(resB, (resC)=>{console.log(`3. ${resC}`);});
    });
})

work4("work 4", (res)=>{console.log(res);})
// 비동기 함수의 결과값->비동기 함수에 인수로 제공
// callback 안에 callback을 하는 건 알기 쉽고 유연한 코드, 가독성 떨어짐

// 콜백 지옥을 해결하는 promise객체(js의 내장 객체)
// 생성법 : new키워드와 생성자

// 인수로 executor함수(=실행함수)를 받음
            // ㄴ 작업을 비동기로 처리 resolve, reject라는 콜백함수를 가짐
const executor=(resolve, reject)=>{};
const promise=new Promise(executor);