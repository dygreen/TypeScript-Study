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
var userr = {
    name: 'kim',
    age: 20,
    location: 'seoul'
};
// 속성 이름이 숫자인 경우
var userr2 = {
    0: 'kim',
    1: 20,
    2: 'seoul'
};
userr2[0]; // 이런 식으로 꺼내쓸 수 있음 (object로도 array처럼 사용 가능)
var css = {
    'font-size': {
        'font-size': {
            'font-size': 14
        }
    }
};
var obj = {
    model: 'k5',
    brand: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장',
};
var obj2 = {
    'font-size': 10,
    'secondary': {
        'font-size': 12,
        'third': {
            'font-size': 14
        }
    }
};
/*
1. ObjType2 만들었는데 여기 안엔 'font-size' 속성, 그리고 모든 문자 속성이 들어갈 수 있습니다.

2. 모든 문자 속성이 들어오면 number | ObjType2 가져야한다고 타입지정해놨습니다.

그럼 이제 여러분들이 object 안에 object를 집어넣어도 MyType 타입과 비슷하게 생기면 통과시켜줍니다.
*/ 
