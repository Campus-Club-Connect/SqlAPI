import "./pollsNewClubPost.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { makeRequest } from "../../../axios";
import { AuthContext } from "./../../../context/authContext";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const PollsNewClubPost = ({ post }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest
      .get("/likes/pollsNewClub?postId=" + post.id)
      .then((res) => res.data)
  );

  const mutation = useMutation(
    (liked) => {
      if (liked) {
        return makeRequest.post("/likes/pollsNewClub", { postId: post.id });
      } else {
        return makeRequest.delete("/likes/pollsNewClub?postId=" + post.id);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["likes", post.id]);
      },
    }
  );

  const {
    isLoading: dIsLoading,
    error: dError,
    data: dData,
  } = useQuery(["dislikes", post.id], () =>
    makeRequest
      .get("/dislikes/pollsNewClub?postId=" + post.id)
      .then((res) => res.data)
  );

  const dislikeMutation = useMutation(
    (disliked) => {
      if (disliked) {
        return makeRequest.post("/dislikes/pollsNewClub", { postId: post.id });
      } else {
        return makeRequest.delete("/dislikes/pollsNewClub?postId=" + post.id);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["dislikes", post.id]);
      },
    }
  );

  const handleLike = () => {
    const liked = !data.includes(currentUser.id);
    mutation.mutate(liked);
    // Remove dislike if present
    if (dData.includes(currentUser.id)) {
      dislikeMutation.mutate(!liked);
    }
  };

  const handleDislike = () => {
    const disliked = !dData.includes(currentUser.id);
    dislikeMutation.mutate(disliked);
    // Remove like if present
    if (data.includes(currentUser.id)) {
      mutation.mutate(!disliked);
    }
  };

  // To delete Posts

  const deleteMutation = useMutation(
    (postId) => {
      console.log(postId);
      return makeRequest.delete("/posts/newclubs/" + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  // Calculate the width of the bar based on the like and dislike counts
  const calculateBarWidth = () => {
    const likes = data ? data.length : 0;
    const dislikes = dData ? dData.length : 0;
    const total = likes + dislikes;
    const percentage = total === 0 ? 0 : (likes / total) * 100;
    return `${percentage}%`;
  };

  // Calculate the percentage of likes based on the like and dislike counts
  const calculatePercentage = () => {
    const likes = data ? data.length : 0;
    const dislikes = dData ? dData.length : 0;
    const total = likes + dislikes;
    const percentage = total === 0 ? 0 : Math.round((likes / total) * 100);
    return percentage;
  };

  return (
    <div className="pollsNewClubPost">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <Link to={`/profile/${post.userId}`}>
              <img src={"/upload/" + post.profilePic} alt="" />
            </Link>
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{currentUser.name}</span>
              </Link>
              <span className="date">{moment(post.proposedAt).fromNow()}</span>
            </div>
          </div>
          <div className="moreActions">
            <FontAwesomeIcon
              icon={faEllipsis}
              className="moreOptions"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && post.userId === currentUser.id && (
              <button onClick={handleDelete}>Delete</button>
            )}
          </div>
        </div>

        <div className="content">
          <img src={"/upload/" + post.img} alt="" />
          <span className="newClubName">{post.newClubName}</span>
        </div>

        <div className="info">
          <div className="item" onClick={handleLike}>
            {isLoading ? (
              "loading"
            ) : data.includes(currentUser.id) ? (
              <FontAwesomeIcon icon="fa-thumbs-up" style={{ color: "black" }} />
            ) : (
              <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
            )}
          </div>
          <div className="bar">
            <div className="bar-inner" style={{ width: calculateBarWidth() }}>
              <span className="percentage">{calculatePercentage()}%</span>
            </div>
          </div>
          <div className="item" onClick={handleDislike}>
            {dIsLoading ? (
              "loading"
            ) : dData.includes(currentUser.id) ? (
              <FontAwesomeIcon icon="fa-thumbs-down" style={{ color: "red" }} />
            ) : (
              <FontAwesomeIcon icon="fa-regular fa-thumbs-down" />
            )}
          </div>
        </div>

        <div className="divider"></div>

        <div className="actions">
          <p>{data?.length}</p>

          <p>Votes: {data?.length + dData?.length}</p>

          <p>{dData?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default PollsNewClubPost;
