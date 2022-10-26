import React from 'react';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from 'components/ButtonClick/ButtonClick';

class FeadBack extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickGod = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  onClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  goodPercent = () => {
    return parseInt((this.state.good / this.totalFeedback()) * 100);
  };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        {
          <div>
            <FeedbackOptions
              onClickGod={this.onClickGod}
              onClickNeutral={this.onClickNeutral}
              onClickBad={this.onClickBad}
            />
          </div>
        }

        <h1>Statistics</h1>
        {this.totalFeedback() ? (
          <div>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              goodPercent={this.goodPercent()}
            />
          </div>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
export default FeadBack;
