import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  // Temporary dummy data
  const stories = [
    {
      id: 1,
      name: "Evelyn",
      img: "https://i.pinimg.com/564x/84/b6/71/84b6711634f292361a44f36394ce4cab.jpg",
    },
    {
      id: 2,
      name: "Lie Bei",
      img: "https://i.pinimg.com/564x/ce/c9/49/cec9497f455ed2d9c4634157951a89de.jpg",
    },
    {
      id: 3,
      name: "Faruzan",
      img: "https://i.pinimg.com/564x/cc/36/23/cc362322513c1ca26febcebbc372a475.jpg",
    },
    {
      id: 4,
      name: "Kazuha",
      img: "https://i.pinimg.com/564x/dc/63/54/dc6354592fe60de131c02239aedcc758.jpg",
    },
    // {
    //   id: 5,
    //   name: "Kazuha",
    //   img: "https://i.pinimg.com/564x/dc/63/54/dc6354592fe60de131c02239aedcc758.jpg",
    // },
  ];
  return (
    <div className="stories">
      <div className="story userStory">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span className="uName">{currentUser.name}</span>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
