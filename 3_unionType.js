// Union Type : 타입 2개 이상 합친 새로운 타입 만들기
var 회원 = 123; // 할당하는 순간 타입은 string 또는 number 또는 boolean 중 하나로 변함
// 숫자 or 문자가 가능한 array / object 타입 지정하기
var 회원2 = [1, '2', 3];
var 오브젝트 = { a: '123' };
// any : 모든 자료형 허용해줌 (일반 JS변수로 만들고 싶을 때 사용)(타입스크립트 실드 해제)
var 이름임;
이름임 = 123;
이름임 = true;
// unknown : 모든 자료형 허용해줌 (용도는 any와 똑같음, any보다 안전함)
// 아직 어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어넣어야할 경우에 사용하기
// 내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용해야 함
var 이름인;
이름인 = 123;
이름인 = {};
// ** unknown이 any보다 안전한 이유?
// let 변수1: string = 이름인; // unknown : error (안정성)
var 변수2 = 이름임; // any : no error
/* 타입스크립트의 엄격함
- 간단한 수학연산도 타입이 맞아야 함*/
var 나이임;
// 나이임 + 1; // error
// + 1은 원래 문자에도 되고, 숫자에도 된다
// string 타입 + 1 (허용)
// number 타입 + 1 (허용)
// string | number 타입 + 1 (안돼) -> union 타입은 새로운 타입을 하나 만든 것
var 나이임2 = 1;
// 나이임 - 1; // error
// 변수가 분명 1인데 왜 -1 안되는 것? 숫자타입이어야 숫자처럼 연산함
// quiz
// Q1. 다음 변수 4개에 타입 지정해보기
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
// Q2. 학교라는 변수에 타입 지정해보기
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
