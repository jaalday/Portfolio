import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Movie from './pages/Movie'
import LaserKitty from './pages/LaserKitty'
import Contact from './pages/Contact'
import PetMD from './pages/PetMD'
import CatCafe from './pages/CatCafe'
import About from './pages/About'
import Resume from './pages/Resume'
import PhoneBook from './pages/PhoneBook'

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
              path: "/contact",
              element: <Contact/>,
            },
            {
              path: "/about",
              element: <About/>,
            },
            {
              path: "/petmd",
              element: <PetMD/>,
            },
            {
              path: "/catcafe",
              element: <CatCafe/>,
            }, 
            {
              path: "/movie",
              element: <Movie/>,

            },
            {
              path: "/laserkitty",
              element: <LaserKitty/>,
            },
            {
              path: "/resume",
              element: <Resume/>,
            },
            {
              path: "/phonebook",
              element: <PhoneBook/>,
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


