var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class 복사하고 싶으면 extends 붙이면 됨
var Userrr = /** @class */ (function () {
    function Userrr() {
        this.x = 10;
    }
    return Userrr;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser;
}(Userrr));
var 사람 = new NewUser(); // NewUser {x: 10}
// *** private, protected 붙이면 class {} 안에서만 사용 가능
/* private vs protected 차이
- private는 extends된 클래스에서 사용 불가능
- protected 붙이면 현재 class {} 안에서 + extends된 class {} 안에서 사용 가능
*/
var Userrr2 = /** @class */ (function () {
    function Userrr2() {
        this.x = 10;
    }
    return Userrr2;
}());
var NewUser2 = /** @class */ (function (_super) {
    __extends(NewUser2, _super);
    function NewUser2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser2.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser2;
}(Userrr2));
/*
* protected : extends된 class는 사용 가능, 자식들 사용 불가능
* private : extends된 class는 사용 불가능, 자식들 사용 불가능
*/
// *** static 키워드 붙이면 부모 class에 직접 부여됨 (+자식에게 안물려줌, extends 하면 잘 따라옴)
// private / protected / public + static 가능
var Test = /** @class */ (function () {
    function Test() {
        this.y = 20;
    }
    Test.x = 10;
    return Test;
}());
var Test자식 = new Test();
console.log(Test자식); // Test {y: 20}
console.log(Test.x); // 10
// 활용 예시
var Test2 = /** @class */ (function () {
    function Test2() {
        // intro = this.skill + '전문가입니다'; (x)
        this.intro = Test2.skill + '전문가입니다'; // (o)
    }
    Test2.skill = 'js';
    return Test2;
}());
var 철수2 = new Test2();
console.log(철수2); // Test2 {intro: 'js전문가입니다'}
Test2.skill = 'ts';
var 철수3 = new Test2();
console.log(철수3); // Test2 {intro: 'ts전문가입니다'}
// Quiz
// 1. x, y, z 속성의 특징은?
var Quiz1 = /** @class */ (function () {
    function Quiz1() {
        this.z = 30;
    }
    Quiz1.x = 10;
    Quiz1.y = 20;
    return Quiz1;
}());
/*
1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만
x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다.
User의 자식들은 x와 y를 쓸 수 없습니다.

2. private static x는 class 내부에서만 수정가능합니다.

3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯

4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데
약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다.
*/
// 2. x 속성에 숫자를 더해주는 함수 만들기
var Quiz22 = /** @class */ (function () {
    function Quiz22() {
    }
    Quiz22.addOne = function (num) {
        Quiz22.x += num;
    };
    Quiz22.printX = function () {
        console.log(Quiz22.x);
    };
    Quiz22.x = 10;
    Quiz22.y = 20;
    return Quiz22;
}());
Quiz22.addOne(3); //이렇게 하면 x가 3 더해져야함
Quiz22.addOne(4); //이렇게 하면 x가 4 더해져야함
Quiz22.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함 -> 17
// 3. 박스 무작위 배치
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n      top:".concat(a * 400, "px; \n      left:").concat(a * 400, "px; \n      width:").concat(this.width, "px; \n      height : ").concat(this.height, "px; \n      background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
var 네모2 = new Square(30, 30, 'red');
네모2.draw();
네모2.draw();
네모2.draw();
네모2.draw();
