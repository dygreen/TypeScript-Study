// type 변수
type Animal = string | number | undefined

let 동물: Animal = 124;

// const 변수는 재할당 불가능 -> but, const로 담은 object 수정은 자유롭게 가능
// typescript 쓰면 object 자료 수정도 막을 수 있음 : readonly
type Friend = {
  readonly name: string,
  color?: string
}

const 친구: Friend = {
  name: 'amber'
}
// 친구.name = 'yura' -> error

// * 타입스크립트 에러는 에디터 & 터미널에서만 존재함


// union type으로 합치기 가능
type Name = string;
type Age = number;

type Person = Name | Age;


// & 연산자로 object 타입 합치기 : extend
// *** &는 합치는게 아니라 왼쪽 오른쪽 둘 다 만족하는 타입임
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY // { x : number, y : number }

let position: NewType = { x: 10, y: 20 };


/* type 변수 특징
- 같은 이름의 type 변수 재정의 불가능 (* interface를 사용하면 재정의 가능함)
type One = { x: number }
type One = { y: number } -> error
*/


// quiz
// 1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type ColorOne = { color: string };
type ColorTwo = { color: number };

type ColorAll = ColorOne & ColorTwo; // &로 합칠 때는 에러 안남

// 사용하면 에러남
// let color: ColorAll = { color: '123' }; 
// let color: ColorAll = { color: 123 }; 
// -> 'never' 타입이 됨 (= 어떤 값도 가질 수 없는 빈 타입) => &는 왼쪽 오른쪽 둘 다 만족하는 타입임을 의미 -> color: string과 color: number 둘 다 만족하는 타입이 어딨음?


/* 2. 다음 조건을 만족하는 타입을 만들어봅시다. 
1. 이 타입은 object 자료형이어야합니다.
2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
*/
type QuizTwo = {
  color?: string,
  size: number,
  readonly position: number[]
}

let test: QuizTwo = {
  size: 123,
  position: [1, 2, 3]
}


/* 3. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
*/
type UserInfo = {
  name: string,
  phone: number,
  email?: string
}

let 회원가입정보: UserInfo = {
  name: 'kim',
  phone: 123
}


/* 4. 다음을 만족하는 type alias를 만들어보십시오.
1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
 */
type QuizFour = UserInfo & { adult: boolean }

let 회원가입정보2: QuizFour = {
  name: 'kim',
  adult: false,
  phone: 1234
}
