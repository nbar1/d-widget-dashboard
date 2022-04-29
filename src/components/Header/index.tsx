import { useContext, useState } from 'react';
import { WidgetContext } from '../Widget/WidgetContext';
import Dropdown from './Dropdown';
import { HeaderWrapper, WidgetLabel } from './Header.styles';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { widget } = useContext(WidgetContext);

  return (
    <HeaderWrapper>
      <Dropdown dropdownVisible={dropdownVisible} setDropdownVisible={setDropdownVisible} />
      <WidgetLabel dropdownVisible={dropdownVisible}>{widget?.name}</WidgetLabel>
    </HeaderWrapper>
  );
};

export default Header;
