import React, { useState } from "react";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import SortIcon from "@material-ui/icons/Sort";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";

const SortBox: React.FC = () => {
  const [tab, setTab] = useState<number>(0);
  return (
    <div>
      <div className="tabs">
        <div className="tab-list">
          <div className="tab">
            <div
              className={tab === 0 ? "sort-select" : "sort-not-selected"}
              onClick={() => setTab(0)}
            >
              <SortIcon className="in-div" />
            </div>
          </div>
          <div className="tab">
            <div
              className={tab === 1 ? "sort-select" : "sort-not-selected"}
              onClick={() => setTab(1)}
            >
              <SortByAlphaIcon className="in-div" />
            </div>
          </div>
          <div className="tab">
            <div
              className={tab === 2 ? "sort-select" : "sort-not-selected"}
              onClick={() => setTab(2)}
            >
              <AttachMoneyIcon className="in-div" />
            </div>
          </div>
          <div className="tab">
            <div
              className={tab === 3 ? "sort-select" : "sort-not-selected"}
              onClick={() => setTab(3)}
            >
              <ColorLensIcon className="in-div" />
            </div>
          </div>
          <div className="tab">
            <div
              className={tab === 4 ? "sort-select" : "sort-not-selected"}
              onClick={() => setTab(4)}
            >
              <ThumbsUpDownIcon className="in-div" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBox;
