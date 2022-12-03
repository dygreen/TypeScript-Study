/* Type 'string | number' is not assignable to type 'number'.
: string | number 같은 union type에는 일반적으로 조작을 못하게 막아놔서 그럼
1. 타입을 하나로 Narrowing(=좁히다) 해주거나
2. Assert(=선언) 해주거나
 */
// *** Type Narrowing : Type이 아직 하나로 확정되지 않았을 경우 사용함 (typeof 연산자)
function 내함수(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
내함수(123);
function 내함수2(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
}
내함수2(123);
// *주의: if문 썼으면 끝까지 써야 안전 -> else, else if 안쓰면 에러로 잡아줄 수도 있음
/* Narrowing으로 판정해주는 문법들
1. typeof 변수
2. 속성명 in 오브젝트자료 : 이 속성이 저 오브젝트에 있는지
3. 인스턴스 instanceof 부모 : 이 오브젝트가 저거의 자식인지
*/
// *** Assertion : Type을 잠깐 덮어쓰는 것 (비상용)
function 내함수3(x) {
    var array = [];
    array[0] = x; // 왼쪽에 있는 변수를 number로 덮어씌워 주세요 = 주장만 하는거지 실제로 타입을 바꿔주지는 않음
}
/* Assertion 문법의 용도 (굳이 쓸 이유 없음)
1. Narrowing할 때 씀 (여러개의 타입을 하나로 확정지을 때 쓰는 것)
// let 이름: string = 'kim';
// 이름 as number; -> 타입을 a에서 b로 변경 x

2. 무슨 타입이 들어올지 100% 확실할 때 쓰기
// 내함수4('123')라고 써도 버그로 캐치 못 함(=주장만 하는거지 실제로 타입을 바꿔주지는 않음)
*/
function 내함수4(x) {
    return x + 1;
}
console.log(내함수4('123'));
// quiz
// 1. 숫자와 문자가 섞인 array를 입력하면 숫자로 깔끔하게 변환되어 나오는 클리닝 함수 만들기
function cleaning(x) {
    x.map(function (a, i) {
        if (typeof x[i] === 'string') {
            x[i] = Number(x[i]);
        }
        else {
            x[i] = x[i];
        }
    });
    return x;
}
console.log(cleaning(['1', 2, '3']));
function 클리닝함수(a) {
    var 클리닝완료된거 = [];
    a.forEach(function (b) {
        if (typeof b === 'string') {
            클리닝완료된거.push(parseFloat(b));
        }
        else {
            클리닝완료된거.push(b);
        }
    });
    return 클리닝완료된거;
}
console.log(클리닝함수([123, '3']));
// 2. object 자료를 넣으면 과목 중 맨 뒤의 1개를 return해주는 함수 만들기
function subject(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) { // 이 자료가 array type인지 검사
        return x.subject[x.subject.length - 1];
    }
    else {
        return 'no one here';
    }
}
console.log(subject({ subject: ['english', 'art'] }));
console.log(subject({ subject: 'english' }));
// console.log(subject({ hello: 'english' })) -> no one here
