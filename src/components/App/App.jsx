import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { SectionComponent } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });

    Notiflix.Report.success('WoooW', 'Thanks for your feedback', 'Cancel', {
      width: '360px',
      svgSize: '120px',
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const totalPercentage = this.countPositiveFeedbackPercentage() + '%';
    return (
      <>
        <SectionComponent title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </SectionComponent>
        <SectionComponent title={'Statistics'}>
          {totalFeedback ? (
            <>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={totalPercentage}
              />
            </>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionComponent>
      </>
    );
  }
}
