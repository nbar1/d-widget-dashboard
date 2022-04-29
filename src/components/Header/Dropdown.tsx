import { useContext } from 'react';
import { DropdownWrapper, DropdownButton, DropdownContainer, DropdownLabel } from './Header.styles';
import { availableWidgets, Widget } from '../helpers/availableWidgets';
import { WidgetContext } from '../Widget/WidgetContext';

type DropdownProps = {
  dropdownVisible: boolean;
  setDropdownVisible: (dropdownVisible: boolean) => void;
};

const Dropdown = ({ dropdownVisible, setDropdownVisible }: DropdownProps) => {
  const { setWidget } = useContext(WidgetContext);

  return (
    <DropdownWrapper
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <DropdownButton dropdownVisible={dropdownVisible}>Widgets</DropdownButton>
      {dropdownVisible && (
        <DropdownContainer>
          <ul>
            {availableWidgets.map((widget: Widget) => (
              <DropdownLabel
                key={widget.name}
                onClick={() => {
                  setWidget(widget);
                  setDropdownVisible(false);
                }}
              >
                {widget.name}
              </DropdownLabel>
            ))}
          </ul>
        </DropdownContainer>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
