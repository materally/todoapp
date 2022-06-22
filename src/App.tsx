import { useState, SetStateAction } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Days, TodoDay } from "./model";
import Add from "./components/Add";

function App() {
  const [inputTodoValue, setInputTodoValue] = useState<string>("");
  const [inputDayValue, setInputDayValue] = useState<TodoDay>(Days.TODAY);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputTodoValue(e.currentTarget.value);
  };

  const handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputDayValue(e.currentTarget.value as SetStateAction<TodoDay>);
  };

  const handleButtonClick = () => {
    console.log("button clicked");
  };

  return (
    <div className="container">
      <Add
        inputTodoValue={inputTodoValue}
        onInputChange={handleInputChange}
        inputDayValue={inputDayValue}
        onRadioChange={handleRadioChange}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
