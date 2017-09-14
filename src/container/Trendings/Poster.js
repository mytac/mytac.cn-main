import React from 'react';

export default function Poster({ imgUrl }) {
  return (
    <div className="poster">
      <div className="bg" style={{ backgroundImage: `url(${imgUrl})` }} >
        <div className="filter-layout" />
      </div>
      <div className="description">
        <p className="title">Let Me In absolute absolute ute absoluteute absolute</p>
        <p className="rm">- Read More - </p>
      </div>
    </div>
  );
}
