import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer';
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

//Deberes:
//Leer y entender lo que hay en la carpetas store (context), hooks y services (servicios en si)