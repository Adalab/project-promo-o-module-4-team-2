import '../styles/components/Footer.scss';
import '../styles/core/Variables.scss';
import logoFooter from '../images/logo_footer.png';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <h5 className='footerCopy'>PS Management Profile Cards &copy; 2022</h5>
      <img className='imageLogoAdalab' src={logoFooter} alt='logo' title='logo' />
    </footer>
  );
};

export default Footer;
