import { TRANSACTION_TYPE } from '../types/TransactionType';

import styled from 'styled-components';
import Tab from './Tab';

const HeaderWrapper = styled.div`
  height: 64px;
  display: flex;
`;

type Props = {
  transactionType: TRANSACTION_TYPE;
  setTransactionType: (transactionType: TRANSACTION_TYPE) => void;
};

const Header: React.FC<Props> = ({ transactionType, setTransactionType }) => {
  return (
    <HeaderWrapper>
      <Tab
        label="Send"
        isSelected={transactionType === TRANSACTION_TYPE.SEND}
        onClick={() => setTransactionType(TRANSACTION_TYPE.SEND)}
      />
      <Tab
        label="Receive"
        isSelected={transactionType === TRANSACTION_TYPE.RECEIVE}
        onClick={() => setTransactionType(TRANSACTION_TYPE.RECEIVE)}
      />
      <Tab
        label="Convert"
        isSelected={transactionType === TRANSACTION_TYPE.CONVERT}
        onClick={() => setTransactionType(TRANSACTION_TYPE.CONVERT)}
      />
    </HeaderWrapper>
  );
};

export default Header;
