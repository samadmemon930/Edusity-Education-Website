import "./Campus.css"
import gallery_1 from "../../assets/images/gallery-1.png"
import gallery_2 from "../../assets/images/gallery-2.png"
import gallery_3 from "../../assets/images/gallery-3.png"
import gallery_4 from "../../assets/images/gallery-4.png"
import white_arrow from "../../assets/images/white-arrow.png"
import Navbar from "../../Components/Navbar/Navbar"
import { Link } from "react-router-dom"

const Campus = () => {
  return (
    <>
      <Navbar />

      <div className="campus-section container" id="campus">
        <div className="title">
          <p>GALLERY</p>
          <h2>Campus Photos</h2>
        </div>

        <div className="Campus">
          <div className="Gallery-photos">
            <img src={gallery_1} alt="Campus 1" />
            <img src={gallery_2} alt="Campus 2" />
            <img src={gallery_3} alt="Campus 3" />
            <img src={gallery_4} alt="Campus 4" />
          </div>

          <Link to = "/" >
            <button type="button" className="btn dark-btn">
              See more here
              <img src={white_arrow} alt="Arrow" />
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Campus;
