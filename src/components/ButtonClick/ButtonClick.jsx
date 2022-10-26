export default function FeedbackOptions({
  onClickGod,
  onClickNeutral,
  onClickBad,
}) {
  return (
    <div>
      <button type="button" onClick={onClickGod}>
        God
      </button>
      <button type="button" onClick={onClickNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onClickBad}>
        Bad
      </button>
    </div>
  );
}
