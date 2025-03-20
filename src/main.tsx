import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RevealSlides from './Components/RevealSlides.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RevealSlides>
      <App />
    </RevealSlides>
  </StrictMode>,
)
