import "./reviews.scss";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

// Fontawesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="reviews">
      <div className="container">
        <div className="item">
          <h3>Reviews</h3>
          <div className="reviewDisplay">
            <div className="userReviews">
              <div className="userInfo">
                <img
                  src="https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg"
                  alt=""
                />
                <span>Kazuha</span>
              </div>
              <div className="userRatings">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
                <FontAwesomeIcon icon="fa-regular fa-star" />
              </div>
            </div>

            <div className="userReviews">
              <div className="userInfo">
                <img
                  src="https://i.pinimg.com/564x/34/d5/5c/34d55cc1946901bec07a508f963abc95.jpg"
                  alt=""
                />
                <span>Evelyn</span>
              </div>
              <div className="userRatings">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
                <FontAwesomeIcon icon="fa-regular fa-star" />
                <FontAwesomeIcon icon="fa-regular fa-star" />
                <FontAwesomeIcon icon="fa-regular fa-star" />
              </div>
            </div>
            <div className="userReviews">
              <div className="userInfo">
                <img
                  src="https://i.pinimg.com/564x/34/d5/5c/34d55cc1946901bec07a508f963abc95.jpg"
                  alt=""
                />
                <span>Evelyn</span>
              </div>
              <div className="userRatings">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="userReviews">
              <div className="userInfo">
                <img
                  src="https://i.pinimg.com/564x/34/d5/5c/34d55cc1946901bec07a508f963abc95.jpg"
                  alt=""
                />
                <span>Evelyn</span>
              </div>
              <div className="userRatings">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon="fa-regular fa-star" />
                <FontAwesomeIcon icon="fa-regular fa-star" />
                <FontAwesomeIcon icon="fa-regular fa-star" />
                <FontAwesomeIcon icon="fa-regular fa-star" />
              </div>
            </div>
          </div>
        </div>
        <div className="writeReview">
          <div className="write">
            <div className="userRatings">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon="fa-regular fa-star" />
              <FontAwesomeIcon icon="fa-regular fa-star" />
              <FontAwesomeIcon icon="fa-regular fa-star" />
              <FontAwesomeIcon icon="fa-regular fa-star" />
            </div>
            <input type="text" placeholder="Leave a review..." />

            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
