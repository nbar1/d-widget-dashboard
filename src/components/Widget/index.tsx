import React, { Suspense, useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import WidgetLoader from './WidgetLoader';
import { WidgetContext } from './WidgetContext';
import WidgetError from './WidgetError';

const Widget = () => {
  const { widget, setResetError } = useContext(WidgetContext);
  const LoadedWidget = React.lazy(() => import(`../${widget?.componentPath}`));

  return (
    <div className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2">
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => {
          setResetError(resetErrorBoundary);
          return <WidgetError />;
        }}
      >
        <Suspense fallback={<WidgetLoader />}>
          <LoadedWidget />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Widget;
