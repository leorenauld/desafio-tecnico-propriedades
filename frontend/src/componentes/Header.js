import { Link } from "react-router-dom";

//header do projeto
const Header = () => {
    return (
      <header style={headerStyle}>
        <h1>
          <Link to="/" style={linkStyle}>Gerenciamento de Propriedades</Link>
        </h1>
      </header>
    );
  };
  
  const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'left',
    padding: '10px'
  };
  
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  };
  
  export default Header;