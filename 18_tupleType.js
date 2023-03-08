var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// tuple type : 위치까지 고려한 타입지정 가능
var 멍멍 = ['dog', true];
// 첫 자료는 무조건 string, 둘째 자료는 무조건 boolean
// tuple 안에 옵션표시 가능 (? 는 맨 뒤 -> 그 앞으로만 가능)
// rest parameter 타입 지정시 tuple 가능
/* 함수 정의할 때 rest parameter 사용하기
* : 여기에 파라미터가 몇 개 들어올지 아직 몰라요~라는 뜻
* x 자리에 입력한 파라미터들은 array에 담겨오기 때문에 array처럼 타입 지정해주는 것이 일반적
* */
function 멍멍함수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
멍멍함수(1, '2');
// array 합칠 때 spread 연산자 사용하기
var arr18 = [1, 2, 3];
var arr19 = __spreadArray([4, 5], arr18, true);
// ...number[] => array 들어오는데 아직 몇 개인지 몰라요~
// quiz
// Q1. 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
var todayIEat = ['noodle', 10900, true];
// Q2. 이렇게 생긴 자료는 타입지정 어떻게 해야할까요? (tuple 타입, spread 연산자 사용하기)
var arr20 = ['동서녹차', 4000, true, false, true, true, false, true];
// Q3. 함수에 타입지정하기
function 함수18() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
함수18('fn', true, 2, 2, 's', 'n', 10);
// Q4. 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
function 함수19() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var a = [];
    var b = [];
    x.forEach(function (param, idx) {
        if (typeof param === 'string') {
            a.push(param);
        }
        else {
            b.push(param);
        }
    });
    return [a, b];
}
/* 답 :
function 함수19A(...rest: (string | number)[]) {
  let result: [string[], number[]] = [[],[]]

  rest.forEach((a) => {
    if (typeof a === 'string') {
      result[0].push(a)
    } else {
      result[1].push(a)
    }
  })

  return result
}*/
함수19('b', 5, 6, 8, 'a');
