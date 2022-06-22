import { ChangeEventHandler } from "react";
import { Form, Button, Card, Row } from "react-bootstrap";
import { TodoDay, Days } from "../model";

interface AddProps {
  inputTodoValue: string;
  onInputChange?: ChangeEventHandler<HTMLInputElement>;
  inputDayValue: TodoDay;
  onRadioChange?: ChangeEventHandler<HTMLInputElement>;
  onButtonClick?: () => void;
}

const Add = ({
  inputTodoValue,
  onInputChange,
  inputDayValue,
  onRadioChange,
  onButtonClick,
}: AddProps) => {
  return (
    <Row className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Add new task</Card.Title>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-around">
            <Form.Control
              placeholder="Describe task"
              type="text"
              name="inputTodo"
              value={inputTodoValue}
              onChange={onInputChange}
              className="w-50"
            />
            <Form.Check
              inline
              type="radio"
              id={Days.TODAY}
              label="Today"
              value={Days.TODAY}
              name="day"
              onChange={onRadioChange}
              checked={inputDayValue === Days.TODAY}
            />
            <Form.Check
              inline
              type="radio"
              id={Days.TOMORROW}
              label="Tomorrow"
              value={Days.TOMORROW}
              name="day"
              onChange={onRadioChange}
              checked={inputDayValue === Days.TOMORROW}
            />
            <Button variant="success" onClick={onButtonClick}>
              Save
            </Button>
          </Form.Group>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Add;
