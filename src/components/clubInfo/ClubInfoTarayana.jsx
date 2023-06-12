import "./clubInfo.scss";
import Tarayana from "./../../assets/clubInfo/tarayana.png";

const ClubInfoTarayana = () => {
  return (
    <div className="clubInfo">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={Tarayana} alt="" />
            <h4>Tarayana</h4>
          </div>
          <div className="desc">
            <p>
              The inception of the Tarayana club at the college starts from the
              motive of Tarayana Foundation of Bhutan. Tarayana Foundation was
              established in 2003 by Her Majesty the Queen Mother, Azhi Dorji
              Wangmo Wangchuck. It is a non-profit organization that
              wholeheartedly works to uplift and enhance the lives of people in
              rural communities in Bhutan through the following objectives.
              <br />
              <ul>
                <br />
                <li>
                  Identify and assist poor rural communities to become
                  self-reliant and self-sufficient through the initiation of
                  income-generating activities.
                </li>
                <li>
                  Enable children from disadvantaged and poor families to pursue
                  education through support grants for basic needs of uniforms,
                  shoes, and other necessary expenses.
                </li>
                <li>
                  To be young volunteers in actions for uplifting disadvantaged
                  folks through outreach programs and social service.
                </li>
                <li>
                  To raise funds to ensure the sustainability of the club.
                </li>
                <li>
                  Become a volunteer tutor and a mentor to younger kids around
                  the community.
                </li>
                <br />
              </ul>
              If you want to be part of a community of givers in making a stand
              and difference to the disadvantaged and underprivileged
              communities in our country, choose TARAYANA Club.
            </p>
            <br />
            <p>
              Club Advisors:
              <h4>Yeshi Tshering</h4>
              <h4>Dorji Phuntsho</h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubInfoTarayana;
