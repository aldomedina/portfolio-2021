import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const SAccordion = styled.div`
  height: ${({ h }) => h}px;
  transition: height 0.15s ease-in-out;
  overflow: hidden !important;
`;

const Accordion = ({ isActive = false, children }) => {
  const content = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    setContentHeight(isActive ? content.current.scrollHeight : 0);
  }, [isActive]);

  return (
    <SAccordion ref={content} h={contentHeight}>
      {children}
    </SAccordion>
  );
};

export default Accordion;
