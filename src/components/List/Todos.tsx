import { Form, Card } from "react-bootstrap";
import { Todo } from "../../model";

interface ListProps {
  title: string;
  todos: Todo[];
  onSelectedTodosChange: (todo: Todo) => void;
}

const Todos = ({ title, todos, onSelectedTodosChange }: ListProps) => {
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
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default Todos;
