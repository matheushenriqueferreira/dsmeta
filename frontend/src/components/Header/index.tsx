import './styles.css';
import logo from '../../assets/img/logo.svg';

const Header = () => {
  return(
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por <a href='https://instagram.com/matheushferreira_'>@matheushferreira_</a>
        </p>
      </div>
    </header>
  );
} 

export default Header;