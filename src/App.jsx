import {Navbar} from './components/Navbar';
import {Home} from './pages/Home';
import {Products} from './pages/Products';
import {Categories} from './pages/Categories';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {AddYourProduct} from "./pages/addYourProduct";
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addYourProduct" element={<AddYourProduct />} />
        </Routes>
      </main>
    </>
  );
}

export default App ;


