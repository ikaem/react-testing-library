import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodos = jest.fn();

describe('AddInput', () => {
  test('should render input element', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test('should be able to type into the input', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, {
      target: {
        value: 'Go Grocery Shopping',
      },
    });

    expect(inputElement.value).toBe('Go Grocery Shopping');
  });

  test('should have empty input when add button is clicked', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, {
      target: {
        value: 'Go Grocery Shopping',
      },
    });

    const buttonElement = screen.getByRole('button', { name: 'Add' });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe('');
  });
});
