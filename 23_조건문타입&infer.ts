// 삼항연산자 사용
// -> 파라미터로 string을 집어넣으면 string 남겨주고, 그게 아니면 unknown 남겨줘
/* 
1. type if문은 삼항연산자로
2. 조건식은 extends 써야함
*/
type Age2<T> = T extends string ? string : unknown;
let aaaa: Age2<string>; //string
let aaaa2: Age2<number>; //unknown


// Q. 조건문으로 타입 만들기
/* 
- 파라미터로 array 타입을 입력하면 array 첫 자료의 타입을 남김
- array 타입 말고 다른거 입력하면 any 남김
*/
type FirstItem<T> = T extends any[] ? T[0] : any;
let age11: FirstItem<string[]>;
let age22: FirstItem<number>;


// infer 키워드
// -> 조건문에서 쓸 수 있는 infer 키워드, 타입을 왼쪽에서 추출해줌
type Person4<T> = T extends infer R ? R : unknown;
// T에서 타입을 추출해서 R변수에 담아줘
type a = Person4<string> // a는 string 타입이 됨

// ** 예시2: array 내부의 타입만 뽑고 싶다
type Person5<T> = T extends (infer R)[] ? R : unknown;
type b = Person5<string[]> // b는 string 타입이 됨

// ** 예시3: 함수를 넣으면 함수의 return 타입만 뽑고 싶다
type Person6<T> = T extends (() => infer R) ? R : unknown;
type c = Person6<() => void> // T는 '() => void' 라는 타입, R은 void, c는 void

// ## 함수를 넣으면 함수의 return 타입만 뽑고 싶다
// -> ReturnType이라는 기본 함수 쓰면 알아서 해줌
type d = ReturnType<() => void>



// Q1.
/* 
1. array 타입을 입력하면
2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?
*/
type Age6<T> = T extends [string, ...any] ? T[0] : unknown;

let age1111: Age6<[string, number]>; // age1111의 타입은 string
let age2222: Age6<[boolean, number]>; // unknown


// Q2. 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보기
type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;

type a2 = 타입뽑기<(x: number) => void> //이러면 number가 이 자리에 남음
type b2 = 타입뽑기<(x: string) => void> //이러면 string이 이 자리에 남음