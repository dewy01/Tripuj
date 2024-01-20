import './App.css'
import { Navbar } from './component/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App;
