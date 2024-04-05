import './App.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hack from './components/Hack'


const routing = createBrowserRouter([
  {
    path: "/",
    element: <Hack/>
  },
])
function App() {

  return (
    <>
    <RouterProvider router={routing}/>
    </>
  )
}

export default App
