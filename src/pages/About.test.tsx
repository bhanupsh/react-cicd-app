import { render, screen } from '@testing-library/react';
import About from './About';
import { describe, test, expect } from 'vitest';

describe('About Page', () => {
  test('shows about page heading', () => {
    render(<About />);
    expect(screen.getByText('About Page')).toBeInTheDocument();
  });

  test('shows about page description', () => {
    render(<About />);

    expect(
      screen.getByText('Built using React, Vite and CI/CD.')
    ).toBeInTheDocument();
  });
});
