import "./presidentPoll.scss";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
import PresidentPollPosts from "../presidentPollPosts/PresidentPollPosts";

const PresidentPoll = () => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts/president").then((res) => {
      return res.data;
    })
  );

  return (
    <div className="presidentPoll">
      <div className="container">
        <div className="menu">
          <h4>Try Out For Presidency!</h4>
          <div className="candidates">
            {error
              ? "Something went wrong!"
              : isLoading
              ? "loading"
              : data.map((post) => (
                  <PresidentPollPosts post={post} key={post.id} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentPoll;
