import "./clubPost.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useContext, useState } from "react";
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";

const ClubPost = ({ post, onChildClick }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (id) => {
    onChildClick(id);
  };

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

  const {
    isLoading: cIsLoading,
    error: cError,
    data: cData,
  } = useQuery(["comments", post.id], () =>
    makeRequest.get("/comments?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

  const [isBookmarked, setIsBookmarked] = useState(false);

  const {
    isLoading: pIsLoading,
    error: pError,
    data: pData,
  } = useQuery(["pins", post.id], () =>
    makeRequest.get("/pins?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

  // const toggleBookmark = () => {
  //   setIsBookmarked(!isBookmarked);
  // };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      console.log(liked);
      if (liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );

  const pMutation = useMutation(
    (pinned) => {
      console.log(pinned);
      if (pinned) return makeRequest.delete("/pins?postId=" + post.id);
      const pinData = {
        postId: post.id,
        desc: post.desc,
      };
      return makeRequest.post("/pins", pinData);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["pins"]);
      },
    }
  );

  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete("/posts/" + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handlePin = () => {
    pMutation.mutate(pData.includes(currentUser.id));
  };
  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div className="clubPost" onClick={() => handleItemClick(post.id)}>
      <div className="postContainer">
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
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>

          <div className="moreActions">
            <FontAwesomeIcon icon={faBookmark} className="pin" />
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

        <div className="postContent">
          <p>{post.desc}</p>
          <img src={"/upload/" + post.img} alt="" />
        </div>

        <div className="info">
          <div className="item">
            <FontAwesomeIcon icon="fa-thumbs-up" />
            <p>{data?.length}</p>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <p>{cData?.length} comments</p>
          </div>
        </div>

        <div className="actions">
          <div className="item" onClick={handleLike}>
            {isLoading ? (
              "loading"
            ) : data.includes(currentUser.id) ? (
              <FontAwesomeIcon icon="fa-thumbs-up" style={{ color: "black" }} />
            ) : (
              <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
            )}

            <p>Like</p>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <FontAwesomeIcon icon="fa-regular fa-comment" />
            <p>Comment</p>
          </div>

          <div className="item pin" onClick={handlePin}>
            {pIsLoading ? (
              "loading"
            ) : pData.includes(currentUser.id) ? (
              <FontAwesomeIcon icon={faBookmark} style={{ color: "black" }} />
            ) : (
              <FontAwesomeIcon icon="fa-regular fa-bookmark" />
            )}
            <p>Pin</p>
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default ClubPost;
