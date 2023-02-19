// namespace : TypeScript 타입 변수 숨기기 문법
namespace 네임스페이스 {
  export type Name = string | number;
}

let 변수: 네임스페이스.Name = 'Kim';

namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog { name: string };
}

let dog1: GoodDog.Dog = 'bark';
let dog2: BadDog.Dog = { name: 'paw' }