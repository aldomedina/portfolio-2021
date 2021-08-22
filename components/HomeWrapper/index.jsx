import styled from 'styled-components';
import Box from '../Box';
import breakpoints from '../Theme/breakpoints';

const SWrapper = styled(Box)`
  @media ${breakpoints.sm} {
    flex-direction: column;
  }
`;

const HomeWrapper = ({ children }) => (
  <SWrapper dflex fullW fullH>
    {children}
  </SWrapper>
);

export default HomeWrapper;
