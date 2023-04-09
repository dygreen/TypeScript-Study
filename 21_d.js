"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import/export 할게 많으면 namespace나 import * as 어쩌구 쓰기
// d.ts 파일을 레퍼런스용으로 쓰려면, ts파일마다 d.ts 파일을 자동생성하면 됨
/*
(tsconfig.json)

{
    "compilerOptions": {
        "target": "es5",
        "module": "es6",
        "declaration": true, <- 저장시 자동으로 ts파일마다 d.ts 파일이 옆에 생성됨 (타입정의만 쭉 정리되어 담김)
    }
}
*/
// d.ts 파일은 자동으로 글로벌 모듈 아님
/* -> 글로벌 모듈로 만드는 법
프로젝트 내에 types/common 이런 폴더 두개를 만드시고
tsconfig.json 파일에 "typeRoots": ["./types"] 이런 옵션을 추가해주면 됩니다.
이러면 ts 파일 작성할 때 타입없으면 자동으로 여기서 타입 찾아서 적용해줌
*/ 
