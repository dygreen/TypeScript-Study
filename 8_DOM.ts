let 제목 = document.querySelector('#title');
// 제목.innerHTML = '반가워요' -> error: 타입이 Element | null 인 union type이라서 -> narrowing 해야함


// ==== HTML 조작시 narrowing 하는 방법 5개 ====
// 1. narrowing
if (제목 != null) {
  제목.innerHTML = '반가워요'
}


// 2. instanceof 연산자 (가장 많이 씀)
// 왼쪽 오브젝트(=제목)이 오른쪽에 있는 class(HTMLElement)의 자식이냐 => boolean
if (제목 instanceof HTMLElement) {
  제목.innerHTML = '반가워요'
}


// 3. as로 사가치기 (자주 사용하지 말기)
let 제목2 = document.querySelector('#title') as HTMLElement;


// 4. 오브젝트에 붙이는 ?.
/* ? (optional chaning)
1. 제목에 innerHTML이 있으면 출력해주고
2. 없으면 undefined 뱉으셈
*/
if (제목?.innerHTML != undefined) {
  제목.innerHTML = '반가워요'
}


// 5. tsconfig에서 strict 모드 끄기



// ==== <a> 태그의 href 속성내용 바꿔보기 ====
let 링크 = document.querySelector('.link');
// 링크.href = 'https://kakao.com'; -> error : union type

if (링크 instanceof HTMLAnchorElement) {
  링크.href = 'https://kakao.com';
}


/* html 태그 종류별로 정확한 타입명칭이 있습니다.
a 태그는 HTMLAnchorElement
img 태그는 HTMLImageElement
h4 태그는 HTMLHeadingElement
 */


/* 타입스크립트에서 쓸 수 있는 HTML 타입들: Element, HTMLElement, HTMLAnchorElement 등
: Element에 들어있는 걸 복사해서 몇 개 더 추가해 HTMLElement 타입을 만들고, HTMLElement에 ~~ 추가해 HTMLAnchorElement 타입을 만들어 놓음

HTMLAnchorElement 이건 조금 상세한 타입임
"href, style, class, id 이런 속성을 가질 수 있다~"라고 타입이 정의되어 있음 
그래서 a태그에게 어울리는 타입인 HTMLAnchorElement라는 타입을 쓸 수 있는지 instanceof 키워드로 확인 = 확인하는 과정 = narrowing으로 인정해줌
*/


// ==== 타입스크립트에서 eventListner 부착하는 법 ====
let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', function () {
  if (버튼 instanceof HTMLElement) {
    버튼.innerHTML = 'button'
  }
})
// ? => 버튼에 addEventListner 가능하면 해주시고, 아니면 undefined 뱉으셈



// quiz
// 1. 버튼을 누르면 이미지를 바꿔보기
let 이미지 = document.querySelector('#image');

if (이미지 instanceof HTMLImageElement) {
  이미지.src = 'change.jpg'
}


// 2. 3개의 링크 요소들의 href 속성을 전부 바꿔보기
let 네이버 = document.querySelectorAll('.naver');

네이버.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = 'https://kakao.com'
  }
})