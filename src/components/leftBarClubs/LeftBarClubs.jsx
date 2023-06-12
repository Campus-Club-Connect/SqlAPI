import "./leftBarClubs.scss";
import RoversBannerColor from "./../../assets/banner/color/rovers.png";
import StartupBannerColor from "./../../assets/banner/color/startup.png";
import GtechBannerColor from "./../../assets/banner/color/gtech.png";
import LIABannerColor from "./../../assets/banner/color/lia.png";
import IntegrityBannerColor from "./../../assets/banner/color/integrity.png";
import MMDBannerColor from "./../../assets/banner/color/mmd.png";
import TarayanaBannerColor from "./../../assets/banner/color/tarayana.png";
import { Link } from "react-router-dom";

const LeftBarClubs = () => {
  return (
    <div className="leftBarClubs">
      <div className="container">
        <div className="menu">
          <Link
            to={`/clubs/rovers`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <div className="bg">
                <img src={RoversBannerColor} alt="" />
              </div>
            </div>
          </Link>

          <Link
            to={`/clubs/startup`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <div className="bg">
                <img src={StartupBannerColor} alt="" />
              </div>
            </div>
          </Link>

          <Link
            to={`/clubs/gtech`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <div className="bg">
                <img src={GtechBannerColor} alt="" />
              </div>
            </div>
          </Link>

          <Link
            to={`/clubs/lia`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <div className="bg">
                <img src={LIABannerColor} alt="" />
              </div>
            </div>
          </Link>

          <Link
            to={`/clubs/tarayana`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <div className="bg">
                <img src={TarayanaBannerColor} alt="" />
              </div>
            </div>
          </Link>

          <Link
            to={`/clubs/integrity`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <div className="bg">
                <img src={IntegrityBannerColor} alt="" />
              </div>
            </div>
          </Link>

          <Link
            to={`/clubs/mmd`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <div className="bg">
                <img src={MMDBannerColor} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBarClubs;
