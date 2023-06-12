import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./pins.scss";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";

const Pins = ({ postId }) => {
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
    <div className="pins">
      <div className="container">
        {isLoading
          ? "Loading..."
          : data.map((pin) => (
              <div className="item">
                <span>Your Pins</span>
                <div className="user">
                  <div className="userInfo">
                    <img src={"/upload/" + pin.profilePic} alt="" />
                    <p>
                      <span>{pin.name}</span> {pin.desc}
                    </p>
                  </div>
                  <button>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Pins;
