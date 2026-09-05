import { SpeedInsights } from "@vercel/speed-insights/react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './lib/theme.tsx'
import { LanguageProvider } from './lib/language.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
        <SpeedInsights />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
