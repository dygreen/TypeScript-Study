// 타입스크립트: 자바스크립트 타입부분을 업그레이드해서 사용하고 싶을 때 쓰는 자바스크립트 대용품 + 에러메시지도 정확함

// 1. 간단한 변수 타입 지정 가능
let name1: string = 'kim';

let name2: string[] = ['kim', 'park'];

let name3: { name: string } = { name: 'Kim' };
let name7: { name?: string, age: number } = { age: 0 }; //?=옵션이라는 뜻 (name 속성은 옵션이기 때문에 안들어가 있어도 에러를 발생하지 말아라)


// 2. 다양한 타입이 들어올 수 있게 하려면 : union type
let name4: string | number = 123;


// 3. 타입은 변수에 담아 쓸 수 있음 : type alias
type Mytype = string | number;
let name5: Mytype = 123;


// 4. 함수에 타입지정 가능 : 파라미터와 return 값이 어떤 타입일지 지정 가능
function one(x: number): number {
  return x * 2
}
// -> 이 함수는 파라미터로 number, return 값으로 number를 반환해야 함

// 4-1. void : return 값을 반환하지 않는 함수에 설정함
function assignClass(name: string): void {
  document.documentElement.classList.add(name);
}

// 4-2. 변수의 타입이 확실하지 않으면 연산 불가능 -> 항상 타입이 무엇인지 미리 체크하는 narrowing or assertion 문법 사용하기
/* 
function 함수명(x: number | string) {
    return x * 2 
} 
*/
function 함수명(x: number | string) {
  if (typeof x === 'number') {
    return x * 2
  }
}


// 5. array에 쓸 수 있는 tuple 타입
type Member = [number, boolean]; // 무조건 첫 째는 number, 둘 째는 boolean
let john: Member = [123, true];


// 6. object에 타입 지정
type Member2 = {
  name: string
}
let john2: Member2 = { name: 'kim' }

// ** type 키워드 대신 비교적 최근에 나온 interface 키워드 이용해도 무방함


// 7. object에 타입지정해야 할 속성이 너무 많으면 : index signature
type Member3 = {
  [key: string]: string, // 글자로 된 모든 object 속성의 타입은 :string
}
let john3: Member3 = { name: 'Kim', age: '123' };


// 8. class 타입지정 가능
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}