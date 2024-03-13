import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
