import React from 'react';

export function LeftBtn({ event }) {
  return (
    <div className="gallery-button left" onClick={event} />
  );
}

export function RightBtn({ event }) {
  return (
    <div className="gallery-button right" onClick={event} />
  );
}
