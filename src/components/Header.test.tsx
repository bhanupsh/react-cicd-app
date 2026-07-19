import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';
import { describe, test, expect } from 'vitest';

describe('Header Component', () => {
  test('renders application title', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId('title')).toHaveTextContent('React CI/CD Demo');
  });

  test('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();

    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
