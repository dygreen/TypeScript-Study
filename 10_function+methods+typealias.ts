// 1. 모양: type 함수타입 = () => {};
// type 함수타입 = (파라미터) => return값;
type 함수타입 = (a: string) => number;

// 2. 함수 표현식에만 type alias 사용 가능 (not 함수 선언식)
let 함수11: 함수타입 = function (a) {
  return 10
}


// *** object 안에 함수 만들기
type Member22 = {
  name: string,
  age: number,
  plusOne: (x: number) => number,
  changeName: () => void
}

let 회원정보: Member22 = {
  name: 'Kim',
  age: 30,
  plusOne(x) {
    return x + 1
  },
  changeName: () => {
    console.log('안녕')
  }
}

console.log(회원정보.plusOne(2))
console.log(회원정보.changeName())



// quiz 1. 함수 만들기
/* 
- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
*/
type Quiz10 = {
  cutZero: (x: string) => string,
  removeDash: (x: string) => number
}

let quiz10: Quiz10 = {
  cutZero(x) {
    return x.replace(/^0+/, '')
  },
  removeDash(x) {
    return Number(x.replace(/-/g, ''))
  }
}

console.log(quiz10.cutZero('0아아아'))
console.log(quiz10.removeDash('---920---92'))


// quiz 2. 함수에 함수 집어넣기
/* 
1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
*/

type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 만들함수(a: string, x: 함수타입1, y: 함수타입2) {
  let result1 = x(a);
  let result2 = y(result1);

  console.log(result2);
}

만들함수('010-1111-2222', quiz10.cutZero, quiz10.removeDash);