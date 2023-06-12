import PollsNewClubPost from "./pollsNewClubPost/PollsNewClubPost";
import "./pollsNewClubPosts.scss";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";

const PollsNewClubPosts = () => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts/newclubs").then((res) => {
      return res.data;
    })
  );

  return (
    <div className="pollsNewClubPosts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <PollsNewClubPost post={post} key={post.id} />)}
    </div>
  );
};

export default PollsNewClubPosts;
