import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className='header__card'>
      <Link to='/'>
        <img className='header__card--logo' src={props.img} alt='logo-awesome' />
      </Link>
    </header>
  );
};

export default Header;
