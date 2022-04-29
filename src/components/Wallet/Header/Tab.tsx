import styled, { css } from 'styled-components';

type TabButtonProps = {
  isSelected: boolean;
};

const TabButton = styled.button<TabButtonProps>`
  border-bottom: ${(p) => (p.isSelected ? 'none' : '1px solid #e7e7e7')};
  border-right: 1px solid #e7e7e7;
  color: #474747;
  flex: 1;
  line-height: 64px;
  transition: color 100ms ease-in-out;

  ${(p) =>
    p.isSelected &&
    css`
      color: #3773f5;
      font-weight: 500;
    `}

  &:last-child {
    border-right: none;
  }
`;

type Props = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

const Tab: React.FC<Props> = ({ label, isSelected, onClick }) => {
  return (
    <TabButton isSelected={isSelected} onClick={onClick}>
      {label}
    </TabButton>
  );
};

export default Tab;
