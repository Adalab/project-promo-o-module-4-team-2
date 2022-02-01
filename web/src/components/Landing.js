import { Link } from 'react-router-dom';
import LogoLanding from '../images/logo-awesome-profile-cards.svg';

const Landing = () => {
  return (
    <header className='headerLanding'>
      <img className='image' src={LogoLanding} alt='logo-awesome' />
      <h1 className='landingTitle'>Crea tu tarjeta de visita</h1>
      <h3 className='landingSubtitle'>
        Crea mejores contactos profesionales de forma fácil y cómoda
      </h3>

      <article>
        <ul className='rectangleElement'>
          <li className='itemList'>
            <i className='far fa-object-ungroup' alt='design'></i>
            <p>Diseña</p>
          </li>
          <li className='itemList'>
            <i className='far fa-keyboard' alt='Fill'></i>
            <p>Rellena</p>
          </li>
          <li className='itemList'>
            <i className='fas fa-share-alt' alt='Share'></i>
            <p>Comparte</p>
          </li>
        </ul>
      </article>
      <h2 className='buttonStartDesign'>
        <Link to='/card' className='buttonColor'>
          Comenzar
        </Link>
      </h2>
    </header>
  );
};
export default Landing;
