// object에 타입지정하려면 interface
interface Square {
  color: string,
  width: number
}

let 네모: Square = { color: 'red', width: 100 };


// interface 장점 : extends로 복사가능 (=복사 붙여넣기)
// * extends 쓸 때 중복속성 발생하면? 에러로 잡아줌
interface Student {
  name: string
}

interface Teacher extends Student {
  // name : number, -> error (중복속성)
  age: number
}
/* interface Teacher {
  name: string,
  age: number
} */

let 학생: Student = { name: 'kim' };
let 선생: Teacher = { name: 'kim', age: 20 };


// type도 interface의 extends와 비슷한 기능이 있음 : & 기호 (intersection type)
// & = 교차해 달라, 왼쪽도 만족하고 오른쪽도 만족하는 타입을 만들어주세요(=두 타입을 전부 만족하는 타입)
type Animal2 = { name: string }
type Cat = { age: number } & Animal2


/* type vs interface
### interface는 중복선언 가능 (합쳐짐 = 자동 extends됨)
interface Student {
  name : string
}
interface Student {
  score : number
}
-> Student에는 { name : string, score : number }가 들어가 있음

### type은 중복선언 불가능
*/


// quiz
// 1. interface 이용해서 간단하게 타입을 만들어봅시다
interface Phone {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Phone = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] }


// 2. object들이 잔뜩 들어갈 수 있는 array 만들기
interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];


// 3. 위에서 만든 타입 extends 하기
interface NewCart extends Cart {
  card: boolean;
}

let 장바구니2: NewCart[] = [{ product: '청소기', price: 7000, card: false }];


/* 4. object 안에 함수 2개 넣고 싶음 (함수 타입 만들기)
1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
이 object 자료를 어떻게 만들면 될까요? 
interface를 이용해서 object에 타입지정도 해보십시오. 
*/
// **** 함수타입은 () => {} 이렇게 만들면 됨
interface MathObj {
  plus: (a: number, b: number) => number,
  minus: (a: number, b: number) => number
}

let 계산오브젝트: MathObj = {
  plus(a, b) {
    return a + b
  },
  minus(a, b) {
    return a - b
  }
}

// console.log(계산오브젝트.plus(5, 2))