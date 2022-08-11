// 타입스크립트: 자바스크립트 타입부분을 업그레이드해서 사용하고 싶을 때 쓰는 자바스크립트 대용품 + 에러메시지도 정확함
// 1. 간단한 변수 타입 지정 가능
var name1 = 'kim';
var name2 = ['kim', 'park'];
var name3 = { name: 'Kim' };
// let name3: { name?: string } = { name: 'Kim' }; ?=옵션이라는 뜻
// 2. 다양한 타입이 들어올 수 있게 하려면 : union type
var name4 = 123;
var name5 = 123;
// 4. 함수에 타입지정 가능
function one(x) {
    return x * 2;
}
var john = [123, true];
var john2 = { name: 'Kim', age: '123' };
// 7. class 타입지정 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());