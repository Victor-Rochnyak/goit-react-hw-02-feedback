import React from 'react';
// Стилі
import {DivStatistics} from './Statistics.styled'

export default function Statistics({ good, neutral, bad, total, goodPercent }) {
  return (
    <DivStatistics>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{total}</span>
      <span>Positive feedback:{goodPercent}%</span>
    </DivStatistics>
  );
}
