import React from 'react';

export default function Poster({ animateKlass, imgUrl }) {
  return (
    <div alt="" className={`poster animated ${animateKlass}`} style={{ backgroundImage: `url(${imgUrl})` }} >
      <div className="description">
        <p className="title">Let Me In absolute absolute ute absoluteute absolute</p>
        <p className="rm">- Read More - </p>
      </div>
    </div>
  );
}

