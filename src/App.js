import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Clubs from "./pages/clubs/Clubs";
import Register from "./pages/register/Register";
import "./style.scss";

//React imports
import { library } from "@fortawesome/fontawesome-svg-core"; //allows later to just use icon name to render-them
import { far } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RightBar from "./components/rightBar/RightBar";
import LeftBar from "./components/leftBar/LeftBar";
import Profile from "./pages/profile/Profile";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "react-query";
import LeftBarClubs from "./components/leftBarClubs/LeftBarClubs";
import GTech from "./pages/clubs/gTech/GTech";
import LIA from "./pages/clubs/lia/LIA";
import MMD from "./pages/clubs/mmd/MMD";
import Rovers from "./pages/clubs/rovers/Rovers";
import Integrity from "./pages/clubs/integrity/Integrity";
import Tarayana from "./pages/clubs/tarayana/Tarayana";
import Startup from "./pages/clubs/startup/Startup";
import NewClubRegister from "./pages/clubs/newClubRegister/NewClubRegister";
import NewClubForm from "./components/newClubRegistrationForm/NewClubForm";
import Polls from "./pages/polls/Polls";

// Super Admin
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import UpdateForm from "./sComponents/Form.js";
import Grid from "./sComponents/Grid";
import Ccain from "./sComponents/Ccain";
import Gtech from "./sComponents/Gtech.js";
import Rover from "./sComponents/Rover";
import StartUp from "./sComponents/Startup.js";

import Cca from "./sComponents/Cca";
// import ParentComponent from "./sComponents/showForm";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import SAllUsers from "./sComponents/AllUsers";
import SNavbar from "./sComponents/navbar";
import SLogin from "./sComponents/login/SLogin";
import SRegister from "./sComponents/register/SRegister";

// FontAweome

library.add(far, faThumbsUp, faComment, faArrowUpFromBracket, faThumbsDown);

const SContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const STitle = styled.h2`
  text-align: center;
  padding-top: 10px;
`;

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/admin");
      setUsers(res.data.sort((a, b) => (a.username > b.username ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }} className="mainBody">
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const Club = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }} className="motherContainer">
            <LeftBarClubs />
            <div style={{ flex: 9 }}>
              <Outlet />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const Poll = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }} className="motherContainer">
            <LeftBarClubs />
            <div style={{ flex: 9 }}>
              <Outlet />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  // Admin

  const SLayout = () => {
    return (
      <>
        <SContainer>
          <SNavbar />
          <STitle>Admins</STitle>
          <UpdateForm getUsers={getUsers} />
          <Grid users={users} setUsers={setUsers} />
        </SContainer>
        <ToastContainer
          autoClose={3000}
          position={toast.POSITION.BOTTOM_LEFT}
        />
        <GlobalStyle />
      </>
    );
  };

  const SCCA = () => {
    return (
      <>
        <SContainer>
          <SNavbar />
          <STitle>CCA POINTS</STitle>
          <Ccain getUsers={getUsers} />

          <Cca users={users} setUsers={setUsers} />
        </SContainer>
        <ToastContainer
          autoClose={3000}
          position={toast.POSITION.BOTTOM_LEFT}
        />
        <GlobalStyle />
      </>
    );
  };

  const SAlluser = () => {
    return (
      <>
        <SContainer>
          <SNavbar />
          <STitle>All Users</STitle>

          <SAllUsers users={users} setUsers={setUsers} />
        </SContainer>

        <ToastContainer
          autoClose={3000}
          position={toast.POSITION.BOTTOM_LEFT}
        />
        <GlobalStyle />
      </>
    );
  };

  const SGtechs = () => {
    return (
      <>
        <SContainer>
          <SNavbar />
          <STitle>GTech Members</STitle>
          <Gtech users={users} setUsers={setUsers} />
        </SContainer>
        <ToastContainer
          autoClose={30000}
          position={toast.POSITION.BOTTOM_LEFT}
        />
        <GlobalStyle />
      </>
    );
  };
  const SRovers = () => {
    return (
      <>
        <SContainer>
          <SNavbar />
          <STitle>Rovers Members</STitle>
          <Rover users={users} setUsers={setUsers} />
        </SContainer>
        <ToastContainer
          autoClose={3000}
          position={toast.POSITION.BOTTOM_LEFT}
        />
        <GlobalStyle />
      </>
    );
  };
  const SStartups = () => {
    return (
      <>
        <SContainer>
          <SNavbar />
          <STitle>Startup Members</STitle>
          <StartUp users={users} setUsers={setUsers} />
        </SContainer>
        <ToastContainer
          autoClose={3000}
          position={toast.POSITION.BOTTOM_LEFT}
        />
        <GlobalStyle />
      </>
    );
  };
  const SLoginpage = () => {
    return (
      <>
        <SLogin />
        <ToastContainer
          autoClose={3000}
          position={toast.POSITION.BOTTOM_LEFT}
        />
        <GlobalStyle />
      </>
    );
  };

  const SProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/admin/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/clubs",
      element: (
        <ProtectedRoute>
          <Poll />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/clubs",
          element: <Clubs />,
        },
        {
          path: "/clubs/new-club-register",
          element: <NewClubRegister />,
        },
        {
          path: "/clubs/gtech",
          element: <GTech />,
        },
        {
          path: "/clubs/lia",
          element: <LIA />,
        },
        {
          path: "/clubs/mmd",
          element: <MMD />,
        },
        {
          path: "/clubs/rovers",
          element: <Rovers />,
        },
        {
          path: "/clubs/integrity",
          element: <Integrity />,
        },
        {
          path: "/clubs/tarayana",
          element: <Tarayana />,
        },
        {
          path: "/clubs/startup",
          element: <Startup />,
        },
      ],
    },
    {
      path: "/polls",
      element: (
        <ProtectedRoute>
          <Poll />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/polls",
          element: <Polls />,
        },
        {
          path: "/polls/new-clubs",
          element: <NewClubRegister />,
        },
        // {
        //   path: "/clubs/new-presidents",
        //   element: <GTech />,
        // },
      ],
    },
    {
      path: "/admin/login",
      element: <SLoginpage />,
    },
    {
      path: "/admin/users",
      element: <SAlluser />,
    },
    {
      path: "/admin/register",
      element: <SRegister />,
    },
    {
      path: "/admin/cca",
      element: <SCCA />,
    },
    {
      path: "/admin/clubs/gtech",
      element: <SGtechs />,
    },
    {
      path: "/admin/clubs/startup",
      element: <SStartups />,
    },
    {
      path: "/admin/clubs/rovers",
      element: <SRovers />,
    },
    {
      path: "/admin/",
      element: (
        <SProtectedRoute>
          <SLayout />
        </SProtectedRoute>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
