import {Button} from './ButtonClick.styled'

export default function FeedbackOptions({
  onFeedback,
  options,
}) {
  return (
    <div>
     {Object.keys(options).map(key => (
      <Button key={key} onClick={onFeedback} name={key}>
        {key}
      </Button>
    ))}
    </div>
  );
}
