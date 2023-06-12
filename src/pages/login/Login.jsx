import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import Startup from "./../../assets/columnBanner/startup.png";
import Gtech from "./../../assets/columnBanner/g-tech.png";
import Integrity from "./../../assets/columnBanner/integrity.png";
import LIA from "./../../assets/columnBanner/lia.png";
import MMD from "./../../assets/columnBanner/mmd.png";
import Rovers from "./../../assets/columnBanner/rover.png";
import Tarayana from "./../../assets/columnBanner/tarayana.png";
import Logo from "./../../assets/cccLogo.png";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="bgClubs">
        <div className="bgClub">
          <img src={Startup} alt="" />
        </div>
        <div className="bgClub">
          <img src={Rovers} alt="" />
        </div>
        <div className="bgClub">
          <img src={MMD} alt="" />
        </div>
        <div className="bgClub">
          <img src={Integrity} alt="" />
        </div>
        <div className="bgClub">
          <img src={LIA} alt="" />
        </div>
        <div className="bgClub">
          <img src={Tarayana} alt="" />
        </div>
        <div className="bgClub">
          <img src={Gtech} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="loginCard">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
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
                onChange={handleChange}
                required
              />
              <label className="placeholder">Password</label>
            </div>

            {err && err}
            <div className="buttonSpace">
              <button onClick={handleLogin} id="evil-button">
                Login
              </button>
            </div>
          </form>
          <div className="option">
            <p>
              <Link to="/register" className="anchorLink">
                Sign up{" "}
              </Link>
              a new one!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
