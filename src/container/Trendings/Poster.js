import React from 'react';

export default function Poster({ imgUrl }) {
  return (
    <div className="poster" style={{ backgroundImage: `url(${imgUrl})` }} >
      <div className="filter-layout" />
    </div>
  );
}
