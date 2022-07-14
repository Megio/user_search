import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { setupI18n } from './i18n';
import './index.css'

setupI18n();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
