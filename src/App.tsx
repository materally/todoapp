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

  const handleDeleteIconClick = () => {
    const newTodos = todos.filter((todo) => !selectedTodos.includes(todo));

    return setTodos(newTodos);
  };

  const handleMoveTodo = (direction: Days) => {
    const newTodos = todos.map((todo) => {
      if (selectedTodos.includes(todo) && todo.day !== direction) {
        return { ...todo, day: direction };
      }

      return todo;
    });

    setSelectedTodos([]);
    return setTodos(newTodos);
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
      <List
        todos={todos}
        onSelectedTodosChange={handleOnTodoSelect}
        onDeleteIconClick={handleDeleteIconClick}
        onMoveTodoClick={handleMoveTodo}
        selectedTodos={selectedTodos}
      />
    </Container>
  );
}

export default App;
