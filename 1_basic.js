// 타입스크립트: 자바스크립트 타입부분을 업그레이드해서 사용하고 싶을 때 쓰는 자바스크립트 대용품 + 에러메시지도 정확함
// 1. 간단한 변수 타입 지정 가능
var name1 = 'kim';
var name2 = ['kim', 'park'];
var name3 = { name: 'Kim' };
var name7 = { age: 0 }; //?=옵션이라는 뜻 (name 속성은 옵션이기 때문에 안들어가 있어도 에러를 발생하지 말아라)
// 2. 다양한 타입이 들어올 수 있게 하려면 : union type
var name4 = 123;
var name5 = 123;
// 4. 함수에 타입지정 가능 : 파라미터와 return 값이 어떤 타입일지 지정 가능
function one(x) {
    return x * 2;
}
// -> 이 함수는 파라미터로 number, return 값으로 number를 반환해야 함
// 4-1. void : return 값을 반환하지 않는 함수에 설정함
function assignClass(name) {
    document.documentElement.classList.add(name);
}
// 4-2. 변수의 타입이 확실하지 않으면 연산 불가능 -> 항상 타입이 무엇인지 미리 체크하는 narrowing or assertion 문법 사용하기
/*
function 함수명(x: number | string) {
    return x * 2
}
*/
function 함수명(x) {
    if (typeof x === 'number') {
        return x * 2;
    }
}
var john = [123, true];
var john2 = { name: 'kim' };
var john3 = { name: 'Kim', age: '123' };
// 8. class 타입지정 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
