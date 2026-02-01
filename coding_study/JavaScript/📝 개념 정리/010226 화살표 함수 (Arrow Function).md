"function 글자 치기가 귀찮아서 만든 문법"

- 리액트 컴포넌트의 90%는 이걸로 만든다

기존:
```js
function makeLog(title) {
  return "기록: " + title;
}
```

화살표 함수 (기본): `function` 을 없애고 => 를 넣는다.
```js
const makeLog = (title) => {
  return "기록: " + title;
}
```

리액트 핵심 (생략형): 중괄호 {}와 return을 생략할 수 있다. **이게 제일 중요하다**
```js
// 한 줄일 때는 return과 {} 생략 가능!
const makeLog = (title) => "기록: " + title;
```
- 리액트에서 `const InsightCard = () => (...)` 이런 코드를 수도 없이 보게 된다. 그냥 return하는 함수구나 하고 넘어가면 된다. 

---

