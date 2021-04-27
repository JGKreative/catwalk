import React, { useState } from 'react';

const Helpful = () => {
  const [hasClicked, setHasClicked] = useState(false);
  const [helpfulYesCount, setHelpfulYesCount] = useState(0);
  const [helpfulNoCount, setHelpfulNoCount] = useState(0);
  const [reported, setReported] = useState(false);

  const displayReported = !reported ? <a style={{ textDecorationLine: 'underline' }} onClick={() => setReported(true)}> Report </a> : <span> Reported </span>

  const onYesClick = (e) => {
    setHelpfulYesCount(helpfulYesCount + 1);
    setHasClicked(true);
  };

  const onNoClick = (e) => {
    setHelpfulNoCount(helpfulNoCount + 1);
    setHasClicked(true);
  };

  return (
    <div>
      Was this review helpful? {" "}
      <a style={!hasClicked ? { textDecorationLine: 'underline' } : null} onClick={!hasClicked ? onYesClick : null}>
        Yes
      </a>
      <span> ({helpfulYesCount}) </span>
      <a style={!hasClicked ? { textDecorationLine: 'underline' } : null} onClick={!hasClicked ? onNoClick : null}>
        No
      </a >
      <span> ({helpfulNoCount}) </span>
      <span>{" | "}</span>
      { displayReported }
    </div >
  );
}

export default Helpful;
