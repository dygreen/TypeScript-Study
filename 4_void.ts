// 변수만 만들면 :any 자동할당 됨

// 함수 ) 파라미터, return값 타입지정 가능
// * void 타입 : 실수로 뭔가 return 하는 것을 사전에 막을 수 있음
function 함수(x?: number): void {
  1 + 1
  // return 1 + 1 -> error
}
함수()

/* 자바스크립트와 다른점
- 함수를 사용할 때, 타입지정된 파라미터는 필수로 넣어주어야 함
  ** 파라미터를 필수로 넣고 싶지 않을 때(파라미터가 옵션인 경우) => `파라미터변수?: 타입`
  *** `변수?: number`는 `변수: number | undefined`와 같음
*/


function 함수2(x: number | string): void {
  // console.log(x + 3) -> error : union type이기 때문에 연산 불가능
}
함수2(2)


// quiz
// Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고, 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다. 파라미터와 return 타입지정도 잘 해봅시다. 
function fnPrintName(x?: string): void {
  if (x) {
    console.log('안녕하세요' + x)
  } else {
    console.log('이름이 없습니다')
  }
}

fnPrintName('홍길동')
fnPrintName()

// Q2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function fnCount(x: number | string): number {
  return x.toString().length
}

/*  Q3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

(예시)
결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.
*/
function fnMarry(money: number, house: boolean, cute: string): string | void {
  let score: number = 0;

  score += money;

  if (house === true) {
    score += 500
  }

  if (cute === '상') {
    score += 100
  }

  if (score >= 600) {
    return '결혼가능'
  }
}

console.log(fnMarry(100, true, '상'))