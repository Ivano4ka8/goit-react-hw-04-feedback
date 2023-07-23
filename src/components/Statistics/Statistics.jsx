import propTypes from 'prop-types';
import {
  StatisticsWrapper,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsWrapper>
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem> Neutral: {neutral}</StatisticsItem>
        <StatisticsItem> Bad: {bad}</StatisticsItem>
        <StatisticsItem> Total: {total}</StatisticsItem>
        <StatisticsItem>
          PositivePercentage: {positivePercentage}
        </StatisticsItem>
      </StatisticsList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.string.isRequired,
};
