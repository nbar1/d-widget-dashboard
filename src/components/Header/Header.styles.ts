import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: #e4e4ff;
  height: 48px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
`;

export const WidgetLabel = styled.div<{ dropdownVisible: boolean }>`
  cursor: default;
  display: inline;
  line-height: 48px;
  padding: 0 16px 0 11px;
  text-align: center;
  transition: opacity 0.2s ease-in-out;
  opacity: 1;

  ${({ dropdownVisible }) =>
    dropdownVisible &&
    css`
      opacity: 0;
    `}
`;

export const DropdownWrapper = styled.div`
  display: inline;
`;

export const DropdownContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: #e7e7e7 0 0 2px 0;
  left: 10px;
  min-width: 160px;
  position: absolute;
  top: 58px;

  &:after {
    content: '';
    height: 10px;
    left: 0;
    position: absolute;
    top: -10px;
    width: 160px;
  }
`;

export const DropdownButton = styled.div<{ dropdownVisible: boolean }>`
  cursor: pointer;
  display: inline-block;
  line-height: 48px;
  padding: 0 21px 0 16px;
  position: relative;
  text-align: center;

  &::after {
    color: #c5c5ff;
    content: '▶';
    font-size: 0.8em;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.1s linear;
    transform: rotate(0deg);

    ${({ dropdownVisible }) =>
      dropdownVisible &&
      css`
        color: #b3b3ff;
        transform: rotate(90deg);
      `}
  }
`;

export const DropdownLabel = styled.li`
  cursor: pointer;
  padding: 6px 12px;

  &:hover {
    background-color: #e4e4ff;
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
