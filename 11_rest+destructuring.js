// *** rest parameter 타입 지정
function rest() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
rest(1, 4, 3, 4, 5, 6); // rest parameter 자리에 들어온 데이터는 전부 []에 담아줌
// *** destructuring
var _a = ['안녕', 100], 변수11 = _a[0], 변수22 = _a[1];
console.log(변수11); // '안녕'
var _b = { student1: true, age1: 20 }, student1 = _b.student1, age1 = _b.age1;
// let { student1, age1 } = { student1: true, age1: 20 }
console.log(student1); // true
console.log(age1); // 20
function dest(_a) {
    var student1 = _a.student1, age1 = _a.age1;
    console.log(student1, age1);
}
dest({ student1: true, age1: 20 }); // => let { student1: student1, age1: age1 } = { student1: true, age1: 20 }와 같은 의미
// quiz
// 1. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수
function returnMax() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 0;
    num.forEach(function (data) {
        if (result < data) {
            result = data;
        }
    });
    return result;
}
console.log(returnMax(4, 6, 3, 2));
function quiz2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
quiz2({ user: 'kim', comment: [3, 5, 4], admin: false });
// 3. 아래의 array 자료를 파라미터로 입력할 수 있는 함수 만들기
// 함수( [40, 'wine', false] )
function quiz3(a) {
    console.log(a);
}
quiz3([40, 'wine', false]);
