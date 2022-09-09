/**
 * DONE: Handle user input fields
 * DONE: handle Operation
 * TODO: Handle a list of histories
 * TODO: Render History list
 * TODO: Restore the history
 */

import { useState } from "react";
import shortId from "shortid";
function* generateId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
const getId = generateId();
let initialInputState = {
  a: 0,
  b: 0,
};
function App() {
  const [inputState, setInputState] = useState(initialInputState);
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [historyId, setHistoryId] = useState(null);
  const handleInputChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  const handleArithmeticOPs = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert("Invalid input");
      return;
    }
    const f = new Function(
      "operation",
      `return ${inputState.a} ${operation} ${inputState.b}`
    );
    const result = f(operation);
    setResult(result);
    setHistories([
      ...histories,
      {
        id: shortId.generate(),
        inputs: inputState,
        operation,
        result,
        date: new Date(),
      },
    ]);
  };
  const handleClearOPs = () => {
    setInputState(initialInputState);
    setResult(0);
  };
  const handleReStore = (history) => {
    setInputState(history.inputs);
    setResult(history.result);
    setHistoryId(history.id);
  };
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result:{result}</h1>
      <div>
        <p>Inputs</p>
        <input
          type="number"
          name="a"
          value={inputState.a}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="b"
          value={inputState.b}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <p>operations</p>
        <button onClick={() => handleArithmeticOPs("+")}>+</button>
        <button onClick={() => handleArithmeticOPs("-")}>-</button>
        <button onClick={() => handleArithmeticOPs("*")}>*</button>
        <button onClick={() => handleArithmeticOPs("/")}>/</button>
        <button onClick={() => handleArithmeticOPs("%")}>%</button>
        <button onClick={() => handleClearOPs()}>clear</button>
      </div>
      <div>
        <p>history</p>
        <p>
          {histories.length === 0 ? (
            <small>There is no history</small>
          ) : (
            <ul>
              {histories.map((history) => (
                <li key={history.id}>
                  <p>
                    Operations: {history.inputs.a} {history.operation}{" "}
                    {history.inputs.b} Result:{history.result}
                  </p>
                  <small>{history.date.toLocaleString()}</small>
                  <br />
                  <button
                    onClick={() => handleReStore(history)}
                    disabled={historyId === history.id}
                  >
                    Restore
                  </button>
                </li>
              ))}
            </ul>
          )}
        </p>
      </div>
    </div>
  );
}

export default App;
