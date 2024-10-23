// input 태그 안에 작성된 단어를 JS로 가져오기
const inputElement=document.getElementById("input");
inputElement.addEventListener("mouseover",()=>{console.log(inputElement.value);});

// Select중에서 변경 되었을 때 출력 => 첫 번째 값은 기본값으로 인식
const selectElement=document.getElementById("color");
selectElement.addEventListener("change",()=>{console.log(selectElement.value);});

// 선택된 값을 아래에 출력
const resultElement=document.getElementById("result");      // p.606
selectElement.addEventListener("change", ()=>{resultElement.textContent=selectElement.value;})