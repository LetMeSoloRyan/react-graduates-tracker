import BarChart from "../bar/bar";
import Bump from "../bump/bump";
import "./homepage.css";

const Homepage = () => {
  let number = 180;
  return (
    <div className="homecontainer">
      <h1 className="number">'Graduated Student:'{number}</h1>
      <div className="Bar">
        <BarChart />
      </div>

      <div className="Bump">
        <Bump />
      </div>
    </div>
  );
};
export default Homepage;
