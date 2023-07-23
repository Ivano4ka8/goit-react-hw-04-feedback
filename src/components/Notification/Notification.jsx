import propTypes from 'prop-types';
import Notiflix from 'notiflix';
import {
  NotificationMessage,
  NotificationWrapper,
} from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <NotificationWrapper>
      <NotificationMessage>{message}</NotificationMessage>
    </NotificationWrapper>
  );
};

Notiflix.Report.failure(
  'Oops',
  'You must leave a feedback!!!',
  'Leave feedback'
);

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
