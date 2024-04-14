import {useEffect} from 'react'
import Dashboard from "./Page/Dashboard"
import 'react-toastify/dist/ReactToastify.css';
  
import { ToastContainer, toast } from 'react-toastify';
 function App() {
useEffect(()=>{
  toast('Welcome to the Tantrim !',{autoClose:3000})
},[])

return(
  < div className="flex justify-center">
  <Dashboard/>
  <ToastContainer />
  </div>
)
  }
export default App