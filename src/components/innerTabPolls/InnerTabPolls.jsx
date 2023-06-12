import "./innerTabPolls.scss";

const InnerTabPolls = (currentTab) => {
  const { currentInnerTab, setInnerTab } = currentTab;

  return (
    <div className="innerTabPolls">
      <div className="center">
        <div
          className={`nav item1 ${currentInnerTab === 0 ? "active" : ""}`}
          onClick={() => setInnerTab(0)}
        >
          <p>NewClubs</p>
        </div>

        <div
          className={`nav item2 ${currentInnerTab === 1 ? "active" : ""}`}
          onClick={() => setInnerTab(1)}
        >
          <p>President</p>
        </div>
      </div>
    </div>
  );
};

export default InnerTabPolls;
