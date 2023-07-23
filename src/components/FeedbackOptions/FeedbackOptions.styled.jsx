import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const FeedbackItem = styled.li``;

export const FeedbackButton = styled.button`
  background-color: ${props => props.theme.colors.pink};
  border-radius: 50%;
  padding: ${props => props.theme.spacing(4)};

  font-size: ${props => props.theme.fontSizes.medium};
  box-shadow: rgba(87, 4, 56, 0.884) -5px 5px, rgba(101, 9, 67, 0.3) -10px 10px,
    rgba(129, 4, 83, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px,
    rgba(72, 3, 47, 0.05) -25px 25px;

  transition: all 250ms linear;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.violet};
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
      rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
      rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
    color: ${props => props.theme.colors.pink};
  }
`;
