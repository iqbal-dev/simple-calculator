/**
 * DONE: Handle user input fields
 * DONE: handle Operation
 * TODO: Handle a list of histories
 * TODO: Render History list
 * TODO: Restore the history
 */

import { useState } from "react";
import shortId from "shortid";
import History from "./history/History";
import InputsSection from "./inputs/InputsSection";
import OperationSection from "./operations/OperationSection";
let initialInputState = {
  a: 20,
  b: 10,
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
      <InputsSection
        inputState={inputState}
        handleInputChange={handleInputChange}
      />
      <OperationSection
        handleArithmeticOPs={handleArithmeticOPs}
        handleClearOPs={handleClearOPs}
      />
      <History
        historyId={historyId}
        histories={histories}
        handleReStore={handleReStore}
      />
    </div>
  );
}

export default App;
