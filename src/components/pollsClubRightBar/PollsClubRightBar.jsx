import "./pollsClubRightBar.scss";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "react-query";

const PollsClubRightBar = () => {
  const { currentUser } = useContext(AuthContext);

  const [file, setFile] = useState(null);
  const [name, setName] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts/newclubs", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("posts");
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ name, img: imgUrl });
    setName("");
    setFile(null);
  };

  return (
    <div className="pollsClubRightBar">
      <div className="container">
        <div className="item">
          <h3>Propose Your Ideas!</h3>
          <div className="reviewDisplay">
            <input
              type="text"
              placeholder={`Club Name`}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="bottom">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="imageAdd">
                <span>Add Image</span>
              </div>
            </label>
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
          <div className="writeReview">
            <button onClick={handleClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollsClubRightBar;
