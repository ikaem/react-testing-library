// src\components\Header\__test__\Header.test.js

import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  test('should render the same text passed into the header title prop', async () => {
    render(<Header title={'My Header'} />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// test('should render the same text passed into the header title prop', async () => {
//   render(<Header title={'My Header'} />);
//   const headingElement = screen.getByRole('heading');
//   expect(headingElement).toBeInTheDocument();
// });

// test('should render the same text passed into the header title prop', async () => {
//   render(<Header title={'My Header'} />);
//   const headingElement = screen.getByRole('heading', { name: 'My Header' });
//   expect(headingElement).toBeInTheDocument();
// });

// test('should render the same text passed into the header title prop', async () => {
//   render(<Header title={'My Header'} />);
//   const headingElement = screen.getByTitle('Header');
//   expect(headingElement).toBeInTheDocument();
// });

// test('should render the same text passed into the header title prop', async () => {
//   render(<Header title={'My Header'} />);
//   const headingElement = screen.getByTestId('header-1');
//   expect(headingElement).toBeInTheDocument();
// });

// // FIND BY

// test('should render the same text passed into the header title prop', async () => {
//   render(<Header title={'My Header'} />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// // QUERY BY

// test('should render the same text passed into the header title prop', async () => {
//   render(<Header title={'My Header'} />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// // MULTIPLE

// test('should render the same text passed into the header title prop', async () => {
//   render(<Header title={'My Header'} />);
//   const headingElements = screen.getAllByRole('heading');
//   expect(headingElements.length).toBe(2);
// });

//
