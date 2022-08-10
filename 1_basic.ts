// 타입스크립트: 자바스크립트 타입부분을 업그레이드해서 사용하고 싶을 때 쓰는 자바스크립트 대용품 + 에러메시지도 정확함

// 1. 간단한 변수 타입 지정 가능
let name1: string = 'kim';

let name2: string[] = ['kim', 'park'];

let name3: { name: string } = { name: 'Kim' };
// let name3: { name?: string } = { name: 'Kim' }; ?=옵션이라는 뜻

