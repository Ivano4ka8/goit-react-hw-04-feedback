import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  padding-top: 50px;
`;
export const NotificationMessage = styled.p`
  font-weight: 900;
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;

  text-transform: uppercase;
  text-shadow: 1px 1px 0px #957dad, 1px 2px 0px #957dad, 1px 3px 0px #957dad,
    1px 4px 0px #957dad, 1px 5px 0px #957dad, 1px 6px 0px #957dad,
    1px 10px 5px rgba(16, 16, 16, 0.5), 1px 15px 10px rgba(16, 16, 16, 0.4),
    1px 20px 30px rgba(16, 16, 16, 0.3), 1px 25px 50px rgba(16, 16, 16, 0.2);
`;
