import React from 'react';

export function LeftBtn({ event }) {
  return (
    <div className="gallery-button" onClick={event} >
      <i className="icon-left-arrow" />
    </div>
  );
}

export function RightBtn({ event }) {
  return (
    <div className="gallery-button" onClick={event} >
      <i className="icon-right-arrow" />
    </div>
  );
}
