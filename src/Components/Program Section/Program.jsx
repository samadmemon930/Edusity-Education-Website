import "./Program.css"
import program_1 from "../../assets/images/program-1.png"
import program_2 from "../../assets/images/program-2.png"
import program_3 from "../../assets/images/program-3.png"
import program_icon_1 from "../../assets/images/program-icon-1.png"
import program_icon_2 from "../../assets/images/program-icon-2.png"
import program_icon_3 from "../../assets/images/program-icon-3.png"
import Navbar from "../../Components/Navbar/Navbar"




const Program = () => {
  return (
    <>
    <Navbar/>
    <div id="program" className="container">
    <div className="title">
        <p>Our PROGRAM</p>
        <h2>What We Offer</h2>
    </div>
    <div className="Programs">
        <div className="program-section" >
            <img src={program_1} alt=""></img>
            <div className="caption" >
                <img src={program_icon_1} alt="" ></img>
                 <p>Graduation Degree</p>
            </div>
        </div>

            <div className="program-section" >
            <img src={program_2}  alt=""></img>
             <div className="caption" >
                <img src={program_icon_2} alt="" ></img>
                <p>Masters Degree</p>
            </div>
        </div>

        <div className="program-section" >
            <img src={program_3} alt=""></img>
             <div className="caption" >
                <img src={program_icon_3} alt="" ></img>
                 <p> Post Graduation </p>
            </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default Program