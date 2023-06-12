import "./clubInfo.scss";
import GTech from "./../../assets/clubInfo/G-tech.png";

const ClubInfoGTech = () => {
  return (
    <div className="clubInfo">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={GTech} alt="" />
            <h4>G-Tech</h4>
          </div>
          <div className="desc">
            <p>
              Welcome to G-Tech Club. It is a student-led organization that
              offers a wide range of resources and activities to students who
              are interested in programming and high performance computing.
              Whether you are a beginner or an experienced coder, the club
              welcomes all students to join and become active members.
              <br />
              <br />
              By joining our club, students will gain the following:
              <br />
              <ul>
                <br />
                <li>
                  Learning from industry professionals and guest speakers.
                </li>
                <li>
                  Networking with peers locally or internationally, who share
                  the same passion for coding and technology.
                </li>
                <li>
                  Enhance the knowledge and skills in coding and potentially
                  competitive coding.
                </li>
                <li>
                  Opportunities to participate in national or international
                  level coding competitions.
                </li>
                <br />
              </ul>
              Our club focuses on multiple languages and technologies, including
              web development, mobile app, blockchain, AI and more. Join us to
              give yourself an edge to modern technologies.
            </p>
            <br />
            <p>
              Club Advisors:
              <h4>Sonam Tshering</h4>
              <h4>Suraj Mukhia</h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubInfoGTech;
