import { Row, Col } from "react-bootstrap";
import { Days, Todo } from "../../model";
import Todos from "./Todos";

interface ListProps {
  todos: Todo[];
  onSelectedTodosChange: (todo: Todo) => void;
}

const List = ({ todos, onSelectedTodosChange }: ListProps) => {
  const todayTodos = todos.filter(({ day }) => day === Days.TODAY);
  const tomorrowTodos = todos.filter(({ day }) => day === Days.TOMORROW);

  return (
    <Row className="mt-4">
      <Col>
        <Todos
          title="Tasks for Today"
          todos={todayTodos}
          onSelectedTodosChange={onSelectedTodosChange}
        />
      </Col>
      <Col>icons</Col>
      <Col>
        <Todos
          title="Tasks for Tomorrow"
          todos={tomorrowTodos}
          onSelectedTodosChange={onSelectedTodosChange}
        />
      </Col>
    </Row>
  );
};

export default List;
