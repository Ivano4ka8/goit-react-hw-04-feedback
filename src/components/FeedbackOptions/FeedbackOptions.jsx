import propTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackItem,
  FeedbackButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => {
        return (
          <FeedbackItem key={option}>
            <FeedbackButton
              type="button"
              option={option}
              onClick={event => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackButton>
          </FeedbackItem>
        );
      })}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
