// 1. && 연산자로 null & undefined 타입 체크하기
function check1(a) {
    if (a && typeof a === 'string') {
        // a가 undefined이면 if문 실행 X
        // a가 string이면 if문 실행 O
    }
}
function check2(animal) {
    if ('swim' in animal) { // Fish 타입인지 검사
        animal.swim;
    }
}
// 3. (class로부터 생산된 object라면) instanceof 연산자로 object narrowing 가능
// 오브젝트 instanceof 부모class
var 날짜 = new Date();
if (날짜 instanceof Date) {
}
function check3(x) {
    if (x.wheel === '4개') {
    }
}
