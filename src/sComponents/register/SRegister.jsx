import { Link } from "react-router-dom";
import "./sregister.scss";
import { useState } from "react";
import axios from "axios";

const SRegister = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const { register } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <div className="sregister">
      <div className="card">
        <div className="logo">Campus Club Connect</div>

        <div className="registerCard">
          <h1>Register</h1>
          <form action="">
            <div className="inputBox">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                required
              />
              <label className="placeholder">Username</label>
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
              <label className="placeholder">Password</label>
            </div>

            {err && err}

            <div class="agreement">
              <p></p>
            </div>
            <div className="buttonSpace">
              <button onClick={handleClick} id="evil-button">
                Register
              </button>
            </div>
            <div className="option">
              <p>Already have an accounnt?</p>
              <Link to="/admin/login">
                <p>Login</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SRegister;
