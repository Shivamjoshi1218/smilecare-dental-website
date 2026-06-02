import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import FloatingCTA from './components/FloatingCTA'
import BackToTop from './components/BackToTop'
import AIChatAssistant from './components/AIChatAssistant'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <FloatingCTA />
        <BackToTop />
        <AIChatAssistant />
      </Router>
    </ThemeProvider>
  )
}

export default App
