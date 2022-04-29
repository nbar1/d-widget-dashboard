import Widget from './components/Widget';
import Header from './components/Header';
import { WidgetProvider } from './components/Widget/WidgetContext';

const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-100 py-6 sm:py-12">
      <WidgetProvider>
        <Header />
        <Widget />
      </WidgetProvider>
    </div>
  );
};

export default App;
