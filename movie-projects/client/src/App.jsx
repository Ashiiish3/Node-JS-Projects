import './App.css'
import Footer from './Components/Footer'
import Navbar from './components/Navbar'
import AllRoutes from './Routes/AllRoutes'

function App() {
  return (
    <>
    <div className='bg-gray-800 w-[70%] m-auto px-2 h-[100vh]'>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
    </>
  )
}

export default App