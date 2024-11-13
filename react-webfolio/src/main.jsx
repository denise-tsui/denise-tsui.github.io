import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import "@fontsource/dm-mono"
import "@fontsource/monofett"
import "@fontsource/outfit"
import "@fontsource/roboto"
import "@fontsource/ubuntu-mono"
import "@fontsource/vt323"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
