import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { themeConfig } from './color-mode.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ChakraProvider theme={themeConfig}>
    <App />
  </ChakraProvider>
  // </React.StrictMode>
)
