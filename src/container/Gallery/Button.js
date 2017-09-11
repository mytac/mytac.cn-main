import React from 'react';

export function leftBtn({ event }) {
  return (
    <div className="gallery-button left" onClick={event} />
  );
}

export function rightBtn({ event }) {
  return (
    <div className="gallery-button right" onClick={event} />
  );
}
