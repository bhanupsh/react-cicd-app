import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1 data-testid="title">React CI/CD Demo</h1>

      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
