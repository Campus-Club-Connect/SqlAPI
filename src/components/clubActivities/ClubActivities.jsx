import "./clubActivities.scss";
import ClubPosts from "../clubPosts/ClubPosts";

const ClubActivities = ({ currentClub }) => {
  return (
    <div className="ClubActivities">
      <ClubPosts currentClub={currentClub} />
    </div>
  );
};

export default ClubActivities;
