import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import AdmissionForm from './page/admissionForm/AdmissionForm'
import { ThemeProvider } from '@material-tailwind/react'


// 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <AdmissionForm />
      }
    ],
  }
])
// 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
