import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./clubRightBar.scss";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";

const ClubRightBar = ({ postId }) => {
  const [pinned, setPin] = useState("");
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery("pins", () =>
    makeRequest.get("/pins?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPins) => {
      return makeRequest.post("/pins", newPins);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("pins");
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ pinned, postId });
    setPin("");
  };

  return (
    <div className="clubRightBar">
      <div className="container">
        <div className="item">
          <span>Your Pins</span>
          <div className="user">
            <div className="userInfo">
              <img src={"/upload/" + currentUser.profilePic} alt="" />
              <p>
                <span>Faruzan</span> wishes to have a chat with you
              </p>
            </div>
            <button>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg"
                alt=""
              />
              <p>
                <span>Kazuha</span> has a meeting with you
              </p>
            </div>
            <button>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/34/d5/5c/34d55cc1946901bec07a508f963abc95.jpg"
                alt=""
              />
              <p>
                <span>Evelyn</span> changed her cover picture
              </p>
            </div>
            <button>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg"
                alt=""
              />
              <p>
                <span>Kazuha</span> flaged a bug
              </p>
            </div>
            <button>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg"
                alt=""
              />
              <p>
                <span>Kazuha</span> Pinsed on your post
              </p>
            </div>
            <button>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg"
                alt=""
              />
              <p>
                <span>Kazuha</span> Liked your post
              </p>
            </div>
            <button>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>

        <div className="item">
          <span>Online</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/34/d5/5c/34d55cc1946901bec07a508f963abc95.jpg"
                alt=""
              />
              <div className="online" />
              <span>Evelyn</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/cc/36/23/cc362322513c1ca26febcebbc372a475.jpg"
                alt=""
              />
              <div className="online" />
              <span>Faruzan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg"
                alt=""
              />
              <div className="online" />
              <span>Kazuha</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/ce/c9/49/cec9497f455ed2d9c4634157951a89de.jpg"
                alt=""
              />
              <div className="online" />
              <span>Lie Bie</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubRightBar;
