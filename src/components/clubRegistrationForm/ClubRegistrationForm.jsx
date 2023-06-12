import React from "react";
import "./clubRegistrationForm.scss";

const ClubRegistrationForm = () => {
  return (
    <div className="club-registration-form">
      <div className="form-header">
        Student Club <br /> Registration Form
      </div>
      <div className="form-divider"></div>
      <div className="form-title">Student Details</div>
      <div className="form-divider-small"></div>
      <form className="form-inputs">
        <div className="form-input">
          <input type="text" placeholder="Firstname" className="left" />
          <input type="text" placeholder="Middlename (optional)" />
          <input type="text" placeholder="Lastname" />
          <input type="text" placeholder="Enrollment" className="left" />
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Year" />
          <input type="text" placeholder="Clubs Interested" className="left" />
          <input type="email" placeholder="Email" />
        </div>
      </form>
      <div className="form-buttons">
        <button>Back</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ClubRegistrationForm;
