import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const { register } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="logo">Campus Club Connect</div>

        <div className="registerCard">
          <h1>Register</h1>
          <form action="">
            <div className="inputBox">
              <input type="text" name="name" required onChange={handleChange} />
              <label className="placeholder">Full Name</label>
            </div>
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
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
              <label className="placeholder">Email</label>
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
              <p>
                By clicking login, you agree to our{" "}
                <a href="#">Terms and Conditions</a> and{" "}
                <a href="#">Privacy Policies</a>
              </p>
            </div>
            <div className="buttonSpace">
              <button onClick={handleClick} id="evil-button">
                Register
              </button>
            </div>
            <div className="option">
              <p>Already have an accounnt?</p>
              <Link to="/login">
                <p>Login</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
