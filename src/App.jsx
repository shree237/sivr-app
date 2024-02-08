import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import BookCarousel from './Components/BookCarousel';
import Videos from './Components/Videos';
import About from './Components/About';

function App() {
  

  return (
    <>
    <BrowserRouter>
    {/* <About /> */}
      <Header />
      <BookCarousel />
      <Videos />
    </BrowserRouter>
    </>
  )
}

export default App
