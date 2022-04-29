import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { availableWidgets, Widget } from '../helpers/availableWidgets';

type WidgetContextProps = {
  widget: Widget | null;
  setWidget: (widget: Widget) => void;
  setResetError: (resetErrorBoundary: () => void) => void;
};

export const WidgetContext = React.createContext<WidgetContextProps>({
  widget: null,
  setWidget: () => {},
  setResetError: () => {},
});

type WidgetProviderProps = {
  children: React.ReactNode;
};

export const WidgetProvider = ({ children }: WidgetProviderProps) => {
  const [widget, setWidget] = useState<Widget | null>(null);
  const [resetError, setResetError] = useState(() => () => {});

  useEffect(() => {
    // return if widget is set
    // if not, set it to the first available widget
    if (widget !== null) return;
    setWidget(availableWidgets[0]);
  }, [widget]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // reset error boundary on widget change
    if (resetError) resetError();
  }, [widget]); // eslint-disable-line react-hooks/exhaustive-deps

  const contextValues = {
    widget,
    setWidget,
    setResetError,
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
