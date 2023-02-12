// class 복사하고 싶으면 extends 붙이면 됨
class Userrr {
  x = 10;
}

class NewUser extends Userrr {

}

let 사람 = new NewUser() // NewUser {x: 10}


// *** private, protected 붙이면 class {} 안에서만 사용 가능
/* private vs protected 차이
- private는 extends된 클래스에서 사용 불가능
- protected 붙이면 현재 class {} 안에서 + extends된 class {} 안에서 사용 가능
*/
class Userrr2 {
  protected x = 10;
}

class NewUser2 extends Userrr2 {
  doThis() {
    this.x = 20;
  }
}

/* 
* protected : extends된 class는 사용 가능, 자식들 사용 불가능
* private : extends된 class는 사용 불가능, 자식들 사용 불가능
*/



// *** static 키워드 붙이면 부모 class에 직접 부여됨 (+자식에게 안물려줌, extends 하면 잘 따라옴)
// private / protected / public + static 가능
class Test {
  static x = 10;
  y = 20;
}

let Test자식 = new Test();
console.log(Test자식); // Test {y: 20}
console.log(Test.x); // 10

// 활용 예시
class Test2 {
  static skill = 'js';
  // intro = this.skill + '전문가입니다'; (x)
  intro = Test2.skill + '전문가입니다'; // (o)
}

let 철수2 = new Test2();
console.log(철수2); // Test2 {intro: 'js전문가입니다'}

Test2.skill = 'ts';

let 철수3 = new Test2();
console.log(철수3); // Test2 {intro: 'ts전문가입니다'}



// Quiz
// 1. x, y, z 속성의 특징은?
class Quiz1 {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}
/* 
1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 
x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다.
User의 자식들은 x와 y를 쓸 수 없습니다.

2. private static x는 class 내부에서만 수정가능합니다. 

3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯 

4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데 
약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다. 
*/

// 2. x 속성에 숫자를 더해주는 함수 만들기
class Quiz22 {
  private static x = 10;
  public static y = 20;

  static addOne(num: number) { // static 속성들은 class에 직접 부여되는 속성
    Quiz22.x += num
  }

  static printX() {
    console.log(Quiz22.x)
  }
}

Quiz22.addOne(3) //이렇게 하면 x가 3 더해져야함
Quiz22.addOne(4) //이렇게 하면 x가 4 더해져야함
Quiz22.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함 -> 17

// 3. 박스 무작위 배치
class Square {
  constructor(public width: number, public height: number, public color: string) {
  }
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.color}"></div>`;
    document.body.insertAdjacentHTML('beforeend', square);
  }
}


let 네모2 = new Square(30, 30, 'red');
네모2.draw()
네모2.draw()
네모2.draw()
네모2.draw()