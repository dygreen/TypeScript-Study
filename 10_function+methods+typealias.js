// 2. 함수 표현식에만 type alias 사용 가능 (not 함수 선언식)
var 함수11 = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'Kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
console.log(회원정보.plusOne(2));
console.log(회원정보.changeName());
var quiz10 = {
    cutZero: function (x) {
        return x.replace(/^0+/, '');
    },
    removeDash: function (x) {
        return Number(x.replace(/-/g, ''));
    }
};
console.log(quiz10.cutZero('0아아아'));
console.log(quiz10.removeDash('---920---92'));
function 만들함수(a, x, y) {
    var result1 = x(a);
    var result2 = y(result1);
    console.log(result2);
}
만들함수('010-1111-2222', quiz10.cutZero, quiz10.removeDash);
