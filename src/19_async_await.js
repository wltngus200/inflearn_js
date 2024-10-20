// promise 복습 promise 객체(executor 콜백함수(resolve, reject))
const delay=
    // delay는 ms값을 받아 promise 객체를 리턴
    (ms)=>{return new Promise(
        // 인수로 함수를 받음, resolve(성공)를 인수로 받아 처리하는 지연함수(executor) 
        (resolve)=>{setTimeout(
            // setTimeOut은 callback함수와 ms초값을 받음
            ()=>{resolve();},ms);}
    );
}
const start=()=>{delay(2000).then(()=>{console.log("대기");});}
start();

// async 
const delay2=
    (ms)=>{return new Promise(
        (resolve)=>{setTimeout(
            ()=>{resolve();},ms);}
    );
}
            // 함수의 오른쪽에 작성 -> promise 객체 반환
const start2=async()=>{
    // async 키워드를 붙인 함수는 자동으로 promise 객체를 반환하는 비동기 함수
    // delay2(2000).then(()=>{console.log("async 대기");});
    return "async 대기";
};
// console.log(start2()); // state가 pending인 promise 객체??
start2().then((res)=>{console.log(res);});
// start함수의 반환 값이 start가 반환하는 promise 객체의 result값과 동일
// async 키워드 : promise객체를 반환함과 동시에 return 시킨 것이 resolve에 결과 값으로 전달

// await 키워드
const start3=async()=>{
    // await 키워드는 특정함수 앞에 존재하며 then 메소드 대신 사용
    // async 키워드가 붙어있는 함수 내부에서만 사용 가능
    // delay가 처리 될 때까지 기다림
    await delay2(2000);
    console.log("async, await 대기");
};
start3();
// async, await 가독성, 편리, 실행순서 예측할 수 있게 됨

// 에러 처리 try catch(promise객체는 catch를 사용)
const start4=async()=>{
    try{
        await delay2(2000);
        console.log("async, await 대기");
    }catch(error){
        console.log(error);
    }
};