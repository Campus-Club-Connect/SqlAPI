import "./beforeClubRightBar.scss";
import drama from "./../../../assets/drama.png";

const BeforeClubRightBar = () => {
  return (
    <div className="alertClubChoiceRightBar">
      <div className="container">
        <img src={drama} alt="" />
        <h4>Please Select a Club!</h4>

        <small>
          -------------------------------------------------------------------------------------------------------------------------------------------
        </small>

        <hr />

        <div className="copyrights">
          <div className="copyrightsLeft">
            <p>© Rights Reserved</p>
          </div>
          <div className="copyrightsCenter">
            <p>Campus Club Connect</p>
          </div>
          <div className="copyrightsRight">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeClubRightBar;
