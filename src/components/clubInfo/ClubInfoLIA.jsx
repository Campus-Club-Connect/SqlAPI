import "./clubInfo.scss";
import LIA from "./../../assets/clubInfo/lia.png";

const ClubInfoLIA = () => {
  return (
    <div className="clubInfo">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={LIA} alt="" />
            <h4>LIA</h4>
          </div>
          <div className="desc">
            <p>
              The Literary and Interactive Arts Club is a vibrant community of
              young artists and creative thinkers who come together to explore
              their passions and hone their talents. The club will be focusing
              on Visual Arts (Music, Dance, Instruments, and Theatre), Creative
              Writing, and Digital Content Creation. We foster creativity,
              innovation, and self-expression through an array of activities
              that cater different artistic disciplines and philosophy. We
              encourage our members to explore new ideas, collaborate with
              others, and pursue their passions.
              <br />
              <ul>
                <br />
                <li>
                  To unleash and hone each member’s skills and talents through
                  various activities and workshops.
                </li>
                <li>
                  To boost the morale of each member and become confident
                  individuals in their respective specializations.
                </li>
                <li>
                  To allow them to express themselves and build a fun and
                  friendly environment.
                </li>
              </ul>
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

export default ClubInfoLIA;
