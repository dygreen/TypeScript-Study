// index signature 쓰면 object 타입지정 한번에 가능
// * 대괄호 안엔 string 또는 number만 가능
interface StringOnly {
  [key: string]: string | number;
}

// [key: string] = 모든 속성
/* 
** [key: string] 즉 모든 속성이 string이라는 말인데, age 또한 모든 속성에 포함되어 있으니 성립되지 않음
{ 모든 속성 : string, age : number } (x)
interface StringOnly {
  age: number;
  [key: string]: string;
}

** 아래처럼 중복되는 속성을 표현하면 성립됨
{ 모든 속성 : string | number, age : number } (o)
interface StringOnly {
  age: number;
  [key: string]: string | number;
} 
*/


let userr: StringOnly = {
  name: 'kim',
  age: 20,
  location: 'seoul'
}


// 속성 이름이 숫자인 경우
let userr2: StringOnly = {
  0: 'kim',
  1: 20,
  2: 'seoul'
}
userr2[0] // 이런 식으로 꺼내쓸 수 있음 (object로도 array처럼 사용 가능)
// StringOnly 타입으로 지정해도 에러가 안나는 이유? object key 값을 숫자로 지정해도 문자화되기 때문



// recursive하게 타입 만드는 법: 내부에 중첩되는 object를 한번에 타입 지정 가능
interface MyType {
  'font-size': MyType | number;
}

let css: MyType = {
  'font-size': {
    'font-size': {
      'font-size': 14
    }
  }
}



// === Quiz ===
// q1. 타입 지정하기
interface ObjType {
  [key: string]: string | number;
}

let obj: ObjType = {
  model: 'k5',
  brand: 'kia',
  price: 6000,
  year: 2030,
  date: '6월',
  percent: '5%',
  dealer: '김차장',
}

// q2. 타입 지정하기
interface ObjType2 {
  'font-size': number;
  [key: string]: ObjType2 | number;
}

let obj2: ObjType2 = {
  'font-size': 10,
  'secondary': {
    'font-size': 12,
    'third': {
      'font-size': 14
    }
  }
}
/* 
1. ObjType2 만들었는데 여기 안엔 'font-size' 속성, 그리고 모든 문자 속성이 들어갈 수 있습니다.

2. 모든 문자 속성이 들어오면 number | ObjType2 가져야한다고 타입지정해놨습니다.

그럼 이제 여러분들이 object 안에 object를 집어넣어도 MyType 타입과 비슷하게 생기면 통과시켜줍니다.
*/