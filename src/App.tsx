
import './App.css'
import { ThemeProvider } from '../src/components/ThemeProvider/ThemeProvider'
import DashBoard from './pages/DashBoard/DashBoard'


function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
         <DashBoard/>
      </ThemeProvider>
    </>
  )
}

export default App
