import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routing/AppRouter';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
// import Home from './pages/Home/Home';
// import Blog from './pages/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
