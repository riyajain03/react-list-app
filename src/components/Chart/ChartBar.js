import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barfillHeight = "0%";
  if (props.max > 0) {
    barfillHeight = Math.random((props.value / props.maxValue) * 100 + "%");
    
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barfillHeight }}
        ></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
