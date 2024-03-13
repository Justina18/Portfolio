import "./Header.css";
import 'animate.css';
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Design');
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo-2.png" alt="" />
        </div>

        <div className="head-cont-2">
          <div className="links">
            <p onClick={handleClick}>Design</p>
            <p href="#">Project</p>
            <p href="#">Contact</p>
            <p href="#" >Project</p>
          </div>
          <div className="header-buttons">
            <button>Sayhello@nina.fr</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
