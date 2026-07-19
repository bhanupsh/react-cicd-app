import { render, screen } from '@testing-library/react';
import Home from './Home';
import { describe, test, expect } from 'vitest';

describe('Home Page', () => {
  test('shows home heading', () => {
    render(<Home />);

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
