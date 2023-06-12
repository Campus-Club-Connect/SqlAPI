import { useState } from "react";
import Reviews from "../../../components/reviews/Reviews";
import "./tarayana.scss";
import InnerTab from "../../../components/innerTab/InnerTab";
import ClubActivities from "../../../components/clubActivities/ClubActivities";
import ClubRightBar from "../../../components/clubRightBar/ClubRightBar";
import ClubDiscussion from "../../../components/clubDiscussion/ClubDiscussion";
import Chats from "../../../components/chats/Chats";
import ClubRegistrationForm from "../../../components/clubRegistrationForm/ClubRegistrationForm";
import { useQuery } from "react-query";
import { makeRequest } from "../../../axios";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import ClubInfoTarayana from "../../../components/clubInfo/ClubInfoTarayana";

const Tarayana = () => {
  const [currentInnerTab, setInnerTab] = useState(0);
  const { currentUser } = useContext(AuthContext);

  const {
    isLoading: clubLoading,
    error: clubError,
    data: clubData,
  } = useQuery(["clubs"], () =>
    makeRequest.get("/clubs/find/6").then((res) => {
      return res.data;
    })
  );

  // For clickable posts
  const [selectedId, setSelectedId] = useState(null);

  const handleChildClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="tarayana-page">
      <div className="innerNavBar">
        <InnerTab currentInnerTab={currentInnerTab} setInnerTab={setInnerTab} />
      </div>
      {currentInnerTab !== 3 ? (
        <div className="content">
          <div className="center">
            {currentInnerTab === 0 ? (
              <ClubInfoTarayana />
            ) : currentInnerTab === 1 ? (
              <ClubActivities currentClub={clubData} />
            ) : currentInnerTab === 2 ? (
              <ClubDiscussion
                currentClub={clubData}
                onChildClick={handleChildClick}
              />
            ) : (
              "<AlternativeComponent />"
            )}
          </div>
          <div className="right">
            {currentInnerTab === 0 ? (
              <Reviews />
            ) : currentInnerTab === 1 ? (
              <ClubRightBar />
            ) : currentInnerTab === 2 ? (
              <Chats postId={selectedId} />
            ) : (
              "Choose a Club"
            )}
          </div>
        </div>
      ) : (
        <div className="registrationContent">
          <div className="allFill">
            <ClubRegistrationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tarayana;
