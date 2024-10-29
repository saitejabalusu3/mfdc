import { render, screen } from '@testing-library/react';
import App from './App';

test('Little Lemon', () => {
  render(<App />);
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
})