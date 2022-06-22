import { useState, SetStateAction } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Days, Todo, TodoDay } from "./model";
import Add from "./components/Add";
import { List } from "./components/List";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputTodoValue, setInputTodoValue] = useState<string>("");
  const [inputDayValue, setInputDayValue] = useState<TodoDay>(Days.TODAY);
  const [selectedTodos, setSelectedTodos] = useState<Todo[]>([]);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputTodoValue(e.currentTarget.value);
  };

  const handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputDayValue(e.currentTarget.value as SetStateAction<TodoDay>);
  };

  const handleAddButtonClick = () => {
    if (inputTodoValue.length === 0) {
      return alert("Please fill the input!");
    }

    setTodos([
      ...todos,
      {
        id: Date.now(),
        day: inputDayValue,
        text: inputTodoValue,
      },
    ]);

    return setInputTodoValue("");
  };

  const handleOnTodoSelect = (todo: Todo) => {
    const newSelectedTodos = selectedTodos.includes(todo)
      ? selectedTodos.filter((selectedTodo) => selectedTodo !== todo)
      : [...selectedTodos, todo];

    return setSelectedTodos(newSelectedTodos);
  };

  return (
    <Container>
      <Add
        inputTodoValue={inputTodoValue}
        onInputChange={handleInputChange}
        inputDayValue={inputDayValue}
        onRadioChange={handleRadioChange}
        onButtonClick={handleAddButtonClick}
      />
      <List todos={todos} onSelectedTodosChange={handleOnTodoSelect} />
    </Container>
  );
}

export default App;
