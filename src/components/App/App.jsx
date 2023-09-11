import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { SectionComponent } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import Notiflix from 'notiflix';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good * 100) / countTotalFeedback());
  }

  function onLeaveFeedback(option) {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }

    Notiflix.Report.success('WoooW', 'Thanks for your feedback', 'Cancel', {
      width: '360px',
      svgSize: '120px',
    });
  }

  const options = Object.keys({ good, bad, neutral });
  const totalFeedback = countTotalFeedback();
  const totalPercentage = countPositiveFeedbackPercentage() + '%';

  return (
    <>
      <SectionComponent title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
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
};
