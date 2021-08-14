import styled from 'styled-components';

export default styled.div`
  ${({ fullH }) => fullH && `height: 100%`};
  ${({ fullW }) => fullW && `width: 100%`};
  ${({ dflex }) => dflex && 'display: flex'};
  ${({ grow }) => grow && `flex-grow: ${grow}`};
  ${({ flex }) => flex && `flex: ${flex}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ items }) => items && `align-items: ${items}`};
  ${({ column }) => column && `flex-direction: column`};
  ${({ p, theme }) => p && `padding: ${theme.spacing}`};
  ${({ m, theme }) => m && `margin: ${theme.spacing}`};
  ${({ customPadding }) => customPadding && `padding: ${customPadding}`};
  ${({ pointer }) => pointer && `cursor: pointer`};
  ${({ br, theme }) => br && `border-right: 1px solid ${theme.colors.black}`};
  margin-top: ${({ mt, my }) => mt ?? my ?? ''};
  margin-bottom: ${({ mb, my }) => mb ?? my ?? ''};
  margin-left: ${({ ml, mx }) => ml ?? mx ?? ''};
  margin-right: ${({ mr, mx }) => mr ?? mx ?? ''};
  padding-top: ${({ pt, py }) => pt ?? py ?? ''};
  padding-bottom: ${({ pb, py }) => pb ?? py ?? ''};
  padding-left: ${({ pl, px }) => pl ?? px ?? ''};
  padding-right: ${({ pr, px }) => pr ?? px ?? ''};
`;
