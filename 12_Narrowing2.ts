// 1. && 연산자로 null & undefined 타입 체크하기
function check1(a: string | undefined) {
  if (a && typeof a === 'string') {
    // a가 undefined이면 if문 실행 X
    // a가 string이면 if문 실행 O
  }
}

/** && 연산자의 다른 기능
- && 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면
- && 사이에서 처음 등장하는 falsy 값을 찾아주고, 그게 아니면 마지막 값을 남겨줌
(*falsy 값 = false와 유사한 기능을 하는 null, undefined, NaN 이런 값들을 의미)
*/

/* if (변수 != null) 
: null, undefined 두 개를 동시에 거를 수 있음
*/


// 2. in 키워드로 object narrowing 가능
// 속성명 in 오브젝트 자료 (서로 다른 속성을 가지고 있어야 사용 가능)
type Fish = { swim: string }
type Bird = { fly: string }

function check2(animal: Fish | Bird) {
  if ('swim' in animal) { // Fish 타입인지 검사
    animal.swim
  }
}


// 3. (class로부터 생산된 object라면) instanceof 연산자로 object narrowing 가능
// 오브젝트 instanceof 부모class
let 날짜 = new Date()
if (날짜 instanceof Date) {

}


// object 타입이 둘 다 비슷하게 생겼을 때 narrowing 하는 방법
// 4. object 타입마다 literal type 만들어두면 narrowing 편리
type Car = {
  wheel: '4개', // literal type
  color: string
}

type Bike = {
  wheel: '2개', // literal type
  color: string
}

function check3(x: Car | Bike) {
  if (x.wheel === '4개') {

  }
}