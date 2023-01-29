// *** rest parameter 타입 지정
function rest(...a: number[]) {
  console.log(a)
}

rest(1, 4, 3, 4, 5, 6) // rest parameter 자리에 들어온 데이터는 전부 []에 담아줌


// *** destructuring
let [변수11, 변수22] = ['안녕', 100]
console.log(변수11) // '안녕'

let { student1: student1, age1: age1 } = { student1: true, age1: 20 }
// let { student1, age1 } = { student1: true, age1: 20 }
console.log(student1) // true
console.log(age1) // 20


type Dest = {
  student1: boolean,
  age1: number
}

function dest({ student1, age1 }: Dest) { // 파라미터 만들기 == 변수 만들기
  console.log(student1, age1)
}

dest({ student1: true, age1: 20 }) // => let { student1: student1, age1: age1 } = { student1: true, age1: 20 }와 같은 의미



// quiz
// 1. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수
function returnMax(...num: number[]) {
  let result = 0;
  num.forEach((data) => {
    if (result < data) {
      result = data
    }
  })

  return result
}

console.log(returnMax(4, 6, 3, 2))


// 2. 아래의 object 자료를 파라미터로 입력할 수 있는 함수 만들기
// 함수( { user : 'kim', comment : [3,5,4], admin : false } )
type Quiz2 = {
  user: string,
  comment: number[],
  admin: boolean
}

function quiz2({ user, comment, admin }: Quiz2): void {
  console.log(user, comment, admin)
}

quiz2({ user: 'kim', comment: [3, 5, 4], admin: false })


// 3. 아래의 array 자료를 파라미터로 입력할 수 있는 함수 만들기
// 함수( [40, 'wine', false] )
function quiz3(a: (number | string | boolean)[]) {
  console.log(a)
}

quiz3([40, 'wine', false])