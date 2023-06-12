import "./discussionClubPost.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import moment from "moment";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "react-query";

const DiscussionClubPost = ({ post, onChildClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (id) => {
    onChildClick(id);
  };

  const { currentUser } = useContext(AuthContext);

  // const toggleBookmark = () => {
  //   setIsBookmarked(!isBookmarked);
  // };

  const queryClient = useQueryClient();

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

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div className="discussionPost" onClick={() => handleItemClick(post.id)}>
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
      </div>
    </div>
  );
};

export default DiscussionClubPost;
