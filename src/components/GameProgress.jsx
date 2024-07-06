import React from "react";
import { useSelector } from "react-redux";
import onePieceLogo from "assets/img/one-piece-logo.png"

const GameProgress = () => {
  const { currentLevel, levelCount } = useSelector(state => state.game);

  return (
    <>
      <div>
        <img src={onePieceLogo} alt="one-piece-logo" className="game-item-logo" />
      </div>
      <div className="level-finder">
      You are on level {currentLevel} out of {levelCount}
      </div>
      <div className="how-to-play">
        <h1 className="htp-main-heading">How To Play :</h1>
        <h1 className="htp-heading">Objectives:</h1>
        <p className="htp-desc">The goal of the game is to find all matching pairs of cards by flipping them over and remembering their positions.</p>
        <h1 className="htp-heading">Game Setup:</h1>
        <p className="htp-desc">The game board consists of a grid of cards placed face down. Each card has a matching pair hidden somewhere on the board.</p>
        <h1 className="htp-heading">Starting the Game:</h1>
        <p className="htp-desc">Click on any card to flip it over and reveal the image or text on the other side.</p>
        <h1 className="htp-heading">Finding a Match:</h1>
        <p className="htp-desc">After flipping the first card, click on a second card to flip it over.</p>
        <p className="htp-desc">If the images or texts on the two cards match, they will remain face up, and you have found a pair!</p>
        <p className="htp-desc">If the images or texts do not match, both cards will flip back face down after a short delay. Try to remember their positions for future attempts.</p>
        <h1 className="htp-heading">Continue Playing:</h1>
        <p className="htp-desc">Repeat the process of flipping two cards at a time, trying to find all the matching pairs.</p>
        <h1 className="htp-heading">Winning the Game:</h1>
        <p className="htp-desc">The game is won when all the matching pairs are found, and all the cards are face up.</p>
        <h1 className="htp-heading">Tips for Success:</h1>
        <p className="htp-desc">Pay close attention to the positions of the cards as you flip them over.</p>
        <p className="htp-desc">Try to remember the images or texts and their locations to quickly find matches.</p>
        <p className="htp-desc">The more you play, the better your memory skills will become!</p>
      </div>
    </>
  );
}

export default GameProgress