// 타입스크립트: 자바스크립트 타입부분을 업그레이드해서 사용하고 싶을 때 쓰는 자바스크립트 대용품 + 에러메시지도 정확함

// 1. 간단한 변수 타입 지정 가능
let name1: string = 'kim';

let name2: string[] = ['kim', 'park'];

let name3: { name: string } = { name: 'Kim' };
// let name3: { name?: string } = { name: 'Kim' }; ?=옵션이라는 뜻


// 2. 다양한 타입이 들어올 수 있게 하려면 : union type
let name4: string | number = 123;


// 3. 타입은 변수에 담아 쓸 수 있음 : type alias
type Mytype = string | number;
let name5: Mytype = 123;


// 4. 함수에 타입지정 가능
function one(x: number): number {
  return x * 2
}
// -> 이 함수는 파라미터로 number, return 값으로 number를 반환해야 함


// 5. array에 쓸 수 있는 tuple 타입
type Member = [number, boolean]; // 무조건 첫 째는 number, 둘 째는 boolean
let john: Member = [123, true];


// 6. object에 타입지정해야 할 속성이 너무 많으면
type Member2 = {
  [key: string]: string, // 글자로 된 모든 object 속성의 타입은 :string
}
let john2: Member2 = { name: 'Kim', age: '123' };


// 7. class 타입지정 가능
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}