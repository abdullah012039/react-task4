import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TodoPage from './TodoPage.jsx'
import WebPage from './WebPage.jsx'
import './index.css'
import WebPageContext from './WebPageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TodoPage />
    <WebPage />
    <WebPageContext />
  </StrictMode>,
)
