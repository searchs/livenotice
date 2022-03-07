import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: 'scroll',
        border: '1px solid gray',
        width: '80vw',
        height: '70vh'
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
