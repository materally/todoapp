import { ChangeEventHandler } from "react";
import { Form, Button } from "react-bootstrap";
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
    <div className="row mt-4">
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
          id="today"
          label="Today"
          value="today"
          name="day"
          onChange={onRadioChange}
          checked={inputDayValue === Days.TODAY}
        />
        <Form.Check
          inline
          type="radio"
          id="tomorrow"
          label="Tomorrow"
          value="tomorrow"
          name="day"
          onChange={onRadioChange}
          checked={inputDayValue === Days.TOMORROW}
        />
        <Button variant="success" onClick={onButtonClick}>
          Save
        </Button>
      </Form.Group>
    </div>
  );
};

export default Add;
