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
                // JS에서 자체 제공 비동기 처리의 성공, 실패 의미 -> 실패 가능성이 존재 하기 때문에 둘 중 하나는 반드시 호출
const executor=(resolve, reject)=>{setTimeout(()=>{console.log("3초만 기다리세요.")},3000)};
// executor함수는 promise객체를 생성함과 동시에 실행되는 실행함수
const promise=new Promise(executor);
// promise는 객체이기 떄문에 property를 가짐(state, value -> 성공 실패에 따라 값이 바뀜)
// 한 번 변경된 값은 더 이상 바뀌지 않음(처리가 끝난 promise 객체에 다시 resolve reject 호출 시 무시)


// resolve, reject 함수의 사용
// executor에서 비동기 처리된 결괏값 반환 시 resolve 콜백함수에 결괏값 전달
const executor2=(resolve, reject)=>{setTimeout(()=>{resolve("성공")},3000)};
const promise2=new Promise(executor2);
// resolve에 전달 된 값을 사용하는 메소드
// 매개변수는 executor에서 전달한 값
promise2.then((res)=>{console.log(res);});

// promise 객체의 생성과 동시에 executor 함수가 실행
// executor 함수에서는 매개 변수로 받은 함수를 사용해 값을 전달(이때 promise의 property가 변경)
// then 메소드를 통해 promise객체의 result 값을 매개 변수로 받아 console에 출력

const executor3=(resolve, reject)=>{setTimeout(()=>{reject("실패")},3000)};
const promise3=new Promise(executor3);
// then 메소드는 작업이 성공했을 때 사용
// catch 메소드는 작업이 실패했을 때 사용
promise3.then((res)=>{console.log(res);}).catch((err)=>{console.log(err)});

// 콜백지옥 -> promise 객체로 작성(콜백함수 없이 value라는 값만 지정)
                                            // executor 함수를 화살표 함수로
const workP1=(value)=>{const promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(value+5);},5000)});
    return promise};
const workP2=(value)=>{const promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(value-3);},3000)});
    return promise};
const workP3=(value)=>{const promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(value+10);},10000)});
    return promise};

// 방법 1
workP1(10).then((resA)=>{console.log(`P1. ${resA}`);
    workP2(resA).then((resB)=>{console.log(`P2. ${resB}`);
        workP3(resB).then((resC)=>{console.log(`P3. ${resC}`);
      });
    });
});
// 방법 2 : then메서드의 다른 방식 활용(then메서드의 콜백함수 안에서 다음 함수 리턴)
                            // promise 객체가 return -> .then 사용가능
workP1(10).then((resA)=>{console.log(`방법 2: ${resA}`); return workP2(resA);})
    .then((resB)=>{console.log(`방법 2: ${resB}`); return workP3(resB)})
    .then((resC)=>{console.log(`방법 2: ${resC}`);});
// promise 객체를 계속 반환하며 then메소드를 연속으로 사용하는 것을 promise 체이닝이라고 함
