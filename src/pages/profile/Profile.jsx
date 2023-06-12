import "./profile.scss";
import gtech from "./../../assets/club-logos/gtech.jpg";
import integrity from "./../../assets/club-logos/integrity.jpg";
import lia from "./../../assets/club-logos/lia.jpg";
import mmd from "./../../assets/club-logos/mmd.jpg";
import rovers from "./../../assets/club-logos/rovers.jpg";
import startup from "./../../assets/club-logos/startup.jpg";
import tarayana from "./../../assets/club-logos/tarayana.jpg";

import { useQuery, useQueryClient, useMutation } from "react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import Update from "../../components/update/Update";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const { isLoading: aIsLoading, data: affiliationData } = useQuery(
    ["affiliation"],
    () =>
      makeRequest.get("/affiliations?followedUserId=" + userId).then((res) => {
        return res.data;
      })
  );
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following)
        return makeRequest.delete("/affiliations?userId=" + userId);
      return makeRequest.post("/affiliations", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["affiliation"]);
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate(affiliationData.includes(currentUser.id));
  };

  // CCA

  const [CCA, toggleCCA] = useState(true);

  const showCCAHandler = () => {
    toggleCCA(!CCA);
  };

  return (
    <div className="profile">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="profileContainer">
            <div className="images">
              <img src={"/upload/" + data.coverPic} alt="" className="cover" />
              <div className="profilePic">
                <img src={"/upload/" + data.profilePic} alt="" />
              </div>
            </div>

            <div className="uInfo">
              <div className="uEdit">
                {aIsLoading ? (
                  "loading"
                ) : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)}>
                    Edit profile
                  </button>
                ) : (
                  <button onClick={handleFollow}>
                    {affiliationData.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </button>
                )}
              </div>
              <div className="uDetails">
                <div className="uTitle">
                  <span>{data.name}</span>
                  <h3>Admin</h3>
                </div>
                <div className="clubAffiliations">
                  <h3>Club Affiliations:</h3>
                  <div className="clubs">
                    <div className="images">
                      <img src={integrity} alt="" />
                    </div>
                    <div className="images">
                      <img src={startup} alt="" />
                    </div>
                    <div className="images">
                      <img src={lia} alt="" />
                    </div>
                    <div className="images">
                      <img src={mmd} alt="" />
                    </div>
                    <div className="images">
                      <img src={rovers} alt="" />
                    </div>
                    <div className="images">
                      <img src={tarayana} alt="" />
                    </div>
                    <div className="images">
                      <img src={gtech} alt="" />
                    </div>
                  </div>
                </div>

                <div className="uCCA">
                  <button
                    className={CCA ? "button-open" : "button-close"}
                    onClick={showCCAHandler}
                  >
                    {CCA ? "Show CCA" : currentUser.cca}
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  );
};

export default Profile;
