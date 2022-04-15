import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe('Todo', () => {
  test('Adding a todo in AddInput will result in the same todo in the TodoList component', async () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, {
      target: {
        value: 'Go Grocery Shopping',
      },
    });

    const buttonElement = screen.getByRole('button', { name: 'Add' });
    fireEvent.click(buttonElement);
    const todoItemElement = screen.getByText(/go grocery shopping/i);
    expect(todoItemElement).toBeInTheDocument();
  });

  test('Adding todos in AddInput will result in the correct number of todos in the TodoList component', async () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: 'Add' });

    const todos = ['Todo 1', 'Todo 2', 'Todo 3'];

    for (const todo of todos) {
      fireEvent.change(inputElement, {
        target: {
          value: todo,
        },
      });

      fireEvent.click(buttonElement);
    }

    const taskItemElements = screen.getAllByTestId('task-item');
    expect(taskItemElements.length).toBe(todos.length);
  });

  test('Uncompleted task should not have an active class', async () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, {
      target: {
        value: 'Go Grocery Shopping',
      },
    });

    const buttonElement = screen.getByRole('button', { name: 'Add' });
    fireEvent.click(buttonElement);
    const todoItemElement = screen.getByText(/go grocery shopping/i);
    expect(todoItemElement).not.toHaveClass('todo-item-active');
  });

  test('Clicking on a todo changes its visual style', async () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, {
      target: {
        value: 'Go Grocery Shopping',
      },
    });

    const buttonElement = screen.getByRole('button', { name: 'Add' });
    fireEvent.click(buttonElement);
    const todoItemElement = screen.getByText(/go grocery shopping/i);
    fireEvent.click(todoItemElement);
    expect(todoItemElement).toHaveClass('todo-item-active');
  });
});
