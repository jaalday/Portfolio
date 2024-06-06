import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'

import Contact from './pages/Contact'
import PetMD from './pages/PetMD'
import CatCafe from './pages/CatCafe'

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
            {
              path: "/petmd",
              element: <PetMD/>,
            },
            {
              path: "/catcafe",
              element: <CatCafe/>,
            }
       
        

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


