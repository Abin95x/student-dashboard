
import './App.css'
import UpcomingClasses from './components/UpcomingClasses/UpcomingClasses'
import { ThemeProvider } from '../src/components/ThemeProvider/ThemeProvider'


function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <UpcomingClasses />
      </ThemeProvider>
    </>
  )
}

export default App
