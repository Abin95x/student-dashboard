import './App.css';
import { ThemeProvider } from '../src/components/ThemeProvider/ThemeProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/*" element={<Router />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
