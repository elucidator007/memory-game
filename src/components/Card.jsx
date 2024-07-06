import React from "react";
import defaultBackgroundImage from "assets/img/card-background.jpg";

const Card = ({
  data,
  setStatus,
  index,
  size
}) => {
  let content = (data && data.status) ? (
    (data.type === 'img') ?
      <></> :
      <p className="game-card-text">{data.value}</p>
  ) : null;

  let colClassName = "game-col game-col-" + size;
  console.log(data)
  let backgroundImage = (data && data.status) ? data.value : defaultBackgroundImage;

  return (
    <div className={colClassName}>
      <div
        className={
          (data && data.className)
            ? "game-card " + data.className
            : "game-card"
        }
        onClick={() => setStatus(index)}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="game-card-content">{content}</div>
      </div>
    </div>
  );
}

export default Card;
