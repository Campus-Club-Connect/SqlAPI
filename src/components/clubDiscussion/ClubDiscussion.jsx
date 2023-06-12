import "./clubDiscussion.scss";
import ClubDiscussionPosts from "../clubDiscussionTopics/ClubDiscussionPosts";

const ClubDiscussion = ({ currentClub, onChildClick  }) => {
  return (
    <div className="clubDiscussion">
      <ClubDiscussionPosts currentClub={currentClub} onChildClick={onChildClick}/>
    </div>
  );
};

export default ClubDiscussion;
