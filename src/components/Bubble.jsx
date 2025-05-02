import React, { useState } from 'react';

function Bubble({ popped, onClick }) {
  const bubbleStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: popped ? 'transparent' : 'lightblue',
    border: popped ? 'none' : '1px solid black',
    display: 'inline-block',
    margin: '5px',
    marginTop: '20px auto',
    marginLeft: '60px',
    padding: '5px',
    cursor: popped ? 'default' : 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div
      style={bubbleStyle}
      onClick={onClick}
    >
    </div>
  );
}

function BubbleWrap({ rows = 5, cols = 10 }) {
  const [poppedBubbles, setPoppedBubbles] = useState(
    Array(rows * cols).fill(false)
  );

  const handleBubbleClick = (index) => {
    const newPoppedBubbles = [...poppedBubbles];
    newPoppedBubbles[index] = true;
    setPoppedBubbles(newPoppedBubbles);
  };

  return (
    <div className='mt-32 pb-4 ml-32'>
      {Array(rows).fill(null).map((_, rowIndex) => (
        <div key={rowIndex}>
          {Array(cols).fill(null).map((_, colIndex) => {
            const index = rowIndex * cols + colIndex;
            return (
              <Bubble
                key={index}
                popped={poppedBubbles[index]}
                onClick={() => handleBubbleClick(index)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default BubbleWrap;