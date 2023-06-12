import "./clubInfo.scss";
import MMD from "./../../assets/clubInfo/mmd.png";

const ClubInfoMMD = () => {
  return (
    <div className="clubInfo">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={MMD} alt="" />
            <h4>MMD</h4>
          </div>
          <div className="desc">
            <p>
              MMD is GCIT’s student-driven marketing, media and design club. We
              work closely with the school’s Student Services Office (SSO) to
              manage internal and external activities by curating and building
              modern content, with the objective of amplifying the school’s
              brand.
              <br />
              <br />
              Students that join the club will
              <br />
              <ul>
                <br />
                <li>
                  Gain practical, real-world experience by working with the SSO
                </li>
                <li>Work on and execute real digital marketing campaigns</li>
                <li>
                  Build a portfolio of digital content that will be reflected on
                  GCIT’s online platforms
                </li>

                <br />
              </ul>
              If you’re an inspiring digital marketeer or content creator, this
              will be the platform for you to learn and grow.
            </p>
            <br />
            <p>
              Club Advisors:
              <h4>Jaime Tan</h4>
              <h4>Rebecca Tirwa</h4>
              <h4>Kuenga Lhaden</h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubInfoMMD;
