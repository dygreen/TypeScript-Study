"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./App.css");
/* 1. JSX 표현하기 */
var box = <div></div>;
function App() {
    // 4. useState 타입지정 : 알아서 해줌
    var _a = (0, react_1.useState)('Kim'), user = _a[0], setUser = _a[1]; // string을 초기값으로 입력했기 때문에, 자동으로 타입을 지정해줌
    // 4-1. union 타입을 지정하고 싶다면? generic
    var _b = (0, react_1.useState)('Kim'), user2 = _b[0], setUser2 = _b[1];
    return (<div className="App">
      <h4>안녕하십니까</h4>
      <Profile name="철수" age="20"/>
    </div>);
}
// 2. Component 만들 때 타입지정: parameter, return
// 3. Component props 타입지정 (type alias, interface...)
function Profile(props) {
    return (<div>{props.name}입니다</div>);
}
exports.default = App;
