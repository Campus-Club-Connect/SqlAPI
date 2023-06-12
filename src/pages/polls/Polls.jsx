import "./polls.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import BeforeClubRightBar from "../../components/miscellenious/beforeClubRightBar/BeforeClubRightBar";
import InnerTabPolls from "../../components/innerTabPolls/InnerTabPolls";
import PresidentPoll from "../../components/presidentPoll/PresidentPoll";
import PollsNewClubPosts from "../../components/pollsNewClubPosts/PollsNewClubPosts";
import PollsClubRightBar from "../../components/pollsClubRightBar/PollsClubRightBar";
import PresidentPollRightBar from "../../components/presidentPollRightBar/PresidentPollRightBar";

const Polls = () => {
  const [currentInnerTab, setInnerTab] = useState(0);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="polls-page">
      <div className="innerNavBar">
        <InnerTabPolls
          currentInnerTab={currentInnerTab}
          setInnerTab={setInnerTab}
        />
      </div>
      {currentInnerTab !== 3 ? (
        <div className="content">
          <div className="center">
            {currentInnerTab === 0 ? <PollsNewClubPosts /> : <PresidentPoll />}
          </div>
          <div className="right">
            {currentInnerTab === 0 ? (
              <PollsClubRightBar />
            ) : currentInnerTab === 1 ? (
              <PresidentPollRightBar />
            ) : (
              "Choose a Club"
            )}
          </div>
        </div>
      ) : (
        <div className="registrationContent">
          <div className="allFill">{/* <ClubRegistrationForm /> */}</div>
        </div>
      )}
    </div>
  );
};

export default Polls;
