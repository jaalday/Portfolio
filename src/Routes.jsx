import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'

import Contact from './pages/Contact'

import './App.css'

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Home/>,
            }, 
            {
                path: "/about",
                element: <About/>,

            },
            {
              path: "/contact",
              element: <Contact/>,
            },
       
        

        ]
    }
]
)


       


  
 
function RouterFunc() {
  return (
    <>
  <RouterProvider router = {router}/>
    
 
    </>
  )
}

export default RouterFunc


