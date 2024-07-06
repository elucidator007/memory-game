import React from "react";
import sunnyScroll from "assets/img/sunny-scroll.png"

const Attempts = ({ currentAttempt, maxAttempt }) => {

  let width = Math.round(currentAttempt / maxAttempt * 100).toString() + "%";

  if (width === "0%") {
    width = "5%";
  }
  return (
    <div className="attempt-main">
      <div className="attempt-head">
        <div>You have {maxAttempt} attempts to match all the items.</div>
        <div>{currentAttempt} / {maxAttempt}</div>
      </div>
      <div>
      <div className="attempt-progressbar">
          <div className="attempt-progressbar-improvement" style={{ width: width }}>
            <img className="progress-img" src={sunnyScroll} alt="thousand sunny" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Attempts;
