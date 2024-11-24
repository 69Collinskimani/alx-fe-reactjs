import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList", () => {
  test("renders Todo List correctly", () => {
    render(<TodoList />);

    // Check if the initial todos are rendered
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
    expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add new todo");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test("toggles a todo's completion", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);

    // Check if the text decoration changes (crossed out)
    expect(todo).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo); // Click again to uncheck

    expect(todo).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");
    const deleteButton = todo.nextSibling; // The delete button is the next sibling

    fireEvent.click(deleteButton); // Click to delete

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
