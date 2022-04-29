import { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { TRANSACTION_TYPE } from './types/TransactionType';

const WalletContainer = styled.div`
  background-color: #fff;
  box-shadow: #e7e7e7 0 0 2px 0;
  border-radius: 15px;
  min-height: 496px;
  width: 380px;
`;

const Wallet = () => {
  // Default to SEND transaction
  const [transactionType, setTransactionType] = useState<TRANSACTION_TYPE>(TRANSACTION_TYPE.SEND);

  return (
    <WalletContainer>
      <Header transactionType={transactionType} setTransactionType={setTransactionType} />
    </WalletContainer>
  );
};

export default Wallet;
