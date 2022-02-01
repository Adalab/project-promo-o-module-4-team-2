import '../styles/components/Footer.scss';
import '../styles/core/Variables.scss';
import logoFooter from '../images/marilogo.svg';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <h5 className='footerCopy'>Awesome profile-cards &copy; 2021</h5>
      <img className='imageLogoAdalab' src={logoFooter} alt='logo' title='logo' />
    </footer>
  );
};

export default Footer;
