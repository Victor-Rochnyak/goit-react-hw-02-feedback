import React from 'react';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from 'components/ButtonClick/ButtonClick';
// Стилі
import {Div,H2,DivButton,} from './FeadBack.styles'

class FeadBack extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  onClickBtn = event => 
  this.setState(prevState=>({
    [event.target.name]: prevState[event.target.name] +1,
  }))
 
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  goodPercent = () => {
    return parseInt((this.state.good / this.totalFeedback()) * 100);
  };
  render() {
    return (
      <Div>
        <H2>Please leave feedback</H2>
        {
          <DivButton>
            <FeedbackOptions
              options={this.state}
              onFeedback={this.onClickBtn}
            />
          </DivButton>
        }

        <H2>Statistics</H2>
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
      </Div>
    );
  }
}
export default FeadBack;
