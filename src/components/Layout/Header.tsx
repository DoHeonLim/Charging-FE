import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h2>Header</h2>
      <Link to={'/'}>Home</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/community'}>Community</Link>
    </header>
  );
}

export default Header;
