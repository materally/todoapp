import { Form, Card } from "react-bootstrap";
import { Todo } from "../../model";

interface ListProps {
  title: string;
  todos: Todo[];
  selectedTodos: Todo[];
  onSelectedTodosChange: (todo: Todo) => void;
}

const Todos = ({
  title,
  todos,
  selectedTodos,
  onSelectedTodosChange,
}: ListProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {todos.map((todo) => (
          <Form.Check
            key={todo.id}
            type="checkbox"
            id={String(todo.id)}
            label={todo.text}
            onChange={() => onSelectedTodosChange(todo)}
            checked={selectedTodos.includes(todo)}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default Todos;
