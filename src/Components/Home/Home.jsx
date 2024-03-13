// import Preloader from "../../Loader/Preloader";
import Header from "../Header/Header";
import "./Home.css";
import 'animate.css';

function Home() {
  return (
    <div className="Home">
       <Header/>
      <div className="Home-container">
        <div className="Home-text">
          <p>👋, my name is Nina and I am a freelance</p>
        </div>
        <div className="Home-main-text">
          <p className="Home-main-text-p1">Web Developer</p>
          <p className="Home-main-text-p2">& Graphic Designer</p>
        </div>
        <div className="home-links">
          <div> <p> based in Lagos, Nigeria.</p></div>
          <div></div>
        </div>
        <div className="Home-Buttons">
          <button className="Home-Button-1">You need a Developer</button>
          <button className="Home-Button-2">You need a Designer</button>
        </div>
      </div>
      {/* <Preloader/> */}
    </div>
  );
}

export default Home;
