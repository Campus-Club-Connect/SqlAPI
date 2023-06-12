import "./clubInfo.scss";
import Startup from "./../../assets/clubInfo/startup.png";

const ClubInfoStartup = () => {
  return (
    <div className="clubInfo">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={Startup} alt="" />
            <h4>Startup</h4>
          </div>
          <div className="desc">
            <p>
              The GCIT+ StartUp is a student-led agency comprising selected GCIT
              students, providing software development services with innovative
              UI/UX. The unique aspect of our agency is that students get to
              work on real industry projects, offering them a chance to gain
              hands-on experience in the start-up world.
              <br />
              <br />
              Here are the benefits of being part of GCIT+ StartUp:
              <br />
              <ul>
                <br />
                <li>
                  Students get to work alongside faculty to propose and
                  implement innovative solutions for businesses, which may
                  include product ideation, development, and monetization of
                  digital platforms.
                </li>
                <li>
                  Engagement with potentially a wide range of clientele and
                  companies; local to international.
                </li>
                <li>
                  Exposure to various job functions and operations in software
                  development and interactive design services.
                </li>
                <li>
                  Chance to undertake paid industry projects while pursuing an
                  undergraduate program, giving a competitive advantage upon
                  graduation.
                </li>
                <li>
                  Building confidence, competence, and a robust portfolio of
                  accomplishments through these projects.
                </li>
                <br />
              </ul>
              Whether you are a student planning to launch your own start-up or
              aiming to enter the workforce after graduation, GCIT+ StartUp can
              provide you with valuable experiences and skillsets to help you
              navigate the next phase of your journey.
            </p>
            <br />
            <p>
              Club Advisors:
              <h4>Howard Yap</h4>
              <h4>Yonten Jamtsho</h4>
              <h4>Mr.Ong</h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubInfoStartup;
