import React from 'react';

export default function Statistics({ good, neutral, bad, total, goodPercent }) {
  return (
    <div>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{total}</span>
      <span>Positive feedback:{goodPercent}%</span>
    </div>
  );
}
