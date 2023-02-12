// 객체 지향 언어에서 제공하는 public, private, static, protected 키워드 사용 가능
// -> class 많이 만들어서 개발하려면 위 키워드 유용
// *** public : public 붙으면 모든 자식들이 이용 가능 (+함수에 붙이기 가능)
var Userr = /** @class */ (function () {
    function Userr(a) {
        this.name = 'kim';
        this.name = a;
    }
    return Userr;
}());
var 유저1 = new Userr('park');
유저1.name = 'hi';
// *** private : private 붙으면 class 안에서만 수정, 이용 가능
var Userr2 = /** @class */ (function () {
    function Userr2(a) {
        this.familyName = 'kim';
        this.name = a + this.familyName;
    }
    Userr2.prototype.이름변경함수 = function () {
        this.familyName = 'park';
    };
    return Userr2;
}());
var 유저2 = new Userr2('민수');
// 유저2.name = 'hi'; -> error
// console.log(유저2.familyName = 'park') -> error
console.log(유저2); // Userr2 {familyName: 'kim', name: '민수kim'}
// Q. class 밖에서 수정 가능하게 하려면?
// 1. class 안에 familyName 변경 함수 제작
유저2.이름변경함수();
console.log(유저2); // Userr2 {familyName: 'park', name: '민수kim'}
// *** public 키워드 쓰면 this.어쩌구 생략 가능
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var 자식 = new Person1('Kim');
console.log(자식); // Person1 {name: 'Kim'}
