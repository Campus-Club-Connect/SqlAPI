import "./clubDiscussionPosts.scss";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import DiscussionClubPost from "../discussionClubPost/DiscussionClubPost";

const ClubDiscussionPosts = ({ currentClub, onChildClick }) => {
  const { clubId, adminId, clubName, logo, members, bgImage } = currentClub;

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts/club/discussions/" + clubId).then((res) => {
      return res.data;
    })
  );
  return (
    <div className="clubDiscussionPosts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => (
            <DiscussionClubPost
              post={post}
              key={post.id}
              onChildClick={onChildClick}
            />
          ))}
    </div>
  );
};

export default ClubDiscussionPosts;
