import { fireEvent, screen, render } from "@testing-library/react";
import Task from "../Task";
import '@testing-library/jest-dom'

test("Delete task select", () => {
  const handleDeleteTask = jest.fn();
  const handleEditTask = jest.fn();
  render(
    <Task
      taskId={1}
      taskText="Pending task"
      handleDeleteTask={handleDeleteTask}
      handleEditTask={handleEditTask}
    />
  );
  const deleteButton = screen.getByRole("button", { name: /delete/i });
  fireEvent.click(deleteButton);
  expect(handleDeleteTask).toHaveBeenCalledWith(1);
});

test("Open task editor", () => {
  const handleDeleteTask = jest.fn();
  const handleEditTask = jest.fn();
  render(
    <Task
      taskId={1}
      taskText="Pending task"
      handleDeleteTask={handleDeleteTask}
      handleEditTask={handleEditTask}
    />
  );
  const editButton = screen.getByRole("button", { name: /edit/i });
  fireEvent.click(editButton)
  expect(screen.getByRole('dialog')).toBeInTheDocument()

});
