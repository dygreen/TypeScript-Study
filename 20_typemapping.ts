// ** .keys(): key 값을 array 자료로 담아줌
let objj = { name: 'Kim', age: 20 }
Object.keys(objj) // ['name', 'age']

// key 값을 사용해 type 체크할 때
interface Personn {
  age: number,
  name: string
}

// keyof : object 타입에 사용하면, object 타입이 가지고 있는 모든 key 값을 union type으로 합쳐서 내보내줌 -> object의 key를 뽑아서 새로운 타입을 만들고 싶을 때 사용하는 연산자
type PersonKeys = keyof Personn // 'age' | 'name'
let aaa: PersonKeys = 'age'
// let aaa: PersonKeys = 'name'


// ** index signature에 keyof 쓰기
interface Personn2 {
  [key: string]: number;
}

type PersonKeys2 = keyof Personn2 // string | number (object key 값에 숫자 넣어도 문자로 치환되어서 그럼)
let aaa2: PersonKeys2 = 'name'


// ** 타입 변환기 만들기
type Carr = {
  color: boolean;
  model: boolean;
  price: boolean | number;
}

// [자유작명 in keyof 타입파라미터]: 원하는 타입
/* 
in : 왼쪽이 오른쪽에 들어있냐는 뜻
keyof : 오브젝트 타입에서 key 값만 union type으로 뽑아주는 역할
*/
type TypeChanger<MyType> = {
  [key in keyof MyType]: string
}
// keyof MyType => 파라미터로 들어온 object 타입의 key 값 => 'color' | 'model' | 'price'

type 새로운타입 = TypeChanger<Carr>
/* 
type 새로운타입 = {
  color: string;
  model: string;
  price: string;
} 
*/



// === Quiz ===
// q1. 타입 변환기 돌리기
type Bus = {
  color: string,
  model: boolean,
  price: number
}

type BusTypeChanger<MyType> = {
  [key in keyof MyType]: string | number
}

type NewBus = BusTypeChanger<Bus>


// q2. object안에 들어있는 모든 속성을 string, number 이렇게 고정된 타입으로 변환해주는 것이 아니라 
// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 타입 변환기 만들기
type BusTypeChanger2<MyType, T> = {
  [key in keyof MyType]: T
}

type NewBus2 = BusTypeChanger2<Bus, boolean>
type NewBus3 = BusTypeChanger2<Bus, string[]>