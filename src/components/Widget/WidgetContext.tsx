import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { availableWidgets, Widget } from '../helpers/availableWidgets';

type WidgetContextProps = {
  widget: Widget | null;
  setWidget: (widget: Widget) => void;
};

export const WidgetContext = React.createContext<WidgetContextProps>({
  widget: null,
  setWidget: () => {},
});

type WidgetProviderProps = {
  children: React.ReactNode;
};

export const WidgetProvider = ({ children }: WidgetProviderProps) => {
  const [widget, setWidget] = useState<Widget | null>(null);

  useEffect(() => {
    // return if widget is set
    // if not, set it to the first available widget
    if (widget !== null) return;
    setWidget(availableWidgets[0]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const contextValues = {
    widget,
    setWidget,
  };

  return (
    <WidgetContext.Provider value={contextValues}>
      <Helmet>
        <title>{widget?.name ? `Widget: ${widget.name}` : 'Widget Demos'}</title>
      </Helmet>
      {children}
    </WidgetContext.Provider>
  );
};

export const { Consumer } = WidgetContext;
