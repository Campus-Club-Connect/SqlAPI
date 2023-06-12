import React, { useState } from "react";
import "./newClubForm.scss";

const NewClubForm = () => {
  const [signatures, setSignatures] = useState([]);

  // Handle signature image upload
  const handleSignatureUpload = (event, index) => {
    const uploadedImage = event.target.files[0];
    const updatedSignatures = [...signatures];
    updatedSignatures[index] = URL.createObjectURL(uploadedImage);
    setSignatures(updatedSignatures);
  };

  return (
    <div className="club-registration-form">
      <div className="form-header">
        <div>New Club</div>
        <div>Registration Form</div>
      </div>
      <div className="form-divider"></div>
      <div className="form-title">Club Details</div>
      <div className="form-divider-small"></div>
      <form className="form-inputs">
        <div className="form-input">
          <input type="text" placeholder="Club Name" className="left" />
          <textarea
            type="text"
            placeholder="Purpose/Goals"
            className="textarea"
          />
          <textarea
            type="text"
            placeholder="Proposed Activities"
            className="textarea"
          />

          <div className="leftbox">
            <input
              type="text"
              placeholder="Potential membership"
              className="ele"
            />
            <input
              type="text"
              placeholder="Clubs Advisor name"
              className="ele"
            />
            <div className="upload-frame">
              <div className="upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleSignatureUpload(event, 0)}
                />
                <div className="upload-label">Upload Signature</div>
              </div>
              {signatures[0] && (
                <div className="signature-frame">
                  <img
                    src={signatures[0]}
                    alt="Signature 1"
                    className="uploaded-image"
                  />
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Club Vice President name"
              className="ele"
            />
            <div className="upload-frame">
              <div className="upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleSignatureUpload(event, 1)}
                />
                <div className="upload-label">Upload Signature</div>
              </div>
              {signatures[1] && (
                <div className="signature-frame">
                  <img
                    src={signatures[1]}
                    alt="Signature 2"
                    className="uploaded-image"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="rightbox">
            <input type="text" placeholder="Expected Budget" className="ele" />
            <input
              type="email"
              placeholder="Club President name"
              className="ele"
            />
            <div className="upload-frame">
              <div className="upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleSignatureUpload(event, 2)}
                />
                <div className="upload-label">Upload Signature</div>
              </div>
              {signatures[2] && (
                <div className="signature-frame">
                  <img
                    src={signatures[2]}
                    alt="Signature 3"
                    className="uploaded-image"
                  />
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Club Treasurer name"
              className="ele"
            />
            <div className="upload-frame">
              <div className="upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleSignatureUpload(event, 3)}
                />
                <div className="upload-label">Upload Signature</div>
              </div>
              {signatures[3] && (
                <div className="signature-frame">
                  <img
                    src={signatures[3]}
                    alt="Signature 4"
                    className="uploaded-image"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
      <div className="form-buttons">
        <button>Back</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default NewClubForm;
