// *** literal type : 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입
var 이름이름;
이름이름 = 123;
// 이름이름 = 456; -> error
// union 타입 가능
var 접니다;
// 함수
function 함수함수(a) {
    return 1;
}
함수함수('hello');
// quiz. 함수 만들기
/*
1. 가위 or 바위 or 보 중 1개 입력 가능
2. 가위 or 바위 or 보만 들어올 수 있는 array를 return 해야 함
*/
function game(param) {
    return ['가위', '보'];
}
console.log(game('바위'));
// *** literal type은 const 변수의 업그레이드 버전
// : 변하지 않는 정보를 저장하고 싶을 때 const를 자주 쓰는데, 가끔은 변하는 중요한 정보를 저장하고 싶을 땐 const가 무쓸모 -> literal type 쓰기
// *** as const 문법
var 자료 = {
    name: 'Kim'
};
function 내함수함수(a) {
    // "kim이라는 자료만 들어올 수 있습니다" (x)
    // "kim이라는 타입만 들어올 수 있습니다" (o)
}
// 내함수함수(자료.name) -> error : 자료.name은 string 타입이지, 'Kim' 타입이 아님
/* 해결법:
1. object 만들 때 타입을 미리 정하기
2. assertion 쓰기 (as 'Kim) -> 내함수함수(자료.name as 'Kim')
3. as const를 object 자료에 붙이기
*/
var 자료2 = {
    name: 'Kim'
};
function 내함수함수2(a) {
}
내함수함수2(자료2.name);
/* *** as const 효과
1. 타입을 object의 value로 바꿔줌 (= 타입을 'Kim'으로 바꿔줌)
2. object 안에 있는 모든 속성을 readonly로 바꿔줌 (변경하면 에러나게)
  자료2.name = 'Park' -> error
*/ 
