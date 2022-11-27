// primitive types
var 이름 = 'kim';
var 나이 = 50;
var 결혼했니 = true;
// null, undefined : 굳이 사용하진 않음
var 결혼했니2 = null;
var 결혼했니3 = undefined;
// array
var 회원들 = ['kim', 'park'];
var 회원들2 = ['kim', 'park', 123]; // string, number가 동시에 들어갈 때 타입지정
// object
var 회원들3 = { member1: 'kim', member2: 'park' };
// ** 타입지정 원래 자동으로 됨 -> 타입지정 문법 생략 가능
// 모든 변수 / array / object에 타입을 지정할 필요 없음 (자동으로 부여해주기 때문)
// quiz
// Q1. 이름, 나이, 출생지역 변수로 저장하기
var myName = 'doyeon';
var myAge = 6;
var myBorn = 'seoul';
// Q2. 가장 좋아하는 곡과 가수 이름 변수에 object 자료형으로 담기
var mySong = { song: 'Attention', singer: 'NewJeans' };
// Q3. 자료의 타입 지정 해보기
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
