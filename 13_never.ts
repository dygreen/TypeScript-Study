/* function return 값에 붙일 수 있는 never type
조건 1. return 값이 없어야 함
조건 2. endpoint가 없어야 함
* 모든 자바스크립트 함수 맨 밑엔 항상 'return undefined'를 가지고 있음 (=조건2가 맞으면 조건1도 맞음)
*/

function test1(): never {
  // endpoint(=끝나지 않는 함수) 만드는 방법
  throw new Error('에러 메세지') // -> 강제로 에러를 발생해 전체 코드실행 중단됨
  // while (true) {} -> 내부 코드를 무한히 반복함
}

// * while 문법: 소괄호() 안의 조건식이 true일 경우 계속 내부 코드를 실행해라


// never 타입이 등장하는 경우
// 1. 뭔가 이상한 narrowing
function fnNever(param: string) {
  if (typeof param == 'string') {
    console.log(param)
  } else {
    console.log(param) // param의 타입이 string일 수 밖에 없는데 쓸데없는 narrowing을 함 -> else문이 필요 없음 -> never 타입이 지정됨 -> 코드에 문제가 있다는 것을 파악하고 다시 확인해보는 용도
  }
}

// 2. 어떤 함수표현식은 return 타입이 자동으로 never
// 함수 선언문: 아무것도 return 하지 않고 끝나지도 않을 경우 void 타입이 자동으로 return 타입으로 할당됨
function fnNever2() {
  throw new Error() // void
}

// 함수 표현식: 아무것도 return 하지 않고 끝나지도 않을 경우 never 타입이 자동으로 return 타입으로 할당됨
let fnNever3 = () => {
  throw new Error() // never
}