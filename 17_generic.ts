function gen1(x: unknown[]) {
  return x[0]
}

let a = gen1([4, 2]) // a의 타입은 unknown -> 숫자 나오면 숫자로 타입변환 그런거 안해줌


// 해결책: Generic 함수 만들기 = 파라미터로 타입을 입력하는 함수
// + 여러개의 타입을 집어 넣을 수 있음
/* function gen2<MyType, MyType2>(x: MyType[]): MyType {
  return x[0]
} */

// 장점: 확장성이 조금 있어보임 -> 매번 다른 타입 출력 가능
function gen2<MyType>(x: MyType[]): MyType {
  return x[0]
}

let b = gen2<number>([4, 2]) // number라는 타입을 MyType에 집어넣어 주세요
let c = gen2<string>(['4', '2'])


// extends 키워드로 넣을 수 있는 타입 제한 가능
function gen3<MyType extends number>(x: MyType) { // extends : MyType이 우측에 있는 속성을 가지고 있는지 체크
  return x - 1
}

let d = gen3<number>(100)

// 
interface LengthCheck {
  length: number
}

function gen4<MyType extends LengthCheck>(x: MyType) {
  return x.length
}

let e = gen4<string>('100')
let f = gen4<string[]>(['100'])
// let g = gen4<number>(100) // error


/* 참고
class도 class <MyType> {} 이런 식으로 만들면 new로 뽑을 때 타입파라미터를 집어넣을 수 있습니다. 
type Age<MyType> = MyType 이런 식으로 타입변수에도 사용가능
*/


// quiz
// 1. 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
/* function genQuiz1<Type extends LengthCheck>(x: Type) {
  return console.log(x.length)
} */
function genQuiz1<MyType extends string | string[]>(x: MyType) {
  console.log(x.length)
}

genQuiz1<string>('hello')
genQuiz1<string[]>(['kim', 'park'])


// 2. data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
// 근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
interface GenAnimal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }'

function genQuiz2<MyType>(x: string) {
  console.log(JSON.parse(x))
}

genQuiz2<GenAnimal>(data)


// 3. class에 타입 지정하기
class Person3<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let aa = new Person3<string>('어쩌구');
aa.name //string 타입이 되었넹 