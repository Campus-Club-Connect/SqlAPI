import "./clubInfo.scss";
import Rovers from "./../../assets/clubInfo/rovers.png";

const ClubInfoRovers = () => {
  return (
    <div className="clubInfo">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={Rovers} alt="" />
            <h4>Rovers</h4>
          </div>
          <div className="desc">
            <p>
              Scouting has come a long way since its introduction in Bhutan in
              1970 as a Non-Governmental Organization, supported by Druk Gyalpo
              Jigme Khesar Namgyel Wangchuck. Rover Scouts, a group specifically
              designed for young adults in tertiary institutions and colleges,
              offer an array of opportunities for personal development,
              exploration, and adventure.
              <br />
              <br />
              Students joining GCIT Rover Scout can look forward to great
              opportunities as follow :
              <br />
              <ul>
                <br />
                <li>
                  Support environmental conservation efforts, including
                  tree-planting campaigns, clean-up drives, and waste management
                  projects.
                </li>
                <li>
                  Promote cultural preservation by participating in traditional
                  festivals, creating art exhibitions, and showcasing
                  traditional dances.
                </li>
                <li>
                  Involve in providing disaster relief to affected communities
                  by distributing supplies.
                </li>
                <li>
                  Participating in international Jamborees and Moots and
                  receiving awards for their contributions to Scouting and
                  community service.
                </li>
                <br />
              </ul>
              If you joined the Rover Scout Club, you will be participating in a
              movement that contributes both ways – your own personal
              development and the betterment of your community. It is an ideal
              club for individuals who enjoy volunteering and outdoor
              activities.
            </p>
            <br />
            <p>
              Club Advisors:
              <h4>Karma Dorji</h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubInfoRovers;
