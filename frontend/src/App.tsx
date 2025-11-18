import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { ColorModeProvider } from './contexts/ColorModeContext';

function App() {
  return (
    <ColorModeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ColorModeProvider>
  );
}

export default App;
