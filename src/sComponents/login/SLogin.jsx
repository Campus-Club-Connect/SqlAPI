import { useNavigate } from "react-router-dom";
import "./slogin.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { toast } from "react-toastify";
import LogoImg from "../../img/logoColor.png";

const SLogin = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      toast.success("Login Successful!");
      navigate("/admin/");
    } catch (err) {
      toast.error("Login Failed!");
    }
  };

  return (
    <div className="slogin">
      <div className="card">
        <div className="logo">
          <img src={LogoImg} className="LogoImg" alt="" />
        </div>
        <div className="loginCard">
          <h1>AdminDashboard</h1>
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
        </div>
      </div>
    </div>
  );
};

export default SLogin;
