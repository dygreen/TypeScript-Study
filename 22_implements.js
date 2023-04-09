var Car2 = /** @class */ (function () {
    function Car2(a) {
        this.price = 1000;
        this.model = a;
    }
    return Car2;
}());
var 붕붕이 = new Car2('morning');
/*
class 이름 우측에 implements를 쓰고 interface 이름을 쓰면
"이 class가 이 interface에 있는 속성을 다 들고있냐"
라고 확인이 가능합니다.
그래서 다 갖고 있으면 별말 안해주고
혹여나 빠진 속성이 있으면 에러로 알려줍니다.
*/
/*
implements는 타입 지정 문법이 아님
- interface에 들어있는 속성을 가지고 있는지 확인만 하라는 뜻임
- class에 타입을 할당하고 변형시키는 키워드 아님
-> implements는 class의 타입을 체크하는 용도지 할당하는게 아님
*/ 
