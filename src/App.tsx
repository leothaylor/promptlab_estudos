import './index.css';
import './styles/layout.css';
import './styles/components.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import DemoPage from './pages/DemoPage';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
