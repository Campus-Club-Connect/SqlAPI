// Fontawesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { useContext, useState } from "react";
import "./chats.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import moment from "moment";

const Chats = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery("chats", () =>
    makeRequest.get("/chats?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newChat) => {
      return makeRequest.post("/chats", newChat);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("chats");
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="chats">
      <h3>Chats</h3>
      <div className="chatPreview">
        {isLoading
          ? "loading..."
          : data.map((chat) => (
              <div className="chatContainer">
                <div className="chatInfo">
                  <img src={"/upload/" + chat.profilePic} alt="" />
                  <div className="chatDetails">
                    <span>{chat.name}</span>
                    <span className="date">
                      {moment(chat.sentDate).fromNow()}
                    </span>
                  </div>
                </div>
                <div className="chatBody">
                  <p>{chat.chatBody}</p>
                </div>
              </div>
            ))}
      </div>
      <div className="write">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="Write a chat..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default Chats;
