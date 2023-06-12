import "./clubInfo.scss";
import Integrity from "./../../assets/clubInfo/integrity.png";

const ClubInfoIntegrity = () => {
  return (
    <div className="clubInfo">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={Integrity} alt="" />
            <h4>Integrity</h4>
          </div>
          <div className="desc">
            <p>
              As per the recommendation by Royal Audit Authority and
              Anti-corruption commission, colleges should incorporate Integrity
              Club to enhance the accountability and proper budget utilization
              of all college resources. The club will facilitate and provide in
              depth analysis in cost management, identify significant risk and
              provide guidance to improve internal control. Most importantly,
              this will be the first club at all RUB colleges, to digitalize the
              auditing process. The club welcomes all the enthusiastic students
              to become active members.
              <br />
              <br />
              Following are the skills that will gain by students by joining the
              club:
              <br />
              <ul>
                <br />
                <li>
                  Students will develop their critical thinking skill, using
                  logical reasoning to suggest solutions. Students can think
                  critically as they review a club’s records to suggest
                  improvement areas of the club.
                </li>
                <li>
                  Helps to develop analytical skills. It will enhance your
                  analytical skill set while auditing a club’s process and
                  record, which is a critical being a young entrepreneur.
                </li>
                <li>
                  Helps to develop IT skills by develop the financial software
                  and consistently seek improvement areas of the app.
                </li>
                <br />
              </ul>
              Through the new digitalized audit system and processes, this club
              will help to improve efficiency and accuracy of data being
              audited. The club will help to support greater transparency and
              clear accountability on all clubs and college on the utilization
              of the allocated resources – financial and assets.
            </p>
            <br />
            <p>
              Club Advisors:
              <h4>Lee Chee Yong</h4>
              <h4>Nima Gyaltshen</h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubInfoIntegrity;
