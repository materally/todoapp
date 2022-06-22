import { Row, Col } from "react-bootstrap";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaTrashAlt,
} from "react-icons/fa";

import { Days, Todo } from "../../model";
import Todos from "./Todos";
import Icon from "./Icon";

interface ListProps {
  todos: Todo[];
  onSelectedTodosChange: (todo: Todo) => void;
  onDeleteIconClick: () => void;
  onMoveTodoClick: (direction: Days) => void;
  selectedTodos: Todo[];
}

const List = ({
  todos,
  onSelectedTodosChange,
  onDeleteIconClick,
  onMoveTodoClick,
  selectedTodos,
}: ListProps) => {
  const todayTodos = todos.filter(({ day }) => day === Days.TODAY);
  const tomorrowTodos = todos.filter(({ day }) => day === Days.TOMORROW);

  return (
    <Row className="mt-4">
      <Col>
        <Todos
          title="Tasks for Today"
          todos={todayTodos}
          selectedTodos={selectedTodos}
          onSelectedTodosChange={onSelectedTodosChange}
        />
      </Col>
      <Col className="d-flex flex-column justify-content-between align-items-center">
        <Icon
          label="Tomorrow"
          icon={<FaArrowAltCircleRight className="fs-1" />}
          onClick={() => onMoveTodoClick(Days.TOMORROW)}
        />
        <Icon
          label="Today"
          icon={<FaArrowAltCircleLeft className="fs-1" />}
          onClick={() => onMoveTodoClick(Days.TODAY)}
        />
        <Icon
          label="Delete"
          icon={<FaTrashAlt className="fs-1" />}
          onClick={onDeleteIconClick}
        />
      </Col>
      <Col>
        <Todos
          title="Tasks for Tomorrow"
          todos={tomorrowTodos}
          selectedTodos={selectedTodos}
          onSelectedTodosChange={onSelectedTodosChange}
        />
      </Col>
    </Row>
  );
};

export default List;
