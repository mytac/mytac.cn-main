import React from 'react';

export default function Poster({ animateKlass, imgUrl }) {
  return (
    <div alt="" className={`img animated ${animateKlass}`} style={{ backgroundImage: `url(${imgUrl})` }} />
  );
}

