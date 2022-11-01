export default function FeedbackOptions({
  onFeedback,
  options,
}) {
  return (
    <div>
     {Object.keys(options).map(key => (
      <button key={key} onClick={onFeedback} name={key}>
        {key}
      </button>
    ))}
    </div>
  );
}
