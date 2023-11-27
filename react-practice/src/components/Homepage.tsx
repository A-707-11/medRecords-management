import background from '../images/Background.png';
import rightArrow from '../images/right-arrow.png';
import './Homepage.css';

const Home = () => {
  return (
    <div className = "doctorImg">
      <img src = {background} alt="Doctor" />
      <div className="overlay-text">
        <h1>Don't know where to start?</h1>
        <p>LET'S HELP YOU</p>
        <p>GET STARTED</p>
        <a href="/"><img src = {rightArrow} alt = "right-arrow"/></a>
      </div>
    </div>
  );
}

export default Home;