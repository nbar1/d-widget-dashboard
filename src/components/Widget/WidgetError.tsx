import { MdErrorOutline } from 'react-icons/md';
import styled from 'styled-components';

const WidgetErrorWrapper = styled.div`
  font-size: 128px;
`;
const WidgetError = () => {
  return (
    <WidgetErrorWrapper>
      <MdErrorOutline />
    </WidgetErrorWrapper>
  );
};

export default WidgetError;
