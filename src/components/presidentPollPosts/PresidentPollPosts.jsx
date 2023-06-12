import "./presidentPollPosts.scss";
import BillDorji from "./../../assets/testProfiles/billDorji.png";
import ChimiDorji from "./../../assets/testProfiles/chimiDorji.png";
import KaliDorji from "./../../assets/testProfiles/kaliDorji.png";
import Kinchap from "./../../assets/testProfiles/kinchapDorji.png";
import Jamphel from "./../../assets/testProfiles/jamphel.jpg";
import { useContext, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { makeRequest } from "./../../axios";
import { AuthContext } from "./../../context/authContext";

const PresidentPollPosts = ({ post }) => {
  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  // // To delete Posts

  // const deleteMutation = useMutation(
  //   (postId) => {
  //     console.log(postId);
  //     return makeRequest.delete("/posts/newclubs/" + postId);
  //   },
  //   {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries(["posts"]);
  //     },
  //   }
  // );

  // const handleDelete = () => {
  //   deleteMutation.mutate(post.id);
  // };

  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    setVoted(!voted);
  };

  return (
    <div className="scroll">
      <div className="item">
        <img src={"/upload/" + post.candidateImg} alt="" />
      </div>
      <p>{post.candidateName}</p>
      <button onClick={handleVote}>{voted ? "Voted" : "Vote"}</button>
    </div>
  );
};

export default PresidentPollPosts;
