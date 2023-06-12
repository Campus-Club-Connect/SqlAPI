import { useState } from "react";
import "./innerTab.scss";

const InnerTab = (currentTab) => {
  const { currentInnerTab, setInnerTab } = currentTab;

  return (
    <div className="innerTab">
      <div className="center">
        <div
          className={`nav item1 ${currentInnerTab === 0 ? "active" : ""}`}
          onClick={() => setInnerTab(0)}
        >
          <p>Info</p>
        </div>

        <div
          className={`nav item2 ${currentInnerTab === 1 ? "active" : ""}`}
          onClick={() => setInnerTab(1)}
        >
          <p>Activities</p>
        </div>

        <div
          className={`nav item3 ${currentInnerTab === 2 ? "active" : ""}`}
          onClick={() => setInnerTab(2)}
        >
          <p>Discussion</p>
        </div>
        <div
          className={`nav item4 ${currentInnerTab === 3 ? "active" : ""}`}
          onClick={() => setInnerTab(3)}
        >
          <p>Register</p>
        </div>
      </div>
    </div>
  );
};

export default InnerTab;
