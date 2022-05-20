import { MdErrorOutline } from 'react-icons/md';
import styled from 'styled-components';

const WidgetErrorWrapper = styled.div`
  cursor: pointer;
  text-align: center;

  svg {
    font-size: 128px;
    margin: 0 auto;
  }

  button {
    font-size: 36px;
  }
`;

type WidgetErrorProps = {
  resetErrorBoundary: () => void;
};

const WidgetError = ({ resetErrorBoundary }: WidgetErrorProps) => {
  return (
    <WidgetErrorWrapper onClick={resetErrorBoundary}>
      <MdErrorOutline />
      <button>Reload Application</button>
    </WidgetErrorWrapper>
  );
};

export default WidgetError;
