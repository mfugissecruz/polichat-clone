import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { Router } from './Router';

export function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>   
  )
}
