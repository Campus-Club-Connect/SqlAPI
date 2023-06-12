import ClubPost from "../clubPost/ClubPost";
import "./clubPosts.scss";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";

const ClubPosts = ({ currentClub }) => {
  const { clubId, adminId, clubName, logo, members, bgImage } = currentClub;

  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts/club/" + adminId).then((res) => {
      return res.data;
    })
  );
  return (
    <div className="clubPosts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <ClubPost post={post} key={post.id} />)}
    </div>
  );
};

export default ClubPosts;
