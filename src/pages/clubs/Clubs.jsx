import "./clubs.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import InnerTab from "../../components/innerTab/InnerTab";
import BeforeClub from "../../components/miscellenious/beforeClub/BeforeClub";
import BeforeClubRightBar from "../../components/miscellenious/beforeClubRightBar/BeforeClubRightBar";

const Clubs = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="club-page">
      <div className="innerNavBar">
        <InnerTab />
      </div>
      <div className="contentWrapper">
        <div className="center">
          <BeforeClub />
        </div>
        <div className="right">
          <BeforeClubRightBar />
        </div>
      </div>
    </div>
  );
};

export default Clubs;
