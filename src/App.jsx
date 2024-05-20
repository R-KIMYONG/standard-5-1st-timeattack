import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState(0);

  const handlePlus = () => {
    setResult((prev) => Number(prev) + Number(num));
    setNum("");
  };
  const handlemiuns = () => {
    setResult((prev) => Number(prev) - Number(num));
    setNum("");
  };

  const reset = () => {
    setNum("");
    setResult("");
  };
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />{" "}
        만큼을 <button onClick={handlePlus}>더할게요</button>{" "}
        <button onClick={handlemiuns}>뺄게요</button>
        <button onClick={reset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result ? result : 0}</p>
      </div>
    </div>
  );
}
