import "./Home.css";
import "/index.css";
import dark_arrow from "../../assets/images/dark-arrow.png";

const Home = () => {
  return (
    <>
      <div className="home-section container" id="home">
        <div className="home-text">
          <h1>We Ensure better education for a better world</h1>
          <p>
            Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education
          </p>

          <a href="#" className="btn">
            Explore more
            <img src={dark_arrow} alt="Arrow Icon" className="arrow-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
