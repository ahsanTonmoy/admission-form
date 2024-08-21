import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// 
const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>helolo</h1>,
    children:[],
  }
])
// 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
