import styled from 'styled-components';

export const StatisticsWrapper = styled.div``;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};
`;

export const StatisticsItem = styled.li`
  border-radius: 50%;
  padding: ${props => props.theme.spacing(4)};
  font-size: ${props => props.theme.fontSizes.medium};
  background-color: ${props => props.theme.colors.violet};
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
    rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
    rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  color: ${props => props.theme.colors.pink};
`;
